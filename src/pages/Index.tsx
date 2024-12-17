import { Card } from "@/components/ui/card"
import { AppSidebar } from "@/components/AppSidebar"
import { StatsCard } from "@/components/StatsCard"
import { FileUpload } from "@/components/FileUpload"
import { EventForm } from "@/components/EventForm"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react"
import { Transaction } from "@/types"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const handleTransactionsUpdate = (newTransactions: Transaction[]) => {
    setTransactions(newTransactions)
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full" dir="rtl">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">לוח בקרת אירועים</h1>
              <p className="text-muted-foreground">
                ניהול אירועים ומעקב אחר עסקאות
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatsCard title="סה״כ אירועים" value="0" />
              <StatsCard title="סה״כ עסקאות" value={transactions.length.toString()} />
              <StatsCard 
                title="סה״כ סכום" 
                value={`₪${transactions.reduce((sum, t) => sum + t.amountOwed, 0).toLocaleString()}`} 
              />
              <StatsCard 
                title="ממוצע לעסקה" 
                value={`₪${transactions.length ? 
                  (transactions.reduce((sum, t) => sum + t.amountOwed, 0) / transactions.length).toLocaleString() : 
                  '0'}`} 
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl font-semibold mb-4">ייבוא עסקאות</h2>
                <FileUpload onTransactionsUpdate={handleTransactionsUpdate} />
                
                {transactions.length > 0 && (
                  <Card className="mt-4">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">נתוני עסקאות</h3>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>שם חברה</TableHead>
                              <TableHead>תאריך</TableHead>
                              <TableHead>שעה</TableHead>
                              <TableHead>מספר עסקה</TableHead>
                              <TableHead>שם עובד</TableHead>
                              <TableHead>שם קבוצה</TableHead>
                              <TableHead>שם עסק</TableHead>
                              <TableHead>סוג עסקה</TableHead>
                              <TableHead>סכום</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transactions.map((transaction, index) => (
                              <TableRow key={index}>
                                <TableCell>{transaction.companyName}</TableCell>
                                <TableCell>{transaction.transactionDate}</TableCell>
                                <TableCell>{transaction.transactionTime}</TableCell>
                                <TableCell>{transaction.transactionNumber}</TableCell>
                                <TableCell>{transaction.employeeName}</TableCell>
                                <TableCell>{transaction.groupName}</TableCell>
                                <TableCell>{transaction.businessName}</TableCell>
                                <TableCell>{transaction.transactionType}</TableCell>
                                <TableCell>₪{transaction.amountOwed.toLocaleString()}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-xl font-semibold mb-4">הוספת אירוע חדש</h2>
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