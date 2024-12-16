import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function FileUpload() {
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

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(file => 
      file.name.endsWith('.xlsx') || 
      file.name.endsWith('.xls') ||
      file.name.endsWith('.csv')
    )

    if (validFiles.length > 0) {
      toast({
        title: "Files uploaded successfully",
        description: `${validFiles.length} file(s) ready for processing. Data validation in progress...`,
      })
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file format",
        description: "Please upload Excel or CSV files only",
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
        <h3 className="text-lg font-semibold mb-2">Upload Event Data</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Import event details and transactions from Excel or CSV files
        </p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileInput}
          multiple
        />
        <Button asChild>
          <label htmlFor="file-upload" className="cursor-pointer">
            Choose Files to Import
          </label>
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Supports Excel (XLSX, XLS) and CSV formats
        </p>
      </div>
    </Card>
  )
}