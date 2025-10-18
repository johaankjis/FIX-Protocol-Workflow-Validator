import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

const testSuites = [
  {
    name: "Session Management Tests",
    total: 45,
    passed: 45,
    failed: 0,
    duration: "2.3s",
    coverage: "95%",
  },
  {
    name: "Message Validation Tests",
    total: 128,
    passed: 126,
    failed: 2,
    duration: "5.7s",
    coverage: "92%",
  },
  {
    name: "Edge Case Scenarios",
    total: 67,
    passed: 67,
    failed: 0,
    duration: "3.1s",
    coverage: "88%",
  },
  {
    name: "Negative Test Cases",
    total: 89,
    passed: 87,
    failed: 2,
    duration: "4.2s",
    coverage: "90%",
  },
]

export function TestResults() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Test Results</h3>
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" />
            15.3s total
          </Badge>
        </div>

        <div className="space-y-3">
          {testSuites.map((suite) => (
            <div key={suite.name} className="rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{suite.name}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-success">
                      <CheckCircle2 className="h-4 w-4" />
                      {suite.passed} passed
                    </span>
                    {suite.failed > 0 && (
                      <span className="flex items-center gap-1 text-destructive">
                        <XCircle className="h-4 w-4" />
                        {suite.failed} failed
                      </span>
                    )}
                    <span className="text-muted-foreground">{suite.duration}</span>
                  </div>
                </div>
                <Badge variant="secondary">{suite.coverage}</Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-secondary/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Overall Coverage</p>
              <p className="text-2xl font-bold text-foreground">92%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">329 tests</p>
              <p className="text-sm text-success">325 passed</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
