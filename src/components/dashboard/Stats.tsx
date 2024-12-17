import { StatsCard } from "@/components/StatsCard"

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatsCard title="סה״כ אירועים" value="0" />
      <StatsCard title="סה״כ עסקאות" value="1" />
      <StatsCard title="סה״כ כסף" value="₪0" />
      <StatsCard title="סה״כ אירועים פעילים" value="0" />
    </div>
  )
}