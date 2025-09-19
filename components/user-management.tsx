// // "use client"

// // import type React from "react"

// // import { useState } from "react"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Badge } from "@/components/ui/badge"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"
// // import { Search, MoreHorizontal, UserPlus, Filter, Shield, ShieldOff, Eye } from "lucide-react"
// // import { dummyUsers, type User } from "@/lib/dummy-data"
// // import { BlockUserDialog } from "./block-user-dialog"
// // import { UserDetailsDialog } from "./user-details-dialog"
// // import { toast } from "@/hooks/use-toast"

// // export function UserManagement() {
// //   const [users, setUsers] = useState<User[]>(dummyUsers)
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [statusFilter, setStatusFilter] = useState<string>("all")
// //   const [selectedUser, setSelectedUser] = useState<User | null>(null)
// //   const [isBlockDialogOpen, setIsBlockDialogOpen] = useState(false)
// //   const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)

// //   const filteredUsers = users.filter((user) => {
// //     const matchesSearch =
// //       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       user.email.toLowerCase().includes(searchTerm.toLowerCase())
// //     const matchesStatus = statusFilter === "all" || user.status === statusFilter
// //     return matchesSearch && matchesStatus
// //   })

// //   const getStatusBadge = (status: User["status"]) => {
// //     switch (status) {
// //       case "active":
// //         return (
// //           <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
// //             Active
// //           </Badge>
// //         )
// //       case "blocked":
// //         return <Badge variant="destructive">Blocked</Badge>
// //       case "pending":
// //         return (
// //           <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
// //             Pending
// //           </Badge>
// //         )
// //       default:
// //         return <Badge variant="outline">{status}</Badge>
// //     }
// //   }

// //   const handleViewDetails = (user: User) => {
// //     setSelectedUser(user)
// //     setIsDetailsDialogOpen(true)
// //   }

// //   const handleBlockUser = (user: User) => {
// //     setSelectedUser(user)
// //     setIsBlockDialogOpen(true)
// //   }

// //   const handleBlockConfirm = (userId: string, reason: string) => {
// //     setUsers(
// //       users.map((user) => {
// //         if (user.id === userId) {
// //           const newStatus = user.status === "blocked" ? "active" : ("blocked" as User["status"])

// //           // Show success toast
// //           toast({
// //             title: newStatus === "blocked" ? "User Blocked" : "User Unblocked",
// //             description:
// //               newStatus === "blocked"
// //                 ? `${user.name} has been blocked successfully.`
// //                 : `${user.name} has been unblocked and can now access the system.`,
// //           })

// //           return { ...user, status: newStatus }
// //         }
// //         return user
// //       }),
// //     )
// //   }

// //   const handleDeleteUser = (userId: string) => {
// //     const user = users.find((u) => u.id === userId)
// //     setUsers(users.filter((user) => user.id !== userId))

// //     if (user) {
// //       toast({
// //         title: "User Deleted",
// //         description: `${user.name} has been permanently deleted from the system.`,
// //         variant: "destructive",
// //       })
// //     }
// //   }

// //   const quickBlockUser = (user: User, event: React.MouseEvent) => {
// //     event.stopPropagation()
// //     handleBlockUser(user)
// //   }

// //   return (
// //     <div className="space-y-6">
// //       <div className="flex items-center justify-between">
// //         <div>
// //           <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
// //           <p className="text-muted-foreground">Manage and monitor all user accounts</p>
// //         </div>
        
// //       </div>

// //       <div className="grid gap-4 md:grid-cols-4">
// //         <Card>
// //           <CardContent className="p-4">
// //             <div className="flex items-center space-x-2">
// //               <Shield className="h-4 w-4 text-green-600" />
// //               <div>
// //                 <p className="text-sm font-medium">Active Users</p>
// //                 <p className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</p>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //         <Card>
// //           <CardContent className="p-4">
// //             <div className="flex items-center space-x-2">
// //               <ShieldOff className="h-4 w-4 text-destructive" />
// //               <div>
// //                 <p className="text-sm font-medium">Blocked Users</p>
// //                 <p className="text-2xl font-bold">{users.filter((u) => u.status === "blocked").length}</p>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
        
