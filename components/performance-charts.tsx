"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const latencyData = [
  { time: "00:00", latency: 45 },
  { time: "04:00", latency: 42 },
  { time: "08:00", latency: 38 },
  { time: "12:00", latency: 35 },
  { time: "16:00", latency: 32 },
  { time: "20:00", latency: 30 },
  { time: "24:00", latency: 28 },
]

const throughputData = [
  { time: "00:00", messages: 1200 },
  { time: "04:00", messages: 1450 },
  { time: "08:00", messages: 1800 },
  { time: "12:00", messages: 2100 },
  { time: "16:00", messages: 2350 },
  { time: "20:00", messages: 2500 },
  { time: "24:00", messages: 2650 },
]

export function PerformanceCharts() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Message Parsing Latency</h3>
            <span className="text-sm text-muted-foreground">Last 24 hours</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={latencyData}>
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                label={{ value: "ms", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="latency" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-muted-foreground">
            Average latency: <span className="font-mono text-foreground">35ms</span> (-30% improvement)
          </p>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Message Throughput</h3>
            <span className="text-sm text-muted-foreground">Messages/sec</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={throughputData}>
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="messages" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p className="mt-2 text-sm text-muted-foreground">
            Peak throughput: <span className="font-mono text-foreground">2,650 msg/s</span>
          </p>
        </div>
      </div>
    </Card>
  )
}
