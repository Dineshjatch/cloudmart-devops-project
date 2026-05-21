import { Home, Server, Activity, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";
export default function MainLayout({ children }) {

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <div className="w-72 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-3xl font-bold mb-10 text-cyan-400">
          NexusOps
        </h1>

        <nav className="space-y-4">

          <Link to="/dashboard">

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800 cursor-pointer hover:bg-slate-700">
              <Home size={20} />
              <span>Dashboard</span>
            </div>

          </Link>

          <Link to="/deployments">

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
              <Server size={20} />
              <span>Deployments</span>
            </div>

          </Link>

          <Link to="/monitoring">

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
              <Activity size={20} />
              <span>Monitoring</span>
            </div>

          </Link>

          <Link to="/infrastructure">

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer">
              <Database size={20} />
              <span>Infrastructure</span>
            </div>

          </Link>

        </nav>

      </div>

      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}