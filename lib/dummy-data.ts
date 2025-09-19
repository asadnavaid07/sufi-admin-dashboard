export interface User {
  id: string
  name: string
  email: string
  status: "active" | "blocked" | "pending"
  role: "user" | "admin"
  joinDate: string
  lastActive: string
  avatar?: string
  phone?: string
  address?: string
  bio?: string
  loginCount: number
  lastLoginIP?: string
  accountType: "free" | "premium" | "enterprise"
  preferences: {
    notifications: boolean
    newsletter: boolean
    twoFactor: boolean
  }
}

export const dummyUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    role: "user",
    joinDate: "2024-01-15",
    lastActive: "2024-01-20",
    avatar: "/placeholder.svg?key=4xxyt",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    bio: "Software developer with 5 years of experience in web development.",
    loginCount: 47,
    lastLoginIP: "192.168.1.100",
    accountType: "premium",
    preferences: {
      notifications: true,
      newsletter: true,
      twoFactor: false,
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "active",
    role: "user",
    joinDate: "2024-01-10",
    lastActive: "2024-01-19",
    avatar: "/placeholder.svg?key=tt86q",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, Los Angeles, CA 90210",
    bio: "Marketing professional passionate about digital campaigns.",
    loginCount: 32,
    lastLoginIP: "10.0.0.15",
    accountType: "free",
    preferences: {
      notifications: true,
      newsletter: false,
      twoFactor: true,
    },
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    status: "blocked",
    role: "user",
    joinDate: "2024-01-05",
    lastActive: "2024-01-18",
    avatar: "/placeholder.svg?key=978o0",
    phone: "+1 (555) 456-7890",
    address: "789 Pine St, Chicago, IL 60601",
    bio: "Freelance designer specializing in UI/UX.",
    loginCount: 15,
    lastLoginIP: "203.0.113.42",
    accountType: "free",
    preferences: {
      notifications: false,
      newsletter: false,
      twoFactor: false,
    },
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    status: "active",
    role: "admin",
    joinDate: "2023-12-20",
    lastActive: "2024-01-20",
    avatar: "/placeholder.svg?key=kdufz",
    phone: "+1 (555) 321-0987",
    address: "321 Elm St, Boston, MA 02101",
    bio: "System administrator with expertise in cloud infrastructure.",
    loginCount: 156,
    lastLoginIP: "172.16.0.1",
    accountType: "enterprise",
    preferences: {
      notifications: true,
      newsletter: true,
      twoFactor: true,
    },
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.brown@example.com",
    status: "pending",
    role: "user",
    joinDate: "2024-01-18",
    lastActive: "2024-01-18",
    avatar: "/placeholder.svg?key=7texe",
    phone: "+1 (555) 654-3210",
    address: "654 Maple Dr, Seattle, WA 98101",
    bio: "Recent graduate looking to start a career in tech.",
    loginCount: 3,
    lastLoginIP: "198.51.100.25",
    accountType: "free",
    preferences: {
      notifications: true,
      newsletter: true,
      twoFactor: false,
    },
  },
  {
    id: "6",
    name: "Lisa Garcia",
    email: "lisa.garcia@example.com",
    status: "active",
    role: "user",
    joinDate: "2024-01-12",
    lastActive: "2024-01-19",
    avatar: "/placeholder.svg?key=djf4a",
    phone: "+1 (555) 789-0123",
    address: "987 Cedar Ln, Miami, FL 33101",
    bio: "Content creator and social media manager.",
    loginCount: 28,
    lastLoginIP: "192.0.2.146",
    accountType: "premium",
    preferences: {
      notifications: true,
      newsletter: true,
      twoFactor: true,
    },
  },
  {
    id: "7",
    name: "Tom Anderson",
    email: "tom.anderson@example.com",
    status: "blocked",
    role: "user",
    joinDate: "2024-01-08",
    lastActive: "2024-01-17",
    avatar: "/placeholder.svg?key=3jxc6",
    phone: "+1 (555) 012-3456",
    address: "012 Birch St, Denver, CO 80201",
    bio: "Sales representative with a focus on B2B solutions.",
    loginCount: 8,
    lastLoginIP: "203.0.113.195",
    accountType: "free",
    preferences: {
      notifications: false,
      newsletter: false,
      twoFactor: false,
    },
  },
  {
    id: "8",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "active",
    role: "user",
    joinDate: "2024-01-14",
    lastActive: "2024-01-20",
    avatar: "/placeholder.svg?key=ekj9u",
    phone: "+1 (555) 345-6789",
    address: "345 Spruce Ave, Portland, OR 97201",
    bio: "Data analyst passionate about machine learning and AI.",
    loginCount: 41,
    lastLoginIP: "198.51.100.78",
    accountType: "premium",
    preferences: {
      notifications: true,
      newsletter: false,
      twoFactor: true,
    },
  },
]