// //         <Card>
// //           <CardContent className="p-4">
// //             <div className="flex items-center space-x-2">
// //               <div className="w-4 h-4 bg-primary rounded-full" />
// //               <div>
// //                 <p className="text-sm font-medium">Total Users</p>
// //                 <p className="text-2xl font-bold">{users.length}</p>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Users</CardTitle>
// //           <CardDescription>A list of all users in your system</CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="flex items-center space-x-4 mb-6">
// //             <div className="relative flex-1 max-w-sm">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
// //               <Input
// //                 placeholder="Search users..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="pl-10"
// //               />
// //             </div>
// //             <DropdownMenu>
// //               <DropdownMenuTrigger asChild>
// //                 <Button variant="outline">
// //                   <Filter className="mr-2 h-4 w-4" />
// //                   Filter: {statusFilter === "all" ? "All" : statusFilter}
// //                 </Button>
// //               </DropdownMenuTrigger>
// //               <DropdownMenuContent>
// //                 <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
// //                 <DropdownMenuSeparator />
// //                 <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Users</DropdownMenuItem>
// //                 <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
// //                 <DropdownMenuItem onClick={() => setStatusFilter("blocked")}>Blocked</DropdownMenuItem>
// //                 <DropdownMenuItem onClick={() => setStatusFilter("pending")}>Pending</DropdownMenuItem>
// //               </DropdownMenuContent>
// //             </DropdownMenu>
// //           </div>

// //           <div className="rounded-md border">
// //             <Table>
// //               <TableHeader>
// //                 <TableRow>
// //                   <TableHead>User</TableHead>
// //                   <TableHead>Status</TableHead>
// //                   <TableHead>Role</TableHead>
// //                   <TableHead>Join Date</TableHead>
// //                   <TableHead>Last Active</TableHead>
// //                   <TableHead className="text-right">Actions</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {filteredUsers.map((user) => (
// //                   <TableRow
// //                     key={user.id}
// //                     className="cursor-pointer hover:bg-muted/50"
// //                     onClick={() => handleViewDetails(user)}
// //                   >
// //                     <TableCell className="font-medium">
// //                       <div className="flex items-center space-x-3">
// //                         <Avatar className="h-8 w-8">
// //                           <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
// //                           <AvatarFallback>
// //                             {user.name
// //                               .split(" ")
// //                               .map((n) => n[0])
// //                               .join("")}
// //                           </AvatarFallback>
// //                         </Avatar>
// //                         <div>
// //                           <div className="font-medium">{user.name}</div>
// //                           <div className="text-sm text-muted-foreground">{user.email}</div>
// //                         </div>
// //                       </div>
// //                     </TableCell>
// //                     <TableCell>
// //                       <div className="flex items-center space-x-2">
// //                         {getStatusBadge(user.status)}
// //                         {user.role !== "admin" && (
// //                           <Button
// //                             variant="ghost"
// //                             size="sm"
// //                             onClick={(e) => quickBlockUser(user, e)}
// //                             className={`h-6 w-6 p-0 ${
// //                               user.status === "blocked"
// //                                 ? "text-green-600 hover:text-green-700"
// //                                 : "text-yellow-600 hover:text-yellow-700"
// //                             }`}
// //                           >
// //                             {user.status === "blocked" ? (
// //                               <Shield className="h-3 w-3" />
// //                             ) : (
// //                               <ShieldOff className="h-3 w-3" />
// //                             )}
// //                           </Button>
// //                         )}
// //                       </div>
// //                     </TableCell>
// //                     <TableCell className="capitalize">{user.role}</TableCell>
// //                     <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
// //                     <TableCell>{new Date(user.lastActive).toLocaleDateString()}</TableCell>
// //                     <TableCell className="text-right">
// //                       <DropdownMenu>
// //                         <DropdownMenuTrigger asChild>
// //                           <Button variant="ghost" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
// //                             <span className="sr-only">Open menu</span>
// //                             <MoreHorizontal className="h-4 w-4" />
// //                           </Button>
// //                         </DropdownMenuTrigger>
// //                         <DropdownMenuContent align="end">
// //                           <DropdownMenuLabel>Actions</DropdownMenuLabel>
// //                           <DropdownMenuItem
// //                             onClick={(e) => {
// //                               e.stopPropagation()
// //                               handleViewDetails(user)
// //                             }}
// //                           >
// //                             <Eye className="mr-2 h-4 w-4" />
// //                             View Details
// //                           </DropdownMenuItem>
// //                           <DropdownMenuItem onClick={(e) => e.stopPropagation()}>Edit User</DropdownMenuItem>
// //                           <DropdownMenuSeparator />
// //                           {user.role !== "admin" && (
// //                             <DropdownMenuItem
// //                               onClick={(e) => {
// //                                 e.stopPropagation()
// //                                 handleBlockUser(user)
// //                               }}
// //                               className={user.status === "blocked" ? "text-green-600" : "text-yellow-600"}
// //                             >
// //                               {user.status === "blocked" ? "Unblock User" : "Block User"}
// //                             </DropdownMenuItem>
// //                           )}
// //                           <DropdownMenuItem
// //                             onClick={(e) => {
// //                               e.stopPropagation()
// //                               handleDeleteUser(user.id)
// //                             }}
// //                             className="text-red-600"
// //                           >
// //                             Delete User
// //                           </DropdownMenuItem>
// //                         </DropdownMenuContent>
// //                       </DropdownMenu>
// //                     </TableCell>
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </div>

