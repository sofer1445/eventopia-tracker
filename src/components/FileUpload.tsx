import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import * as XLSX from 'xlsx'
import { Transaction } from "@/types"

interface FileUploadProps {
  onTransactionsUpdate: (transactions: Transaction[]) => void
}

export function FileUpload({ onTransactionsUpdate }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []
    handleFiles(files)
  }

  const handleFiles = async (files: File[]) => {
    const validFiles = files.filter(file => 
      file.name.endsWith('.xlsx') || 
      file.name.endsWith('.xls')
    )

    if (validFiles.length === 0) {
      toast({
        variant: "destructive",
        title: "פורמט קובץ לא חוקי",
        description: "אנא העלה קובץ אקסל בלבד",
      })
      return
    }

    try {
      const file = validFiles[0]
      const data = await file.arrayBuffer()
      const workbook = XLSX.read(data)
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = XLSX.utils.sheet_to_json(worksheet)

      const parsedTransactions = jsonData.map((row: any) => ({
        companyName: row['שם חברה'] || '',
        transactionDate: row['תאריך'] || '',
        transactionTime: row['שעה'] || '',
        transactionNumber: row['מספר עסקה'] || '',
        employeeName: row['שם עובד'] || '',
        groupName: row['שם קבוצה'] || '',
        businessName: row['שם עסק'] || '',
        transactionType: row['סוג עסקה'] || '',
        amountOwed: Number(row['סכום']) || 0
      }))

      onTransactionsUpdate(parsedTransactions)
      toast({
        title: "הקובץ עובד בהצלחה",
        description: `נטענו ${parsedTransactions.length} עסקאות`,
      })
    } catch (error) {
      console.error('Error processing file:', error)
      toast({
        variant: "destructive",
        title: "שגיאה בעיבוד הקובץ",
        description: "אנא בדוק את פורמט הקובץ ונסה שוב",
      })
    }
  }

  return (
    <Card
      className={`p-8 border-2 border-dashed transition-colors ${
        isDragging ? "border-primary bg-primary/5" : "border-border"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Upload className="h-10 w-10 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">העלאת נתוני עסקאות</h3>
        <p className="text-sm text-muted-foreground mb-4">
          ייבוא פרטי עסקאות מקבצי אקסל
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".xlsx,.xls"
          onChange={handleFileInput}
        />
        <Button asChild>
          <label htmlFor="file-upload" className="cursor-pointer">
            בחר קובץ אקסל
          </label>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          הקובץ חייב להכיל: שם חברה, תאריך, שעה, מספר עסקה, שם עובד, שם קבוצה, שם עסק, סוג עסקה וסכום
        </p>
      </div>
    </Card>
  )
}