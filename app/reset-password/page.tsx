'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

type RecoveryStatus = 'checking' | 'ready' | 'invalid' | 'success';

export default function ResetPasswordPage() {
  const router = useRouter();
  const verification = useRef<Promise<boolean> | null>(null);
  const recoveryEventSeen = useRef(false);
  const [status, setStatus] = useState<RecoveryStatus>('checking');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session) {
        recoveryEventSeen.current = true;
        setStatus('ready');
      }
    });

    if (!verification.current) {
      verification.current = (async () => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);
          if (!exchangeError) {
            window.history.replaceState(
              {},
              document.title,
              window.location.pathname
            );
            return true;
          }

          return false;
        }

        const hashParams = new URLSearchParams(url.hash.slice(1));
        if (hashParams.get('type') !== 'recovery') {
          return false;
        }

        const recoveryAccessToken = hashParams.get('access_token');
        if (!recoveryAccessToken) {
          return false;
        }

        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        const isRecoverySession =
          !sessionError &&
          session?.access_token === recoveryAccessToken;

        if (isRecoverySession) {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }

        return isRecoverySession;
      })();
    }

    verification.current
      .then((isValid) => {
        if (active) {
          setStatus(
            isValid || recoveryEventSeen.current ? 'ready' : 'invalid'
          );
        }
      })
      .catch(() => {
        if (active) {
          setStatus(
            recoveryEventSeen.current ? 'ready' : 'invalid'
          );
        }
      });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Your password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('The passwords do not match.');
      return;
    }

    setSubmitting(true);

    let updateError;
    try {
      ({ error: updateError } = await supabase.auth.updateUser({ password }));
    } catch {
      setError(
        'We could not reach the authentication service. Check your connection and try again.'
      );
      setSubmitting(false);
      return;
    }

    if (updateError) {
      const code = updateError.code?.toLowerCase() ?? '';
      const message = updateError.message.toLowerCase();

      if (
        code.includes('password') ||
        message.includes('password should') ||
        message.includes('password is too')
      ) {
        setError('Choose a stronger password that meets the password requirements.');
      } else if (
        message.includes('expired') ||
        message.includes('invalid') ||
        message.includes('session')
      ) {
        setError('This reset link has expired or is invalid. Request a new reset link and try again.');
      } else if (updateError.status === 429 || message.includes('rate limit')) {
        setError('Too many password update attempts. Please wait a while and try again.');
      } else {
        setError('We could not update your password. Please try again.');
      }
      setSubmitting(false);
      return;
    }

    setPassword('');
    setConfirmPassword('');

    try {
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) {
        setError(
          "Your password was changed, but this session is still active. Use Bookly's sign-out option, then sign in with your new password."
        );
        setStatus('success');
        setSubmitting(false);
        return;
      }
    } catch {
      setError(
        "Your password was changed, but this session is still active. Use Bookly's sign-out option, then sign in with your new password."
      );
      setStatus('success');
      setSubmitting(false);
      return;
    }

    setStatus('success');
    setSubmitting(false);
    window.setTimeout(() => {
      router.replace('/login?passwordReset=success');
      router.refresh();
    }, 1200);
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-lg sm:p-9">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl font-black text-forest-800">
            Choose a new password
          </h1>
          <p className="mt-2 text-sm text-charcoal-500">
            Set a new password for your Bookly account.
          </p>
        </div>

        {status === 'checking' && (
          <p role="status" className="text-center text-sm text-forest-700">
            Checking your reset link...
          </p>
        )}

        {status === 'invalid' && (
          <div className="space-y-5 text-center">
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              This password reset link is invalid or has expired. Request a new
              reset link to continue.
            </p>
            <Link
              href="/forgot-password"
              className="inline-flex rounded-full bg-forest-700 px-6 py-3 font-semibold text-white hover:bg-forest-800"
            >
              Request a new link
            </Link>
          </div>
        )}

        {status === 'ready' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-charcoal-800"
              >
                New password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-charcoal-800"
              >
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Enter your new password again"
                className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-forest-700 py-3 font-semibold text-white shadow-sm transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Updating password...' : 'Update password'}
            </button>
          </form>
        )}

        {status === 'success' && (
          <div className="space-y-3">
            <p
              role="status"
              className="rounded-xl bg-green-50 p-3 text-center text-sm text-green-800"
            >
              Your password has been updated.
              {!error && ' Redirecting you to sign in...'}
            </p>
            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
          </div>
        )}

        <div className="mt-6 border-t border-[#E5DFD5] pt-5 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-charcoal-500 hover:text-forest-800"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
