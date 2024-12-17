import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { EventForm } from "@/components/EventForm"

interface AddReportButtonProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function AddReportButton({ isOpen, onOpenChange }: AddReportButtonProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg">
          הוספת דיווח
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <EventForm />
      </DialogContent>
    </Dialog>
  )
}