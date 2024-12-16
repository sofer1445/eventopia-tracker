import { AppSidebar } from "@/components/AppSidebar"
import { StatsCard } from "@/components/StatsCard"
import { FileUpload } from "@/components/FileUpload"
import { EventForm } from "@/components/EventForm"
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
                Manage events and track transactions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatsCard 
                title="Total Events" 
                value="0" 
              />
              <StatsCard 
                title="Total Transactions" 
                value="0" 
              />
              <StatsCard 
                title="Total Amount" 
                value="₪0" 
              />
              <StatsCard 
                title="Avg Transaction" 
                value="₪0" 
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Import Transactions</h2>
                <FileUpload />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Add New Event</h2>
                <EventForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index