'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { typingAttempts } from '@/lib/db/schema'
import { and, desc, eq, sql } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function saveTypingAttempt(input: { mode: string; wpm: number; accuracy: number; errors: number; backspaces: number; consistency: number; durationMs: number; personality: string }) {
  const userId = await getUserId()
  const values = { ...input, userId, wpm: Math.max(0, Math.round(input.wpm)), accuracy: Math.max(0, Math.min(100, Math.round(input.accuracy))), errors: Math.max(0, Math.round(input.errors)), backspaces: Math.max(0, Math.round(input.backspaces)), consistency: Math.max(0, Math.min(100, Math.round(input.consistency))), durationMs: Math.max(0, Math.round(input.durationMs)) }
  await db.insert(typingAttempts).values(values)
  revalidatePath('/')
  return { ok: true }
}

export async function getTypingDashboard() {
  const userId = await getUserId()
  const attempts = await db.select().from(typingAttempts).where(eq(typingAttempts.userId, userId)).orderBy(desc(typingAttempts.createdAt)).limit(30)
  const [summary] = await db.select({ total: sql<number>`count(*)`, bestWpm: sql<number>`coalesce(max(${typingAttempts.wpm}), 0)`, avgAccuracy: sql<number>`coalesce(avg(${typingAttempts.accuracy}), 0)`, avgConsistency: sql<number>`coalesce(avg(${typingAttempts.consistency}), 0)` }).from(typingAttempts).where(eq(typingAttempts.userId, userId))
  return { attempts, summary }
}

export async function getLeaderboard() {
  return db.select({ userId: typingAttempts.userId, wpm: typingAttempts.wpm, accuracy: typingAttempts.accuracy, mode: typingAttempts.mode, personality: typingAttempts.personality, createdAt: typingAttempts.createdAt }).from(typingAttempts).where(and(sql`${typingAttempts.accuracy} >= 80`, sql`${typingAttempts.wpm} > 0`)).orderBy(desc(typingAttempts.wpm)).limit(20)
}