// //           {filteredUsers.length === 0 && (
// //             <div className="text-center py-8">
// //               <p className="text-muted-foreground">No users found matching your criteria.</p>
// //             </div>
// //           )}
// //         </CardContent>
// //       </Card>

// //       <BlockUserDialog
// //         user={selectedUser}
// //         isOpen={isBlockDialogOpen}
// //         onClose={() => {
// //           setIsBlockDialogOpen(false)
// //           setSelectedUser(null)
// //         }}
// //         onConfirm={handleBlockConfirm}
// //       />

// //       <UserDetailsDialog
// //         user={selectedUser}
// //         isOpen={isDetailsDialogOpen}
// //         onClose={() => {
// //           setIsDetailsDialogOpen(false)
// //           setSelectedUser(null)
// //         }}
// //         onEdit={(user) => {
// //           // Handle edit functionality
// //           console.log("Edit user:", user)
// //         }}
// //         onBlock={handleBlockUser}
// //       />
// //     </div>
// //   )
// // }


// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Search, MoreHorizontal, UserPlus, Filter, Shield, ShieldOff, Eye, Users, Crown, User } from "lucide-react"
// import { dummyUsers, type User } from "@/lib/dummy-data"
// import { BlockUserDialog } from "./block-user-dialog"
// import { UserDetailsDialog } from "./user-details-dialog"
// import { toast } from "@/hooks/use-toast"

// export function UserManagement() {
//   const [users, setUsers] = useState<User[]>(dummyUsers)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [statusFilter, setStatusFilter] = useState<string>("all")
//   const [roleFilter, setRoleFilter] = useState<string>("all")
//   const [selectedUser, setSelectedUser] = useState<User | null>(null)
//   const [isBlockDialogOpen, setIsBlockDialogOpen] = useState(false)
//   const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)

//   const filteredUsers = users.filter((user) => {
//     const matchesSearch =
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesStatus = statusFilter === "all" || user.status === statusFilter
//     const matchesRole = roleFilter === "all" || user.role === roleFilter
//     return matchesSearch && matchesStatus && matchesRole
//   })

//   const getStatusBadge = (status: User["status"]) => {
//     switch (status) {
//       case "active":
//         return (
//           <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
//             Active
//           </Badge>
//         )
//       case "blocked":
//         return <Badge variant="destructive">Blocked</Badge>
//       case "pending":
//         return (
//           <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
//             Pending
//           </Badge>
//         )
//       default:
//         return <Badge variant="outline">{status}</Badge>
//     }
//   }

//   const handleViewDetails = (user: User) => {
//     setSelectedUser(user)
//     setIsDetailsDialogOpen(true)
//   }

//   const handleBlockUser = (user: User) => {
//     setSelectedUser(user)
//     setIsBlockDialogOpen(true)
//   }

//   const handleBlockConfirm = (userId: string, reason: string) => {
//     setUsers(
//       users.map((user) => {
//         if (user.id === userId) {
//           const newStatus = user.status === "blocked" ? "active" : ("blocked" as User["status"])

