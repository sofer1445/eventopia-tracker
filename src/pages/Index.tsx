import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { StatsCard } from "@/components/StatsCard"
import { FileUpload } from "@/components/FileUpload"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to AI Reports</h1>
              <p className="text-muted-foreground">
                Upload your files and get instant AI-powered analysis
              </p>
            </div>

            <FileUpload />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard title="Total Documents" value="24" />
              <StatsCard title="Recent Analyses" value="12" />
              <StatsCard title="AI Insights" value="36" />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index