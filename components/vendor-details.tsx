// "use client";

// import { useEffect, useState } from "react";

// interface VendorDetailsProps {
//   userId: string;
// }

// interface Vendor {
//   id: string;
//   fullName: string;
//   email: string;
//   role: string;
//   phone: string;
//   createdAt: string;
//   isVerified?: boolean;
// }

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// export function VendorDetails({ userId }: VendorDetailsProps) {
//   const [vendor, setVendor] = useState<Vendor | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState(false);

//   useEffect(() => {
//     fetchVendor();
//   }, [userId]);

//   async function fetchVendor() {
//     try {
//       const res = await fetch(`${BASE_URL}/vendor/${userId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       setVendor(data.data);
//     } catch (err) {
//       console.error("Error fetching vendor:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   // 🔹 Delete Vendor
//   async function handleDelete() {
//     if (!vendor) return;
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this vendor?"
//     );
//     if (!confirmDelete) return;

//     setActionLoading(true);
//     try {
//       const res = await fetch(`${BASE_URL}/user/delete-vendor/${vendor.id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         alert("Vendor deleted successfully");
//         setVendor(null); // clear vendor from UI
//       } else {
//         alert("Failed to delete vendor");
//       }
//     } catch (err) {
//       console.error("Error deleting vendor:", err);
//     } finally {
//       setActionLoading(false);
//     }
//   }

//   // 🔹 Approve / Reject Vendor
//   // 🔹 Approve / Reject Vendor
//   async function toggleVerify() {
//     if (!vendor) return;

//     const newStatus = !vendor.isVerified;
//     setActionLoading(true);
//     try {
//       const res = await fetch(`${BASE_URL}/user/verify-vendor/${vendor.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         if (newStatus) {
//           alert("Vendor approved successfully");
//         } else {
//           alert("Vendor rejected successfully");
//         }
//         setVendor({ ...vendor, isVerified: newStatus });
//       } else {
//         alert(data.message || "Failed to update vendor status");
//       }
//     } catch (err) {
//       console.error("Error verifying vendor:", err);
//     } finally {
//       setActionLoading(false);
//     }
//   }

//   if (loading) return <p>Loading vendor details...</p>;
//   if (!vendor) return <p>No vendor found.</p>;

//   return (
//     <div className="max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 space-y-4">
//       <h2 className="text-xl font-semibold mb-4">Vendor Details</h2>
//       <div className="space-y-2">
//         <p>
//           <span className="font-medium">ID:</span> {vendor.id}
//         </p>
//         <p>
//           <span className="font-medium">Name:</span> {vendor.fullName}
//         </p>
//         <p>
//           <span className="font-medium">Email:</span> {vendor.email}
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span> {vendor.phone}
//         </p>
//         <p>
//           <span className="font-medium">Role:</span> {vendor.role}
//         </p>
//         <p>
//           <span className="font-medium">Joined:</span>{" "}
//           {new Date(vendor.createdAt).toLocaleDateString()}
//         </p>
//         <p>
//           <span className="font-medium">Verified:</span>{" "}
//           {vendor.isVerified ? "✅ Yes" : "❌ No"}
//         </p>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={toggleVerify}
//           disabled={actionLoading}
//           className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
//         >
//           {vendor.isVerified ? "Reject" : "Approve"}
//         </button>

//         <button
//           onClick={handleDelete}
//           disabled={actionLoading}
//           className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }



"use client"

import { useEffect, useState } from "react"

interface VendorDetailsProps {
  userId: string
}

interface Vendor {
  id: string
  fullName: string
  email: string
  role: string
  phone: string
  createdAt: string
  isVerified?: boolean
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export function VendorDetails({ userId }: VendorDetailsProps) {
  const [vendor, setVendor] = useState<Vendor | null>(null)
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    fetchVendor()
  }, [userId])

  async function fetchVendor() {
    try {
      const res = await fetch(`${BASE_URL}/vendor/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      setVendor(data.data)
    } catch (err) {
      console.error("Error fetching vendor:", err)
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Delete Vendor
  async function handleDelete() {
    if (!vendor) return
    const confirmDelete = window.confirm("Are you sure you want to delete this vendor?")
    if (!confirmDelete) return

    setActionLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/user/delete-vendor/${userId}`, {
        method: "DELETE",
      })
      if (res.ok) {
        alert("Vendor deleted successfully")
        setVendor(null) // clear vendor from UI
      } else {
        alert("Failed to delete vendor")
      }
    } catch (err) {
      console.error("Error deleting vendor:", err)
    } finally {
      setActionLoading(false)
    }
  }

  // 🔹 Approve / Reject Vendor
  // 🔹 Approve / Reject Vendor
  async function toggleVerify() {
    if (!vendor) return

    const newStatus = !vendor.isVerified
    setActionLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/user/verify-vendor/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      const data = await res.json()
      if (res.ok) {
        if (newStatus) {
          alert("Vendor approved successfully")
        } else {
          alert("Vendor rejected successfully")
        }
        setVendor({ ...vendor, isVerified: newStatus })
      } else {
        alert(data.message || "Failed to update vendor status")
      }
    } catch (err) {
      console.error("Error verifying vendor:", err)
    } finally {
      setActionLoading(false)
    }
  }

  if (loading)
    return (
      <div className="w-full max-w-2xl rounded-2xl border border-[#684570]/20 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 w-40 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
            <div className="h-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
            <div className="h-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
            <div className="h-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
          </div>
          <div className="h-10 w-48 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    )
  if (!vendor)
    return (
      <div className="w-full max-w-2xl rounded-2xl border border-[#684570]/20 bg-white dark:bg-gray-950 shadow-sm p-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">No vendor found.</p>
      </div>
    )

  return (
    <div className="w-full max-w-2xl md:max-w-3xl rounded-2xl border border-[#684570]/20 bg-white dark:bg-gray-950 shadow-sm p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-base md:text-lg font-semibold tracking-tight text-[#39243d] dark:text-white">
            Vendor Details
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">{vendor.fullName}</p>
        </div>

        {/* Verified badge */}
        <span
          className={[
            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
            vendor.isVerified
              ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-200"
              : "bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-900/30 dark:text-rose-200",
          ].join(" ")}
          aria-live="polite"
        >
          {vendor.isVerified ? "Verified" : "Not Verified"}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">ID</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100 break-all">{vendor.id}</p>
        </div>
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Email</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">{vendor.email}</p>
        </div>
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Phone</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">{vendor.phone}</p>
        </div>
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Role</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">{vendor.role}</p>
        </div>
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Joined</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">
            {new Date(vendor.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="rounded-xl border border-[#684570]/10 bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Name</p>
          <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">{vendor.fullName}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={toggleVerify}
          disabled={actionLoading}
          className="inline-flex items-center justify-center rounded-lg bg-[#684570] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5d3d66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#684570] disabled:opacity-50 disabled:cursor-not-allowed"
          aria-busy={actionLoading}
        >
          {vendor.isVerified ? "Reject" : "Approve"}
        </button>

        <button
          onClick={handleDelete}
          disabled={actionLoading}
          className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-busy={actionLoading}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
