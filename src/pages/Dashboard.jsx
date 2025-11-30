import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Activity, Apple, Calendar, Heart, TrendingUp, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Recipe Recommendations",
      description: "Get personalized recipes based on your health profile",
      icon: UtensilsCrossed,
      color: "from-primary to-primary-glow",
      route: "/recipes"
    },
    {
      title: "Diet Plans",
      description: "Customized meal plans for your health goals",
      icon: Apple,
      color: "from-accent to-green-500",
      route: "/diet-plans"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your health journey with detailed insights",
      icon: TrendingUp,
      color: "from-secondary to-blue-500",
      route: "/progress"
    },
    {
      title: "Lab Report Analysis",
      description: "Upload and analyze your medical reports",
      icon: Activity,
      color: "from-warning to-orange-500",
      route: "/lab-reports"
    },
    {
      title: "AI Doctor",
      description: "Get instant medical advice from our AI assistant",
      icon: Heart,
      color: "from-destructive to-red-500",
      route: "/ai-doctor"
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground text-lg">Here's your health overview for today</p>
        </div>

        {/* Health Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Current Weight"
            value="72 kg"
            icon={Activity}
            trend="2.1% from last week"
            trendUp={false}
            color="primary"
          />
          <StatCard
            title="BMI"
            value="23.5"
            icon={Heart}
            trend="Normal range"
            trendUp={true}
            color="success"
          />
          <StatCard
            title="Active Days"
            value="18"
            icon={Calendar}
            trend="This month"
            trendUp={true}
            color="secondary"
          />
          <StatCard
            title="Calories Goal"
            value="2,100"
            icon={Apple}
            trend="Per day"
            color="accent"
          />
        </div>

        {/* Modules Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Health Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.title}
                className="glass-card p-6 hover-lift smooth-transition cursor-pointer group"
                onClick={() => navigate(module.route)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition shadow-lg`}>
                  <module.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white smooth-transition">
                  Explore Module
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-primary to-primary-glow text-white hover:opacity-90"
              onClick={() => navigate("/recipes/search")}
            >
              <UtensilsCrossed className="h-6 w-6" />
              <span>Find Recipe</span>
            </Button>
            <Button 
              className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-accent to-green-500 text-white hover:opacity-90"
              onClick={() => navigate("/diet-plans/create")}
            >
              <Apple className="h-6 w-6" />
              <span>Create Diet Plan</span>
            </Button>
            <Button 
              className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-secondary to-blue-500 text-white hover:opacity-90"
              onClick={() => navigate("/progress/log")}
            >
              <TrendingUp className="h-6 w-6" />
              <span>Log Progress</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
