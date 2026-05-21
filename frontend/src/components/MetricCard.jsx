import { motion } from "framer-motion";

export default function MetricCard({ title, value, color }) {

  return (

    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
    >

      <h3 className="text-slate-400 text-sm">
        {title}
      </h3>

      <h1 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h1>

    </motion.div>

  );
}