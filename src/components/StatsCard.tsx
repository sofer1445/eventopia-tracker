import { Card } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  className?: string
}

export function StatsCard({ title, value, className = "" }: StatsCardProps) {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-primary">{value}</p>
    </Card>
  )
}