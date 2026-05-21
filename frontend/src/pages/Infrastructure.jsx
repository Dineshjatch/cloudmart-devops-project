import MainLayout from "../layouts/MainLayout";

export default function Infrastructure() {

  const nodes = [
    {
      name: "k8s-master",
      status: "Healthy",
    },
    {
      name: "jenkins-node",
      status: "Healthy",
    },
    {
      name: "monitoring-node",
      status: "Healthy",
    },
  ];

  return (

    <MainLayout>

      <h1 className="text-5xl font-bold mb-8">
        Infrastructure
      </h1>

      <div className="space-y-6">

        {nodes.map((node, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {node.name}
              </h2>

              <p className="text-slate-400">
                Kubernetes Worker Node
              </p>

            </div>

            <div className="text-green-400">
              {node.status}
            </div>

          </div>

        ))}

      </div>

    </MainLayout>

  );
}