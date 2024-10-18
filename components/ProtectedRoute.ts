// components/ProtectedRoute.js
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProtectedRoute = ({ children, protectedRoutes }) => {
  const router = useRouter()
  const isDevelopment = process.env.NEXT_PUBLIC_ENV === 'development'

  useEffect(() => {
    if (!isDevelopment && protectedRoutes.includes(router.pathname)) {
      router.push('/web-dev')
    }
  }, [isDevelopment, router, protectedRoutes])

  return isDevelopment || !protectedRoutes.includes(router.pathname)
    ? children
    : null
}

export default ProtectedRoute
