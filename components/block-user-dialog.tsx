"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Shield, ShieldOff } from "lucide-react"
import type { User } from "@/lib/dummy-data"

interface BlockUserDialogProps {
  user: User | null
  isOpen: boolean
  onClose: () => void
  onConfirm: (userId: string, reason: string) => void
}

export function BlockUserDialog({ user, isOpen, onClose, onConfirm }: BlockUserDialogProps) {
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  if (!user) return null

  const isBlocking = user.status !== "blocked"

  const handleConfirm = async () => {
    if (isBlocking && !reason.trim()) {
      return
    }

    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      onConfirm(user.id, reason)
      setReason("")
      onClose()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isBlocking ? (
              <>
                <ShieldOff className="h-5 w-5 text-destructive" />
                Block User
              </>
            ) : (
              <>
                <Shield className="h-5 w-5 text-green-600" />
                Unblock User
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {isBlocking
              ? `Are you sure you want to block ${user.name}? This will prevent them from accessing the system.`
              : `Are you sure you want to unblock ${user.name}? This will restore their access to the system.`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {isBlocking
                ? "Blocking a user will immediately revoke their access and log them out of all sessions."
                : "Unblocking a user will restore their previous access level and permissions."}
            </AlertDescription>
          </Alert>

          {isBlocking && (
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for blocking (required)</Label>
              <Textarea
                id="reason"
                placeholder="Enter the reason for blocking this user..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
            </div>
          )}

          <div className="bg-muted p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground">Role: {user.role}</p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            variant={isBlocking ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={isLoading || (isBlocking && !reason.trim())}
          >
            {isLoading ? "Processing..." : isBlocking ? "Block User" : "Unblock User"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
