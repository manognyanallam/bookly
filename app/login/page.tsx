'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthProvider';

export default function LoginPage() {
  const { signIn, loading, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('error') === 'verification') {
      setError(
        'That confirmation link is invalid or has expired. Sign up again or contact support for help.'
      );
    } else if (params.get('passwordReset') === 'success') {
      setNotice('Your password has been updated. Sign in with your new password.');
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setNotice('');
    setSubmitting(true);

    const message = await signIn(email.trim(), password);

    if (message) {
      setError(message);
      setSubmitting(false);
      return;
    }

    router.replace('/library');
    router.refresh();
  }

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-forest-700">Loading...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-forest-800">
          You're already signed in.
        </h1>
        <button
          onClick={() => router.replace('/library')}
          className="rounded-full bg-forest-700 px-6 py-3 font-semibold text-white hover:bg-forest-800"
        >
          Go to My Library
        </button>
      </div>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-lg sm:p-9">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl font-black text-forest-800">
            Welcome Back!
          </h1>
          <p className="mt-2 text-sm text-charcoal-500">
            Sign in to continue your learning journey with Bookly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-charcoal-800"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-charcoal-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700 focus:ring-1 focus:ring-forest-700"
            />
            <div className="mt-2 text-right">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-forest-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {notice && (
            <p
              role="status"
              className="rounded-xl bg-green-50 p-3 text-sm text-green-800"
            >
              {notice}
            </p>
          )}

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
            {submitting ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-charcoal-600">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-bold text-forest-700 hover:underline"
          >
            Create one
          </Link>
        </p>

        <div className="mt-4 text-center">
          <Link
            href="/discover"
            className="inline-flex rounded-full border border-forest-700 px-5 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-50"
          >
            Continue as Guest
          </Link>
        </div>

        <div className="mt-6 border-t border-[#E5DFD5] pt-5 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-charcoal-500 hover:text-forest-800"
          >
            ← Back to Bookly
          </Link>
        </div>
      </div>
    </main>
  );
}