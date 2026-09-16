import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'

const toOrigin = (value?: string) => {
  if (!value) return null
  try {
    return new URL(value.includes('://') ? value : `https://${value}`).origin
  } catch {
    return null
  }
}

const runtimeOrigin = toOrigin(process.env.V0_RUNTIME_URL)
const devOrigins = ['http://localhost:3000', 'V0_DEV_APP_URL', 'V0_BUILD_URL', 'V0_SANDBOX_URL']
  .map((key) => toOrigin(process.env[key]))
  .filter((origin): origin is string => Boolean(origin))
const productionOrigins = [toOrigin(process.env.VERCEL_URL), toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL)]
  .filter((origin): origin is string => Boolean(origin))
const baseURL = process.env.BETTER_AUTH_URL
  ? toOrigin(process.env.BETTER_AUTH_URL)
  : productionOrigins[0] ?? runtimeOrigin ?? 'http://localhost:3000'

export const auth = betterAuth({
  database: pool,
  baseURL,
  emailAndPassword: { enabled: true, autoSignIn: true },
  trustedOrigins: process.env.NODE_ENV === 'development'
    ? ['http://localhost:3000', ...devOrigins, ...(runtimeOrigin ? [runtimeOrigin] : [])]
    : productionOrigins,
  ...(process.env.NODE_ENV === 'development' ? {
    advanced: {
      defaultCookieAttributes: { sameSite: 'none' as const, secure: true },
    },
  } : {}),
})
