import MainLayout from "../layouts/MainLayout";

export default function Deployments() {

  const deployments = [
    "Frontend deployed successfully",
    "Backend deployment completed",
    "Grafana dashboard updated",
    "Prometheus metrics collected",
    "Jenkins CI/CD completed",
  ];

  return (

    <MainLayout>

      <h1 className="text-5xl font-bold mb-8">
        Deployment Logs
      </h1>

      <div className="space-y-4">

        {deployments.map((log, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >

            <p className="text-green-400">
              ● {log}
            </p>

          </div>

        ))}

      </div>

    </MainLayout>

  );
}