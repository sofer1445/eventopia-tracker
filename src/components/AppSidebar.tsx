import { FileUp, BarChart2, Clock, Settings, FolderOpen, CalendarDays, Building2, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Dashboard", icon: BarChart2, href: "/" },
  { title: "Events", icon: CalendarDays, href: "/events" },
  { title: "Transactions", icon: Building2, href: "/transactions" },
  { title: "Reports", icon: FolderOpen, href: "/reports" },
  { title: "Team", icon: Users, href: "/team" },
  { title: "Upload Data", icon: FileUp, href: "/upload" },
  { title: "Recent Activity", icon: Clock, href: "/activity" },
  { title: "Settings", icon: Settings, href: "/settings" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-4">
          <BarChart2 className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">Event Tracker</span>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}