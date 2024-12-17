import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Transaction } from "@/types"
import { Stats } from "@/components/dashboard/Stats"
import { TransactionsTable } from "@/components/dashboard/TransactionsTable"
import { UploadSection } from "@/components/dashboard/UploadSection"
import { AddReportButton } from "@/components/dashboard/AddReportButton"

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const tableHeaders = {
    'שם חברה': 'companyName',
    'תאריך': 'transactionDate',
    'שעה': 'transactionTime',
    'מספר עסקה': 'transactionNumber',
    'שם עובד': 'employeeName',
    'שם קבוצה': 'groupName',
    'שם עסק': 'businessName',
    'סוג עסקה': 'transactionType',
    'סכום': 'amountOwed'
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">לוח בקרת אירועים</h1>
              <p className="text-muted-foreground">
                ניהול אירועים ומעקב אחר עסקאות
              </p>
            </div>

            <Stats />

            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">ייבוא עסקאות</h2>
              </div>
              
              <UploadSection onTransactionsUpdate={setTransactions} />

              {transactions.length > 0 && (
                <div className="space-y-4">
                  <TransactionsTable 
                    transactions={transactions}
                    tableHeaders={tableHeaders}
                  />
                  
                  <div className="flex justify-end">
                    <AddReportButton 
                      isOpen={isDialogOpen}
                      onOpenChange={setIsDialogOpen}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index