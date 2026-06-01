import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import MetricCard from "../components/MetricCard";
import SystemChart from "../charts/SystemChart";
import InfrastructureTable from "../components/InfrastructureTable";
import DeploymentActivity from "../components/DeploymentActivity";

import api from "../services/api";

export default function Dashboard() {

  const [infrastructure, setInfrastructure] = useState([]);

  useEffect(() => {

    fetchInfrastructure();

  }, []);

  const fetchInfrastructure = async () => {

    try {

      const response = await api.get("/infrastructure");

      setInfrastructure(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <MainLayout>

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          NexusOps Control Center
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Cloud infrastructure monitoring and deployment automation platform..
        </p>

      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <MetricCard
          title="Kubernetes Pods"
          value="24"
          color="text-cyan-400"
        />

        <MetricCard
          title="Deployments"
          value="12"
          color="text-green-400"
        />

        <MetricCard
          title="CPU Usage"
          value="68%"
          color="text-orange-400"
        />

        <MetricCard
          title="Memory"
          value="72%"
          color="text-pink-400"
        />

      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">

        <SystemChart />

        <DeploymentActivity />

      </div>

      <InfrastructureTable data={infrastructure} />

    </MainLayout>

  );
}