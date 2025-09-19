"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, MapPin, Calendar, Clock, Shield, Activity, Settings, Globe, Bell, Lock } from "lucide-react"
import type { User as UserType } from "@/lib/dummy-data"

interface UserDetailsDialogProps {
  user: UserType | null
  isOpen: boolean
  onClose: () => void
  onEdit?: (user: UserType) => void
  onBlock?: (user: UserType) => void
}

export function UserDetailsDialog({ user, isOpen, onClose, onEdit, onBlock }: UserDetailsDialogProps) {
  if (!user) return null

  const getStatusBadge = (status: UserType["status"]) => {
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

  const getAccountTypeBadge = (type: UserType["accountType"]) => {
    switch (type) {
      case "free":
        return <Badge variant="outline">Free</Badge>
      case "premium":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Premium</Badge>
      case "enterprise":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Enterprise</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            User Details
          </DialogTitle>
          <DialogDescription>Complete information about the selected user</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* User Profile Header */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <div className="flex gap-2">
                      {getStatusBadge(user.status)}
                      {getAccountTypeBadge(user.accountType)}
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Shield className="h-4 w-4 mr-2" />
                    {user.role}
                  </div>
                  {user.bio && <p className="text-sm text-muted-foreground mt-2">{user.bio}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {user.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
              )}
              {user.address && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{user.address}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Account Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Joined</span>
                </div>
                <span className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Last Active</span>
                </div>
                <span className="font-medium">{new Date(user.lastActive).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Login Count</span>
                </div>
                <span className="font-medium">{user.loginCount}</span>
              </div>
              {user.lastLoginIP && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span>Last IP</span>
                  </div>
                  <span className="font-medium font-mono text-sm">{user.lastLoginIP}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* User Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Notifications</span>
                </div>
                <Badge variant={user.preferences.notifications ? "default" : "secondary"}>
                  {user.preferences.notifications ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Newsletter</span>
                </div>
                <Badge variant={user.preferences.newsletter ? "default" : "secondary"}>
                  {user.preferences.newsletter ? "Subscribed" : "Unsubscribed"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Two-Factor Auth</span>
                </div>
                <Badge variant={user.preferences.twoFactor ? "default" : "secondary"}>
                  {user.preferences.twoFactor ? "Enabled" : "Disabled"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            {onEdit && (
              <Button variant="outline" onClick={() => onEdit(user)}>
                <Settings className="h-4 w-4 mr-2" />
                Edit User
              </Button>
            )}
            {onBlock && user.role !== "admin" && (
              <Button variant={user.status === "blocked" ? "default" : "destructive"} onClick={() => onBlock(user)}>
                <Shield className="h-4 w-4 mr-2" />
                {user.status === "blocked" ? "Unblock User" : "Block User"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
