'use client'

import { useSession } from '@/lib/auth-client'
import { AuthForm } from '@/components/AuthForm'

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession()

  if (isPending) return <main className="auth-loading"><span className="auth-loading-mark">⌨</span><p>Checking your typing aura...</p></main>
  if (!session?.user) {
    return (
      <main className="auth-gate">
        <div className="auth-gate-doodle doodle-one" aria-hidden="true">✦</div>
        <div className="auth-gate-doodle doodle-two" aria-hidden="true">?</div>
        <div className="auth-gate-note note-left" aria-hidden="true">NO ACCOUNT?<br />NO SCORE.</div>
        <div className="auth-gate-note note-right" aria-hidden="true">THE KEYBOARD<br />IS WATCHING.</div>
        <div className="auth-gate-copy">
          <span className="auth-kicker">ENTRY CHECKPOINT 001</span>
          <h1>Before we judge<br /><em>your typing...</em></h1>
          <p>Sign in first. The keyboard has trust issues.</p>
          <div className="auth-gate-arrow" aria-hidden="true">↘</div>
        </div>
        <AuthForm mode="sign-in" />
      </main>
    )
  }

  return <>{children}</>
}
