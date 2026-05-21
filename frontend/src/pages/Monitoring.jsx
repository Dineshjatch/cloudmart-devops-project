import MainLayout from "../layouts/MainLayout";

export default function Monitoring() {

  return (

    <MainLayout>

      <h1 className="text-5xl font-bold mb-8">
        Monitoring Center
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Prometheus Status
          </h2>

          <p className="text-green-400">
            Healthy
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Grafana Status
          </h2>

          <p className="text-green-400">
            Running
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Alert Manager
          </h2>

          <p className="text-yellow-400">
            Warning
          </p>
        </div>

      </div>

    </MainLayout>

  );
}