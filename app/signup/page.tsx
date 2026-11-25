'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/auth/AuthProvider';

export default function SignupPage() {
  const { signUp, loading, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);

    const result = await signUp(email.trim(), password);

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    setSuccess(
      result.confirmationRequired
        ? 'Your account was created. Check your inbox for a confirmation email before signing in. If it does not arrive, check your spam folder or try again later.'
        : 'Your account was created successfully. You can now sign in.'
    );

    setPassword('');
    setConfirmPassword('');
    setSubmitting(false);
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
        <Link
          href="/library"
          className="rounded-full bg-forest-700 px-6 py-3 font-semibold text-white"
        >
          Go to My Library
        </Link>
      </div>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[#E5DFD5] bg-white p-7 shadow-lg sm:p-9">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl font-black text-forest-800">
            Join Bookly
          </h1>
          <p className="mt-2 text-sm text-charcoal-500">
            Create an account to save books and track your learning progress.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal-800">
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
              className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-charcoal-800">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-charcoal-800">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password again"
              className="w-full rounded-xl border border-[#DCD5C9] bg-[#FAF7F2] px-4 py-3 text-sm text-charcoal-800 outline-none focus:border-forest-700"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="rounded-xl bg-green-50 p-3 text-sm text-green-800">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-forest-700 py-3 font-semibold text-white shadow-sm transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-charcoal-600">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-forest-700 hover:underline">
            Sign In
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
          <Link href="/" className="text-sm font-medium text-charcoal-500 hover:text-forest-800">
            ← Back to Bookly
          </Link>
        </div>
      </div>
    </main>
  );
}