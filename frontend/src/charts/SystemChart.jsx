import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", cpu: 30 },
  { name: "Tue", cpu: 45 },
  { name: "Wed", cpu: 40 },
  { name: "Thu", cpu: 70 },
  { name: "Fri", cpu: 50 },
  { name: "Sat", cpu: 90 },
  { name: "Sun", cpu: 60 },
];

export default function SystemChart() {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[350px]">

      <h2 className="text-xl font-bold mb-6">
        Cluster CPU Usage
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}