//           // Show success toast
//           toast({
//             title: newStatus === "blocked" ? "User Blocked" : "User Unblocked",
//             description:
//               newStatus === "blocked"
//                 ? `${user.name} has been blocked successfully.`
//                 : `${user.name} has been unblocked and can now access the system.`,
//           })

//           return { ...user, status: newStatus }
//         }
//         return user
//       }),
//     )
//   }

//   const handleDeleteUser = (userId: string) => {
//     const user = users.find((u) => u.id === userId)
//     setUsers(users.filter((user) => user.id !== userId))

//     if (user) {
//       toast({
//         title: "User Deleted",
//         description: `${user.name} has been permanently deleted from the system.`,
//         variant: "destructive",
//       })
//     }
//   }

//   const quickBlockUser = (user: User, event: React.MouseEvent) => {
//     event.stopPropagation()
//     handleBlockUser(user)
//   }

//   return (
//     <div className="space-y-6 p-4 md:p-6">
//       <div className="space-y-2">
//         <h2 className="text-2xl md:text-3xl font-bold tracking-tight">User Management</h2>
//         <p className="text-muted-foreground text-sm md:text-base">Manage and monitor all user accounts</p>
//       </div>

//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         <Card className="transition-all hover:shadow-md">
//           <CardContent className="p-4 md:p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 rounded-lg bg-green-100">
//                 <Shield className="h-4 w-4 text-green-600" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Active Users</p>
//                 <p className="text-2xl md:text-3xl font-bold">{users.filter((u) => u.status === "active").length}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
        
//         <Card className="transition-all hover:shadow-md">
//           <CardContent className="p-4 md:p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 rounded-lg bg-red-100">
//                 <ShieldOff className="h-4 w-4 text-destructive" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Blocked Users</p>
//                 <p className="text-2xl md:text-3xl font-bold">{users.filter((u) => u.status === "blocked").length}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
        
//         <Card className="transition-all hover:shadow-md">
//           <CardContent className="p-4 md:p-6">
//             <div className="flex items-center space-x-3">
//               <div className="p-2 rounded-lg bg-blue-100">
//                 <Users className="h-4 w-4 text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-muted-foreground">Total Users</p>
//                 <p className="text-2xl md:text-3xl font-bold">{users.length}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="shadow-sm">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-lg">Users</CardTitle>
//           <CardDescription>A list of all users in your system</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="relative flex-1 max-w-sm">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
            
//             <div className="flex gap-2">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline" size="sm">
//                     <Shield className="mr-2 h-4 w-4" />
//                     Status: {statusFilter === "all" ? "All" : statusFilter}
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Status</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setStatusFilter("blocked")}>Blocked</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setStatusFilter("pending")}>Pending</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>

//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="outline" size="sm">
//                     <Crown className="mr-2 h-4 w-4" />
//                     Role: {roleFilter === "all" ? "All" : roleFilter}
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem onClick={() => setRoleFilter("all")}>All Roles</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setRoleFilter("admin")}>Admin</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setRoleFilter("user")}>User</DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => setRoleFilter("moderator")}>Moderator</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>

