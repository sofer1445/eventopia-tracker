import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({ title, value, trend, className = "" }: StatsCardProps) {
  return (
    <Card className={`p-6 ${className}`}>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-3xl font-bold text-primary">{value}</p>
        {trend && (
          <span className={`flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {trend.value}%
          </span>
        )}
      </div>
    </Card>
  )
}