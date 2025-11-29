import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  color?: "primary" | "secondary" | "accent" | "success" | "warning";
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp, color = "primary" }: StatCardProps) => {
  const colorClasses = {
    primary: "from-primary to-primary-glow",
    secondary: "from-secondary to-blue-500",
    accent: "from-accent to-green-500",
    success: "from-success to-green-600",
    warning: "from-warning to-orange-500",
  };

  return (
    <Card className="glass-card p-6 hover-lift smooth-transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? 'text-success' : 'text-destructive'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