//           <div className="rounded-md border overflow-hidden">
//             <div className="overflow-x-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="min-w-[200px]">User</TableHead>
//                     <TableHead className="min-w-[120px]">Status</TableHead>
//                     <TableHead className="min-w-[100px]">Role</TableHead>
//                     <TableHead className="min-w-[120px] hidden md:table-cell">Join Date</TableHead>
//                     <TableHead className="min-w-[120px] hidden lg:table-cell">Last Active</TableHead>
//                     <TableHead className="text-right min-w-[80px]">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredUsers.map((user) => (
//                     <TableRow
//                       key={user.id}
//                       className="cursor-pointer hover:bg-muted/50 transition-colors"
//                       onClick={() => handleViewDetails(user)}
//                     >
//                       <TableCell className="font-medium">
//                         <div className="flex items-center space-x-3">
//                           <Avatar className="h-8 w-8 flex-shrink-0">
//                             <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
//                             <AvatarFallback>
//                               {user.name
//                                 .split(" ")
//                                 .map((n) => n[0])
//                                 .join("")}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div className="min-w-0 flex-1">
//                             <div className="font-medium truncate">{user.name}</div>
//                             <div className="text-sm text-muted-foreground truncate">{user.email}</div>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex items-center space-x-2">
//                           {getStatusBadge(user.status)}
//                           {user.role !== "admin" && (
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={(e) => quickBlockUser(user, e)}
//                               className={`h-6 w-6 p-0 flex-shrink-0 ${
//                                 user.status === "blocked"
//                                   ? "text-green-600 hover:text-green-700"
//                                   : "text-yellow-600 hover:text-yellow-700"
//                               }`}
//                             >
//                               {user.status === "blocked" ? (
//                                 <Shield className="h-3 w-3" />
//                               ) : (
//                                 <ShieldOff className="h-3 w-3" />
//                               )}
//                             </Button>
//                           )}
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <Badge variant="outline" className="capitalize">
//                           {user.role}
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="hidden md:table-cell">
//                         {new Date(user.joinDate).toLocaleDateString()}
//                       </TableCell>
//                       <TableCell className="hidden lg:table-cell">
//                         {new Date(user.lastActive).toLocaleDateString()}
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
//                               <span className="sr-only">Open menu</span>
//                               <MoreHorizontal className="h-4 w-4" />
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                             <DropdownMenuItem
//                               onClick={(e) => {
//                                 e.stopPropagation()
//                                 handleViewDetails(user)
//                               }}
//                             >
//                               <Eye className="mr-2 h-4 w-4" />
//                               View Details
//                             </DropdownMenuItem>
//                             <DropdownMenuItem onClick={(e) => e.stopPropagation()}>Edit User</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             {user.role !== "admin" && (
//                               <DropdownMenuItem
//                                 onClick={(e) => {
//                                   e.stopPropagation()
//                                   handleBlockUser(user)
//                                 }}
//                                 className={user.status === "blocked" ? "text-green-600" : "text-yellow-600"}
//                               >
//                                 {user.status === "blocked" ? "Unblock User" : "Block User"}
//                               </DropdownMenuItem>
//                             )}
//                             <DropdownMenuItem
//                               onClick={(e) => {
//                                 e.stopPropagation()
//                                 handleDeleteUser(user.id)
//                               }}
//                               className="text-red-600"
//                             >
//                               Delete User
//                             </DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>

//           {filteredUsers.length === 0 && (
//             <div className="text-center py-12">
//               <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-muted-foreground" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">No users found</h3>
//               <p className="text-muted-foreground">No users match your current search and filter criteria.</p>
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       <BlockUserDialog
//         user={selectedUser}
//         isOpen={isBlockDialogOpen}
//         onClose={() => {
//           setIsBlockDialogOpen(false)
//           setSelectedUser(null)
//         }}
//         onConfirm={handleBlockConfirm}
//       />

//       <UserDetailsDialog
//         user={selectedUser}
//         isOpen={isDetailsDialogOpen}
//         onClose={() => {
//           setIsDetailsDialogOpen(false)
//           setSelectedUser(null)
//         }}
//         onEdit={(user) => {
//           // Handle edit functionality
//           console.log("Edit user:", user)
//         }}
//         onBlock={handleBlockUser}
//       />
//     </div>
//   )
// }


"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// Fix: Rename the User import to avoid conflict with the User type
import { Search, MoreHorizontal, UserPlus, Filter, Shield, ShieldOff, Eye, Users, Crown, User as UserIcon } from "lucide-react"
import { dummyUsers, type User } from "@/lib/dummy-data"
import { BlockUserDialog } from "./block-user-dialog"
import { UserDetailsDialog } from "./user-details-dialog"
import { toast } from "@/hooks/use-toast"

