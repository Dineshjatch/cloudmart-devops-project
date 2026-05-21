import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 border border-slate-800 p-10 rounded-3xl w-[420px]"
      >

        <h1 className="text-4xl font-bold text-white mb-2">
          NexusOps
        </h1>

        <p className="text-slate-400 mb-8">
          Enterprise DevOps Platform
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all rounded-xl p-4 font-bold"
        >
          Login
        </button>

      </motion.div>

    </div>

  );
}