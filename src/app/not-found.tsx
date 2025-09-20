'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Check if we're on GitHub Pages and need to redirect
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      
      // If the path doesn't start with /portflio/ in production, redirect
      if (process.env.NODE_ENV === 'production' && !path.startsWith('/portflio/')) {
        window.location.href = '/portflio' + path
        return
      }
      
      // Handle GitHub Pages routing
      if (path.includes('/?/')) {
        const newPath = path.replace('/?/', '/').replace(/~and~/g, '&')
        router.replace(newPath)
        return
      }
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a 
          href="/portflio" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
