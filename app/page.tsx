import { Header } from "@/components/header"
import { MetricsOverview } from "@/components/metrics-overview"
import { PerformanceCharts } from "@/components/performance-charts"
import { WorkflowSimulator } from "@/components/workflow-simulator"
import { TestResults } from "@/components/test-results"
import { CICDStatus } from "@/components/cicd-status"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsOverview />
        <div className="grid gap-6 lg:grid-cols-2">
          <PerformanceCharts />
          <WorkflowSimulator />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <TestResults />
          <CICDStatus />
        </div>
      </main>
    </div>
  )
}
