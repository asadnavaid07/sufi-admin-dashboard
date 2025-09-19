"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserX, Activity } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      description: "+12% from last month",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Active Users",
      value: "2,234",
      description: "+8% from last month",
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Blocked Users",
      value: "23",
      description: "+2 this week",
      icon: UserX,
      color: "text-destructive",
    },
  ]

  return (
    <div className="space-y-4 p-2   md:p-4 lg:p-2">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground text-sm md:text-base">Here's what's happening with your users today.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-muted/50`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="w-full">
        <Card className="shadow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="group w-full text-left p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-gradient-to-r hover:from-muted/50 hover:to-transparent transition-all duration-200">
              <p className="font-medium group-hover:text-primary transition-colors">View All Users</p>
              <p className="text-sm text-muted-foreground mt-1">Manage user accounts</p>
            </button>
            <button className="group w-full text-left p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-gradient-to-r hover:from-muted/50 hover:to-transparent transition-all duration-200">
              <p className="font-medium group-hover:text-primary transition-colors">System Reports</p>
              <p className="text-sm text-muted-foreground mt-1">Generate analytics reports</p>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}