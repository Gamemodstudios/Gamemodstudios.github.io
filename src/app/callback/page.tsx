'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

function CallbackContent() {
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get('code');
  const supabase = createClient();

  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleExchange = async () => {
      if (!code) {
        setStatus('error');
        setError('Missing code from login system.');
        return;
      }

      try {
        const res = await fetch(`http://localhost:3001/auth/exchange?code=${code}`);
        const data = await res.json();

        if (!res.ok) {
          setStatus('error');
          setError(data.error || 'Invalid response from login system.');
          return;
        }

        // Set Supabase session
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        });

        if (sessionError) {
          setStatus('error');
          setError(sessionError.message);
          return;
        }

        setStatus('success');
        router.push('/');
      } catch (err: any) {
        setStatus('error');
        setError('Exchange failed: ' + (err instanceof Error ? err.message : String(err)));
      }
    };

    if (typeof window !== 'undefined') {
      handleExchange();
    }
  }, [code, router, supabase.auth]);

  return (
    <>
      {status === 'loading' && <p className="text-lg">Authenticating...</p>}
      {status === 'success' && <p className="text-green-400">Success! Redirecting...</p>}
      {status === 'error' && <p className="text-red-500">Error: {error}</p>}
    </>
  );
}

export default function CallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
      {/* Fallback UI for when the client-side content is loading */}
      <Suspense fallback={<p className="text-lg">Loading authentication details...</p>}>
        <CallbackContent />
      </Suspense>
    </div>
  );
}