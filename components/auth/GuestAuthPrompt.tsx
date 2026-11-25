import Link from 'next/link';

export function GuestAuthPrompt({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="guest-auth-prompt-title"
        className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          id="guest-auth-prompt-title"
          className="font-serif text-xl font-bold text-forest-800"
        >
          Save this book to your library
        </h2>
        <p className="mt-2 text-sm text-charcoal-600">
          Sign in or create a free account to save books and track your
          listening progress. You can keep browsing and listening as a guest.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href="/login"
            className="rounded-full border border-forest-700 px-4 py-2.5 text-sm font-semibold text-forest-800"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-forest-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-800"
          >
            Sign up
          </Link>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-sm font-medium text-charcoal-500 hover:text-charcoal-800"
        >
          Continue browsing
        </button>
      </div>
    </div>
  );
}
