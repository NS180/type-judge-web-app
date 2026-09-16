'use client'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter(); const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState(''); const [loading, setLoading] = useState(false)
  async function submit(event: FormEvent) { event.preventDefault(); setLoading(true); setError(''); const result = mode === 'sign-up' ? await authClient.signUp.email({ name, email, password }) : await authClient.signIn.email({ email, password }); setLoading(false); if (result.error) { setError('That did not work. Check your details and try again.'); return } router.push('/'); router.refresh() }
  return <main className="auth-page"><form className="auth-card offset-card" onSubmit={submit}><p className="section-label">TYPE JUDGE CLUB</p><h1>{mode === 'sign-up' ? 'Make your mark.' : 'Welcome back.'}</h1>{mode === 'sign-up' && <label>Name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>}<label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label><label>Password<input type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required /></label>{error && <p className="form-error">{error}</p>}<button className="btn-primary" disabled={loading}>{loading ? 'Checking...' : mode === 'sign-up' ? 'CREATE ACCOUNT' : 'SIGN IN'}</button><a href={mode === 'sign-up' ? '/sign-in' : '/sign-up'}>{mode === 'sign-up' ? 'Already a member? Sign in' : 'New here? Create an account'}</a></form></main>
}
