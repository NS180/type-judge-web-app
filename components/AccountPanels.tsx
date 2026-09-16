'use client'

import { useEffect, useState } from 'react'
import { getLeaderboard, getTypingDashboard } from '@/app/actions/typing'
import { useSession, signOut } from '@/lib/auth-client'

export function AccountPanels() {
  const { data: session } = useSession()
  const [dashboard, setDashboard] = useState<any>(null)
  const [leaders, setLeaders] = useState<any[]>([])
  useEffect(() => { if (session?.user) { getTypingDashboard().then(setDashboard).catch(() => undefined); getLeaderboard().then(setLeaders).catch(() => undefined) } }, [session?.user])
  return <section className="account-panels max-w-6xl mx-auto px-4 py-12"><div className="account-header"><div><p className="section-label">YOUR CONTROL ROOM</p><h2 className="text-4xl font-black">DASHBOARD + LEADERBOARD</h2></div>{session?.user ? <button className="btn-secondary" onClick={() => signOut().then(() => window.location.reload())}>SIGN OUT</button> : <div className="flex gap-2"><a className="btn-secondary" href="/sign-in">SIGN IN</a><a className="btn-primary" href="/sign-up">JOIN</a></div>}</div>{session?.user ? <div className="dashboard-grid"><div className="offset-card dashboard-card"><h3>YOUR BEST RUNS</h3><div className="metric-row"><strong>{dashboard?.summary?.bestWpm ?? 0}</strong><span>best WPM</span></div><div className="metric-row"><strong>{Math.round(Number(dashboard?.summary?.avgAccuracy ?? 0))}%</strong><span>average accuracy</span></div><div className="metric-row"><strong>{dashboard?.summary?.total ?? 0}</strong><span>tests completed</span></div><p className="muted">Your latest attempts stay here, ready for a rematch.</p></div><div className="offset-card dashboard-card leaderboard-card"><h3>TOP TYPERS</h3>{leaders.length ? leaders.map((entry, index) => <div className="leader-row" key={`${entry.userId}-${entry.createdAt}`}><b>#{index + 1}</b><span>{entry.personality}</span><strong>{entry.wpm} WPM</strong></div>) : <p className="muted">Finish a test with 80%+ accuracy to enter the board.</p>}</div></div> : <div className="offset-card account-callout"><h3>Save your scores. Build your legend.</h3><p>Create an account to unlock personal history, best runs, and the global leaderboard.</p></div>}</section>
}
