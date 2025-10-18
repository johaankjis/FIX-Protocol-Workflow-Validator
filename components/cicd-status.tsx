import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, GitBranch, Clock } from "lucide-react"

const pipelines = [
  {
    id: 1,
    branch: "main",
    commit: "feat: optimize message parsing",
    status: "success",
    duration: "4m 32s",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    branch: "develop",
    commit: "test: add edge case scenarios",
    status: "success",
    duration: "4m 18s",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    branch: "feature/validation",
    commit: "refactor: improve validation logic",
    status: "running",
    duration: "2m 45s",
    timestamp: "Running",
  },
]

export function CICDStatus() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">CI/CD Pipeline</h3>
          <Badge variant="outline" className="gap-1">
            <GitBranch className="h-3 w-3" />
            GitHub Actions
          </Badge>
        </div>

        <div className="space-y-3">
          {pipelines.map((pipeline) => (
            <div key={pipeline.id} className="rounded-lg border border-border bg-secondary/50 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {pipeline.status === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-primary mt-0.5 animate-pulse" />
                  )}
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{pipeline.commit}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-mono">{pipeline.branch}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {pipeline.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge
                  variant={pipeline.status === "success" ? "default" : "secondary"}
                  className={pipeline.status === "running" ? "animate-pulse" : ""}
                >
                  {pipeline.status}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{pipeline.timestamp}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-secondary/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Runtime Improvement</p>
              <p className="text-2xl font-bold text-success">-27%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Avg. duration</p>
              <p className="text-sm font-mono text-foreground">4m 25s</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
