import { AppSidebar } from "@/components/AppSidebar"
import { StatsCard } from "@/components/StatsCard"
import { FileUpload } from "@/components/FileUpload"
import { EventForm } from "@/components/EventForm"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react"
import { Transaction } from "@/types"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Upload } from "lucide-react"

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleTransactionsUpdate = (newTransactions: Transaction[]) => {
    setTransactions(newTransactions)
  }

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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatsCard title="סה״כ אירועים" value="0" />
              <StatsCard title="סה״כ עסקאות" value="1" />
              <StatsCard title="סה״כ כסף" value="₪0" />
              <StatsCard title="סה״כ אירועים פעילים" value="0" />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">ייבוא עסקאות</h2>
              </div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div>
                    <h3 className="text-lg font-medium">העלאת נתוני עסקאות</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      ייבוא קובץ נתוני עסקאות מקובץ אקסל
                    </p>
                  </div>
                  <FileUpload onTransactionsUpdate={handleTransactionsUpdate} />
                </div>
              </div>

              {transactions.length > 0 && (
                <div className="space-y-4">
                  <div className="overflow-x-auto rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {Object.keys(tableHeaders).map((header) => (
                            <TableHead key={header} className="text-right">{header}</TableHead>
                          ))}
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
                  
                  <div className="flex justify-end">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="lg">
                          הוספת דיווח
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <EventForm />
                      </DialogContent>
                    </Dialog>
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