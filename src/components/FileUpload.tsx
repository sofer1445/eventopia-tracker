import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import * as XLSX from 'xlsx'
import { Transaction } from "@/types"

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const { toast } = useToast()
  const [transactions, setTransactions] = useState<Transaction[]>([])

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
        title: "Invalid file format",
        description: "Please upload Excel files only",
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
        companyName: row['Company name'] || '',
        transactionDate: row['Transaction date'] || '',
        transactionTime: row['Transaction time'] || '',
        transactionNumber: row['Transaction number'] || '',
        employeeName: row['Employee name'] || '',
        groupName: row['Group name'] || '',
        businessName: row['Business name'] || '',
        transactionType: row['Transaction type'] || '',
        amountOwed: Number(row['Amount owed']) || 0
      }))

      setTransactions(parsedTransactions)
      toast({
        title: "File processed successfully",
        description: `Loaded ${parsedTransactions.length} transactions`,
      })

      console.log('Processed transactions:', parsedTransactions)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error processing file",
        description: "Please check the file format and try again",
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
        <h3 className="text-lg font-semibold mb-2">Upload Transaction Data</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Import transaction details from Excel files
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
            Choose Excel File
          </label>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          File must contain: Company name, Transaction date/time, Employee details, and Amount
        </p>
      </div>
    </Card>
  )
}