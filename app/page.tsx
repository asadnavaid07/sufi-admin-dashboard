"use client"

import { AdminDashboard } from "@/components/admin-dashboard"
import { LoginForm } from "@/components/login-form"
import { useAuth } from "@/components/auth-provider"

export default function HomePage() {
  const { user, isLoading } = useAuth()

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

  return user ? <AdminDashboard /> : <LoginForm />
}
