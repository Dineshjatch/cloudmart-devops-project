export default function InfrastructureTable({ data }) {

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Infrastructure Nodes
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-slate-400 border-b border-slate-700">

            <th className="text-left py-3">Node</th>
            <th className="text-left py-3">CPU</th>
            <th className="text-left py-3">Memory</th>
            <th className="text-left py-3">Pods</th>
            <th className="text-left py-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {data.map((node) => (

            <tr
              key={node.id}
              className="border-b border-slate-800"
            >

              <td className="py-4">
                {node.node_name}
              </td>

              <td className="py-4 text-cyan-400">
                {node.cpu_usage}
              </td>

              <td className="py-4 text-pink-400">
                {node.memory_usage}
              </td>

              <td className="py-4">
                {node.pod_count}
              </td>

              <td className="py-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {node.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}