export function UserManagement() {
  const [users, setUsers] = useState<User[]>(dummyUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isBlockDialogOpen, setIsBlockDialogOpen] = useState(false)
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    return matchesSearch && matchesStatus && matchesRole
  })

  const getStatusBadge = (status: User["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        )
      case "blocked":
        return <Badge variant="destructive">Blocked</Badge>
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setIsDetailsDialogOpen(true)
  }

  const handleBlockUser = (user: User) => {
    setSelectedUser(user)
    setIsBlockDialogOpen(true)
  }

  const handleBlockConfirm = (userId: string, reason: string) => {
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          const newStatus = user.status === "blocked" ? "active" : ("blocked" as User["status"])

          // Show success toast
          toast({
            title: newStatus === "blocked" ? "User Blocked" : "User Unblocked",
            description:
              newStatus === "blocked"
                ? `${user.name} has been blocked successfully.`
                : `${user.name} has been unblocked and can now access the system.`,
          })

          return { ...user, status: newStatus }
        }
        return user
      }),
    )
  }

  const handleDeleteUser = (userId: string) => {
    const user = users.find((u) => u.id === userId)
    setUsers(users.filter((user) => user.id !== userId))

    if (user) {
      toast({
        title: "User Deleted",
        description: `${user.name} has been permanently deleted from the system.`,
        variant: "destructive",
      })
    }
  }

  const quickBlockUser = (user: User, event: React.MouseEvent) => {
    event.stopPropagation()
    handleBlockUser(user)
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">User Management</h2>
        <p className="text-muted-foreground text-sm md:text-base">Manage and monitor all user accounts</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Shield className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-2xl md:text-3xl font-bold">{users.filter((u) => u.status === "active").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-red-100">
                <ShieldOff className="h-4 w-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Blocked Users</p>
                <p className="text-2xl md:text-3xl font-bold">{users.filter((u) => u.status === "blocked").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="transition-all hover:shadow-md">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl md:text-3xl font-bold">{users.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg">Users</CardTitle>
          <CardDescription>A list of all users in your system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Shield className="mr-2 h-4 w-4" />
                    Status: {statusFilter === "all" ? "All" : statusFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>All Status</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("active")}>Active</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("blocked")}>Blocked</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("pending")}>Pending</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Crown className="mr-2 h-4 w-4" />
                    Role: {roleFilter === "all" ? "All" : roleFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setRoleFilter("all")}>All Roles</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setRoleFilter("admin")}>Admin</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setRoleFilter("user")}>User</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setRoleFilter("moderator")}>Moderator</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[200px]">User</TableHead>
                    <TableHead className="min-w-[120px]">Status</TableHead>
                    <TableHead className="min-w-[100px]">Role</TableHead>
                    <TableHead className="min-w-[120px] hidden md:table-cell">Join Date</TableHead>
                    <TableHead className="min-w-[120px] hidden lg:table-cell">Last Active</TableHead>
                    <TableHead className="text-right min-w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => handleViewDetails(user)}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {/* Fix: Add type annotation for the parameter */}
                              {user.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{user.name}</div>
                            <div className="text-sm text-muted-foreground truncate">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(user.status)}
                          {user.role !== "admin" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => quickBlockUser(user, e)}
                              className={`h-6 w-6 p-0 flex-shrink-0 ${
                                user.status === "blocked"
                                  ? "text-green-600 hover:text-green-700"
                                  : "text-yellow-600 hover:text-yellow-700"
                              }`}
                            >
                              {user.status === "blocked" ? (
                                <Shield className="h-3 w-3" />
                              ) : (
                                <ShieldOff className="h-3 w-3" />
                              )}
                            </Button>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {new Date(user.lastActive).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0" onClick={(e) => e.stopPropagation()}>
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation()
                                handleViewDetails(user)
                              }}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>Edit User</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {user.role !== "admin" && (
                              <DropdownMenuItem
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleBlockUser(user)
                                }}
                                className={user.status === "blocked" ? "text-green-600" : "text-yellow-600"}
                              >
                                {user.status === "blocked" ? "Unblock User" : "Block User"}
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteUser(user.id)
                              }}
                              className="text-red-600"
                            >
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No users found</h3>
              <p className="text-muted-foreground">No users match your current search and filter criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <BlockUserDialog
        user={selectedUser}
        isOpen={isBlockDialogOpen}
        onClose={() => {
          setIsBlockDialogOpen(false)
          setSelectedUser(null)
        }}
        onConfirm={handleBlockConfirm}
      />

      <UserDetailsDialog
        user={selectedUser}
        isOpen={isDetailsDialogOpen}
        onClose={() => {
          setIsDetailsDialogOpen(false)
          setSelectedUser(null)
        }}
        onEdit={(user) => {
          // Handle edit functionality
          console.log("Edit user:", user)
        }}
        onBlock={handleBlockUser}
      />
    </div>
  )
}