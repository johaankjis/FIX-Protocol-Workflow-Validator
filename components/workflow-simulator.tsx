"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Square, RotateCcw } from "lucide-react"

const workflows = [
  { id: 1, name: "New Order Single", type: "D", status: "idle" },
  { id: 2, name: "Order Cancel Request", type: "F", status: "idle" },
  { id: 3, name: "Execution Report", type: "8", status: "idle" },
  { id: 4, name: "Market Data Request", type: "V", status: "idle" },
]

export function WorkflowSimulator() {
  const [running, setRunning] = useState(false)
  const [activeWorkflows, setActiveWorkflows] = useState<number[]>([])

  const handleStart = () => {
    setRunning(true)
    setActiveWorkflows([1, 2, 3, 4])
    setTimeout(() => {
      setRunning(false)
      setActiveWorkflows([])
    }, 3000)
  }

  const handleStop = () => {
    setRunning(false)
    setActiveWorkflows([])
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Workflow Simulator</h3>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleStart} disabled={running} className="gap-2">
              <Play className="h-4 w-4" />
              Start
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleStop}
              disabled={!running}
              className="gap-2 bg-transparent"
            >
              <Square className="h-4 w-4" />
              Stop
            </Button>
            <Button size="sm" variant="ghost" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full ${
                    activeWorkflows.includes(workflow.id) ? "bg-success animate-pulse" : "bg-muted-foreground"
                  }`}
                />
                <div>
                  <p className="font-medium text-foreground">{workflow.name}</p>
                  <p className="text-sm text-muted-foreground font-mono">MsgType: {workflow.type}</p>
                </div>
              </div>
              <Badge variant={activeWorkflows.includes(workflow.id) ? "default" : "secondary"}>
                {activeWorkflows.includes(workflow.id) ? "Running" : "Idle"}
              </Badge>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-secondary/30 p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">QuickFIX/J Session:</span> FIX.4.4:SENDER→TARGET
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Status:</span> {running ? "Active" : "Connected"}
          </p>
        </div>
      </div>
    </Card>
  )
}
