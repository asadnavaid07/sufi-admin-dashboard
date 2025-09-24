"use client"

import { useSearchParams } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { VendorDetails } from "@/components/vendor-details"
import { useRouter } from "next/navigation"

export default function VendorDetailsPage() {
  const searchParams = useSearchParams()
  const userId = searchParams.get("pageId") || ""
  const router = useRouter()

  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block h-full">
        <AdminSidebar
          activeSection="vendor_details"
          onSectionChange={(section) => {
            if (section === "users") {
              router.push("/?section=users")
              return
            }
          }}
        />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          activeSection="users"
          onSectionChange={(section) => {
            if (section === "users") {
              router.push("/?section=users")
            }
          }}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {userId ? (
            <VendorDetails userId={userId} />
          ) : (
            <p>No vendor selected</p>
          )}
        </main>
      </div>
    </div>
  )
}

