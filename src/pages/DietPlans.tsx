import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, Calendar, TrendingUp, Target } from "lucide-react";

const DietPlans = () => {
  const navigate = useNavigate();

  const activePlans = [
    {
      id: 1,
      name: "Weight Loss Plan",
      goal: "Lose 5kg",
      duration: "15 days",
      progress: 60,
      startDate: "2024-01-15",
      targetCalories: 1800,
      status: "active"
    },
    {
      id: 2,
      name: "Muscle Gain Plan",
      goal: "Gain 3kg muscle",
      duration: "20 days",
      progress: 35,
      startDate: "2024-01-20",
      targetCalories: 2400,
      status: "active"
    }
  ];

  const suggestedPlans = [
    {
      title: "Mediterranean Diet",
      description: "Heart-healthy plan focused on whole foods and healthy fats",
      duration: "7 days",
      calories: "1600-1900",
      tags: ["Heart-Healthy", "Balanced"]
    },
    {
      title: "Low-Carb Plan",
      description: "Optimized for blood sugar control and weight management",
      duration: "15 days",
      calories: "1500-1800",
      tags: ["Diabetic-Friendly", "Low-Carb"]
    },
    {
      title: "High-Protein Plan",
      description: "Designed for muscle building and athletic performance",
      duration: "20 days",
      calories: "2200-2500",
      tags: ["High-Protein", "Active"]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Diet Plans</h1>
            <p className="text-muted-foreground text-lg">Personalized meal plans for your health goals</p>
          </div>
          <Button 
            className="medical-gradient text-white gap-2"
            onClick={() => navigate("/diet-plans/create")}
          >
            <Plus className="h-4 w-4" />
            Create New Plan
          </Button>
        </div>

        {/* Active Plans */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Active Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePlans.map((plan) => (
              <Card 
                key={plan.id}
                className="glass-card p-6 hover-lift smooth-transition cursor-pointer"
                onClick={() => navigate(`/diet-plans/${plan.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.goal}</p>
                  </div>
                  <Badge className="bg-success text-white">Active</Badge>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Target className="h-4 w-4 text-accent" />
                      <span>{plan.targetCalories} cal/day</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-foreground">{plan.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-glow smooth-transition"
                        style={{ width: `${plan.progress}%` }}
                      />
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Suggested Plans */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Suggested Plans for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedPlans.map((plan, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover-lift smooth-transition"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium text-foreground">{plan.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Daily Calories</span>
                    <span className="font-medium text-foreground">{plan.calories}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {plan.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-white"
                  onClick={() => navigate("/diet-plans/create")}
                >
                  Start This Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DietPlans;
