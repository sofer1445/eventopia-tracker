import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { StatsCard } from "@/components/StatsCard"
import { FileUpload } from "@/components/FileUpload"
import { Card } from "@/components/ui/card"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Event Tracking Dashboard</h1>
              <p className="text-muted-foreground">
                Monitor events, analyze data, and generate reports
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatsCard 
                title="Total Events" 
                value="156" 
                trend={{ value: 12, isPositive: true }}
              />
              <StatsCard 
                title="Monthly Participants" 
                value="2,847" 
                trend={{ value: 8, isPositive: true }}
              />
              <StatsCard 
                title="Avg Cost Per Event" 
                value="$1,234" 
                trend={{ value: 3, isPositive: false }}
              />
              <StatsCard 
                title="Pending Approvals" 
                value="7"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Import Data</h2>
                <FileUpload />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
                <Card className="p-4">
                  <p className="text-muted-foreground">Activity feed coming soon...</p>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index