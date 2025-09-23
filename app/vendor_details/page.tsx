"use client"

import { useSearchParams } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { VendorDetails } from "@/components/vendor-details"

export default function VendorDetailsPage() {
  const searchParams = useSearchParams()
  const userId = searchParams.get("pageId") || ""

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar activeSection="vendor_details" onSectionChange={() => {}} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
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

