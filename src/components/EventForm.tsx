import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Event } from "@/types"

export function EventForm() {
  const { toast } = useToast()
  const [eventData, setEventData] = useState<Event>({
    eventType: '',
    eventDate: '',
    details: '',
    startTime: '',
    endTime: '',
    dishCount: 0,
    participantCount: 0,
    confirmerName: '',
    rank: '',
    role: '',
    confirmationDate: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted event:', eventData)
    toast({
      title: "Event saved successfully",
      description: "The event details have been recorded",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEventData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="eventType"
            placeholder="Event Type"
            value={eventData.eventType}
            onChange={handleChange}
          />
          <Input
            name="eventDate"
            type="date"
            value={eventData.eventDate}
            onChange={handleChange}
          />
          <Input
            name="startTime"
            type="time"
            value={eventData.startTime}
            onChange={handleChange}
          />
          <Input
            name="endTime"
            type="time"
            value={eventData.endTime}
            onChange={handleChange}
          />
          <Input
            name="dishCount"
            type="number"
            placeholder="Number of Dishes"
            value={eventData.dishCount}
            onChange={handleChange}
          />
          <Input
            name="participantCount"
            type="number"
            placeholder="Number of Participants"
            value={eventData.participantCount}
            onChange={handleChange}
          />
          <Input
            name="confirmerName"
            placeholder="Full Name (Confirmer)"
            value={eventData.confirmerName}
            onChange={handleChange}
          />
          <Input
            name="rank"
            placeholder="Rank"
            value={eventData.rank}
            onChange={handleChange}
          />
          <Input
            name="role"
            placeholder="Role"
            value={eventData.role}
            onChange={handleChange}
          />
          <Input
            name="confirmationDate"
            type="date"
            value={eventData.confirmationDate}
            onChange={handleChange}
          />
        </div>
        <Input
          name="details"
          placeholder="Event Details"
          value={eventData.details}
          onChange={handleChange}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Save Event
        </Button>
      </form>
    </Card>
  )
}