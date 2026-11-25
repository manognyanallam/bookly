'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

// Create one stable Supabase client.
const supabase = createClient();

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ error: string | null; confirmationRequired: boolean }>;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getSignupErrorMessage(error: {
  code?: string;
  message: string;
  status?: number;
}) {
  const code = error.code?.toLowerCase() ?? '';
  const message = error.message.toLowerCase();

  if (
    ['user_already_exists', 'email_exists', 'identity_already_exists'].includes(
      code
    ) ||
    message.includes('already registered') ||
    message.includes('already exists')
  ) {
    return 'An account with this email already exists. Sign in or reset your password.';
  }

  if (
    error.status === 429 ||
    [
      'over_email_send_rate_limit',
      'email_rate_limit_exceeded',
      'over_request_rate_limit',
    ].includes(code) ||
    message.includes('rate limit')
  ) {
    return 'Too many signup or email requests were made. Please wait a while and try again.';
  }

  if (
    message.includes('error sending confirmation email') ||
    message.includes('error sending email') ||
    message.includes('smtp')
  ) {
    return 'Supabase could not send the confirmation email. Check your inbox shortly, then try again later or contact support if it does not arrive.';
  }

  if (
    code.includes('weak_password') ||
    message.includes('password should') ||
    message.includes('password is too')
  ) {
    return 'Choose a stronger password that meets the password requirements.';
  }

  return 'We could not create your account. Please check your details and try again.';
}

function getSignInErrorMessage(error: {
  code?: string;
  message: string;
  status?: number;
}) {
  const code = error.code?.toLowerCase() ?? '';
  const message = error.message.toLowerCase();

  if (
    code === 'email_not_confirmed' ||
    message.includes('email not confirmed') ||
    message.includes('email_not_confirmed')
  ) {
    return 'Please confirm your email address using the link we sent before signing in.';
  }

  if (
    ['invalid_credentials', 'invalid_login_credentials'].includes(code) ||
    message.includes('invalid login credentials') ||
    message.includes('invalid email or password')
  ) {
    return 'The email or password is incorrect. Check your details or reset your password.';
  }

  if (error.status === 429 || message.includes('rate limit')) {
    return 'Too many sign-in attempts. Please wait a while and try again.';
  }

  return 'We could not sign you in. Check your connection and try again.';
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getUser().then(({ data, error }) => {
      if (!mounted) return;
      setUser(error ? null : data.user);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signUp(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        return {
          error: getSignupErrorMessage(error),
          confirmationRequired: false,
        };
      }

      if (data.user?.identities?.length === 0) {
        return {
          error:
            'An account with this email already exists. Sign in or reset your password.',
          confirmationRequired: false,
        };
      }

      return {
        error: null,
        confirmationRequired: !data.session,
      };
    } catch {
      return {
        error:
          'We could not reach the authentication service. Check your connection and try again.',
        confirmationRequired: false,
      };
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return error ? getSignInErrorMessage(error) : null;
    } catch {
      return 'We could not reach the authentication service. Check your connection and try again.';
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      return error?.message ?? null;
    } catch {
      return 'We could not sign you out. Check your connection and try again.';
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}