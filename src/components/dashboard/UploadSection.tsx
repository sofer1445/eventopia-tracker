import { Upload } from "lucide-react"
import { FileUpload } from "@/components/FileUpload"
import { Transaction } from "@/types"

interface UploadSectionProps {
  onTransactionsUpdate: (transactions: Transaction[]) => void
}

export function UploadSection({ onTransactionsUpdate }: UploadSectionProps) {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8">
      <div className="text-center space-y-4">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div>
          <h3 className="text-lg font-medium">העלאת נתוני עסקאות</h3>
          <p className="text-sm text-gray-500 mt-1">
            ייבוא קובץ נתוני עסקאות מקובץ אקסל
          </p>
        </div>
        <FileUpload onTransactionsUpdate={onTransactionsUpdate} />
      </div>
    </div>
  )
}