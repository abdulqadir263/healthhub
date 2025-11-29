import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { useNavigate } from "react-router-dom";
import { Activity, Calendar, Plus, TrendingDown, TrendingUp, Weight } from "lucide-react";

const Progress = () => {
  const navigate = useNavigate();

  const weeklyData = [
    { week: "Week 1", weight: 75, date: "Jan 1" },
    { week: "Week 2", weight: 74.5, date: "Jan 8" },
    { week: "Week 3", weight: 74, date: "Jan 15" },
    { week: "Week 4", weight: 73.2, date: "Jan 22" },
  ];

  const metrics = [
    { label: "Starting Weight", value: "75 kg", date: "Jan 1, 2024" },
    { label: "Current Weight", value: "73.2 kg", date: "Today" },
    { label: "Goal Weight", value: "70 kg", date: "Target" },
    { label: "Total Lost", value: "1.8 kg", trend: "progress" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Progress Tracking</h1>
            <p className="text-muted-foreground text-lg">Monitor your health journey with detailed insights</p>
          </div>
          <Button 
            className="medical-gradient text-white gap-2"
            onClick={() => navigate("/progress/log")}
          >
            <Plus className="h-4 w-4" />
            Log Weight
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Current Weight"
            value="73.2 kg"
            icon={Weight}
            trend="1.8 kg from start"
            trendUp={false}
            color="primary"
          />
          <StatCard
            title="BMI"
            value="23.1"
            icon={Activity}
            trend="Normal range"
            trendUp={true}
            color="success"
          />
          <StatCard
            title="Weekly Change"
            value="-0.8 kg"
            icon={TrendingDown}
            trend="This week"
            trendUp={true}
            color="accent"
          />
          <StatCard
            title="Goal Progress"
            value="36%"
            icon={TrendingUp}
            trend="On track"
            trendUp={true}
            color="secondary"
          />
        </div>

        {/* Progress Chart */}
        <Card className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Weight Progress</h2>
          
          <div className="space-y-6">
            {/* Simple bar chart visualization */}
            <div className="h-64 flex items-end justify-around gap-4">
              {weeklyData.map((data, index) => {
                const maxWeight = Math.max(...weeklyData.map(d => d.weight));
                const height = (data.weight / maxWeight) * 100;
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full flex items-end justify-center" style={{ height: '200px' }}>
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-primary-glow rounded-t-lg smooth-transition hover:opacity-80 cursor-pointer"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-foreground">
                          {data.weight} kg
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">{data.week}</p>
                      <p className="text-xs text-muted-foreground">{data.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.date}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Status Card */}
        <Card className="glass-card p-6 border-l-4 border-l-success">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-success to-green-500 shadow-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Great Progress!</h3>
              <p className="text-muted-foreground mb-4">
                You're making excellent progress towards your goal. You've lost 1.8 kg in 4 weeks, which is a healthy and sustainable rate. Keep up the good work!
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => navigate("/diet-plans")}>
                  View Diet Plan
                </Button>
                <Button variant="outline" onClick={() => navigate("/recipes")}>
                  Browse Recipes
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Weekly Log */}
        <Card className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Weekly Log</h2>
          <div className="space-y-3">
            {weeklyData.reverse().map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{data.week}</p>
                    <p className="text-sm text-muted-foreground">{data.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-foreground">{data.weight} kg</p>
                  {index < weeklyData.length - 1 && (
                    <p className="text-sm text-success">
                      -{(weeklyData[index + 1].weight - data.weight).toFixed(1)} kg
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Progress;
