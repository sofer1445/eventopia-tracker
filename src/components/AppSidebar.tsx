import { FileUp, BarChart2, Clock, Settings, FolderOpen } from "lucide-react"
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
  { title: "Upload Files", icon: FileUp, href: "/" },
  { title: "My Reports", icon: FolderOpen, href: "/reports" },
  { title: "Recent Analysis", icon: Clock, href: "/recent" },
  { title: "Settings", icon: Settings, href: "/settings" },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="flex items-center gap-2 px-4 py-4">
          <BarChart2 className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">AI Reports</span>
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