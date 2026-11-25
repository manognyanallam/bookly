'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMessage =
  'If an account exists for that email, a password reset link will be sent. Check your inbox and spam folder.';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSuccess('');

    const normalizedEmail = email.trim();
    if (!emailPattern.test(normalizedEmail)) {
      setError('Enter a valid email address.');
      return;
    }

    setSubmitting(true);

    try {
      const { error: requestError } =
        await supabase.auth.resetPasswordForEmail(normalizedEmail, {
          redirectTo: `${window.location.origin}/reset-password`,
        });

      if (requestError) {
        const code = requestError.code?.toLowerCase() ?? '';
        const message = requestError.message.toLowerCase();

        if (
          code === 'user_not_found' ||
          message.includes('user not found') ||
          message.includes('email not found')
        ) {
          setSuccess(successMessage);
          return;
        }

        if (
          requestError.status === 429 ||
          message.includes('rate limit') ||
          code.includes('rate_limit')
        ) {
          setError(
            'Too many reset requests were made. Please wait a while before trying again.'
          );
          return;
        }

        setError(
          'We could not send the reset email. Check your connection and try again later. If this continues, contact support.'
        );
        return;
      }

      setSuccess(successMessage);
    } catch {
      setError(
        'We could not reach the authentication service. Check your connection and try again.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-lg sm:p-9">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl font-black text-forest-800">
            Reset your password
          </h1>
          <p className="mt-2 text-sm text-charcoal-500">
            Enter your account email and we&apos;ll send a password reset link.
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
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
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

          {success && (
            <p
              role="status"
              className="rounded-xl bg-green-50 p-3 text-sm text-green-800"
            >
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-forest-700 py-3 font-semibold text-white shadow-sm transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Sending reset link...' : 'Send reset link'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-charcoal-600">
          Remembered your password?{' '}
          <Link
            href="/login"
            className="font-bold text-forest-700 hover:underline"
          >
            Sign in
          </Link>
        </p>

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
