
"use client"

import { AdminDashboard } from "@/components/admin-dashboard"
import { LoginForm } from "@/components/auth/login-form"
import { useAuth } from "@/components/auth/auth-provider"

export default function AuthGate() {
  const { isAuthenticated, isLoading, user } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  console.log("Auth state in AuthGate:", { isAuthenticated, user })

  if (isAuthenticated ) {
    return <AdminDashboard />
  }

  return <LoginForm />
}
// && user?.role === "admin"