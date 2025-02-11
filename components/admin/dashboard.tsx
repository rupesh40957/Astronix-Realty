import { useQuery } from "@tanstack/react-query";
import { StatsCard } from "@/components/admin/dashboard/stats-card";
import { Building, Users, Activity } from "lucide-react";

export default function Dashboard() {
  const { data: stats } = useQuery({
    queryKey: ["/api/stats"],
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Total Properties"
          value={stats?.totalProperties ?? 0}
          icon={Building}
        />
        <StatsCard
          title="Active Leads"
          value={stats?.activeLeads ?? 0}
          icon={Users}
        />
        <StatsCard
          title="Properties Viewed"
          value={stats?.propertiesViewed ?? 0}
          icon={Activity}
        />
      </div>
    </div>
  );
}
