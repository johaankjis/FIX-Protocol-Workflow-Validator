import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown, CheckCircle2, AlertCircle } from "lucide-react"

const metrics = [
  {
    label: "Validation Coverage",
    value: "87%",
    target: "≥85%",
    change: "+2%",
    trend: "up",
    status: "success",
  },
  {
    label: "Test Coverage",
    value: "92%",
    target: "≥90%",
    change: "+12%",
    trend: "up",
    status: "success",
  },
  {
    label: "Latency Reduction",
    value: "32%",
    target: "≥30%",
    change: "+2%",
    trend: "up",
    status: "success",
  },
  {
    label: "CI/CD Runtime",
    value: "-27%",
    target: "≥25%",
    change: "-2%",
    trend: "down",
    status: "success",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
            </div>
            {metric.status === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-success" />
            ) : (
              <AlertCircle className="h-5 w-5 text-warning" />
            )}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div
              className={`flex items-center gap-1 text-sm ${
                metric.trend === "up" ? "text-success" : "text-muted-foreground"
              }`}
            >
              {metric.trend === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              <span>{metric.change}</span>
            </div>
            <span className="text-sm text-muted-foreground">Target: {metric.target}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}
