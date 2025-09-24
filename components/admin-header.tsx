"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { AdminSidebar } from "./admin-sidebar"
import { AuthService } from "@/lib/auth/auth-service"


interface AdminHeaderProps {
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export function AdminHeader({ activeSection, onSectionChange }: AdminHeaderProps) {
  return (
    <header className="bg-sidebar backdrop-blur-md  border-b border-border px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {activeSection && onSectionChange && (
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                {/* <SheetContent side="left" className="p-0 w-full sm:w-80 max-w-[100vw]">
                  <AdminSidebar activeSection={activeSection} onSectionChange={onSectionChange} />
                </SheetContent> */}
                <SheetContent side="left" className="p-0 w-full sm:w-80 max-w-[100vw]">
                  {/* Custom Close Button (only one!) */}
                  <div className="flex justify-end p-2">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Sidebar */}
                  <AdminSidebar activeSection={activeSection} onSectionChange={onSectionChange} />
                </SheetContent>



              </Sheet>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-sidebar-foreground">Dashboard</h1>
            <p className="text-sidebar-foreground">Welcome back, Admin</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => AuthService.logout()}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
