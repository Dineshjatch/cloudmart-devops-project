const deployments = [
  {
    id: 1,
    service: "frontend-service",
    status: "Successful",
  },
  {
    id: 2,
    service: "backend-service",
    status: "Running",
  },
  {
    id: 3,
    service: "prometheus",
    status: "Healthy",
  },
  {
    id: 4,
    service: "grafana",
    status: "Healthy",
  },
];

export default function DeploymentActivity() {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Deployment Activity
      </h2>

      <div className="space-y-4">

        {deployments.map((item) => (

          <div
            key={item.id}
            className="bg-slate-800 rounded-xl p-4 flex items-center justify-between"
          >

            <div>

              <h3 className="font-semibold">
                {item.service}
              </h3>

              <p className="text-slate-400 text-sm">
                Kubernetes Deployment
              </p>

            </div>

            <span className="text-green-400">
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}