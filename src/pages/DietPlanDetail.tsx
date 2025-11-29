import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, Download, Target, TrendingUp } from "lucide-react";

const DietPlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(1);

  const planInfo = {
    name: "Weight Loss Plan",
    goal: "Lose 5kg",
    duration: 15,
    progress: 60,
    targetCalories: 1800,
    status: "active"
  };

  const weekData = Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    date: new Date(2024, 0, 15 + i).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    meals: [
      {
        type: "Breakfast",
        name: "Greek Yogurt Parfait with Berries",
        time: "8:00 AM",
        calories: 320,
        protein: "18g",
        carbs: "42g",
        fat: "8g"
      },
      {
        type: "Lunch",
        name: "Grilled Chicken Salad",
        time: "1:00 PM",
        calories: 450,
        protein: "35g",
        carbs: "28g",
        fat: "18g"
      },
      {
        type: "Snack",
        name: "Apple with Almond Butter",
        time: "4:00 PM",
        calories: 180,
        protein: "4g",
        carbs: "22g",
        fat: "9g"
      },
      {
        type: "Dinner",
        name: "Baked Salmon with Quinoa",
        time: "7:00 PM",
        calories: 520,
        protein: "38g",
        carbs: "45g",
        fat: "16g"
      }
    ],
    totalCalories: 1470,
    waterIntake: 8,
    completed: i < 5
  }));

  const selectedDayData = weekData[selectedDay - 1];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/diet-plans")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Diet Plans
        </Button>

        {/* Plan Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{planInfo.name}</h1>
            <p className="text-muted-foreground text-lg">{planInfo.goal}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Plan
            </Button>
            <Badge className="bg-success text-white h-10 px-4 text-base">
              {planInfo.status === 'active' ? 'Active' : 'Completed'}
            </Badge>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Daily Target</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{planInfo.targetCalories} cal</p>
          </Card>

          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Duration</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{planInfo.duration} days</p>
          </Card>

          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <span className="text-sm text-muted-foreground">Progress</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{planInfo.progress}%</p>
          </Card>

          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-secondary" />
              <span className="text-sm text-muted-foreground">Days Left</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{Math.ceil(planInfo.duration * (100 - planInfo.progress) / 100)}</p>
          </Card>
        </div>

        {/* Calendar View */}
        <Card className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Meal Calendar</h2>
          
          <Tabs value="week1" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="week1">Week 1</TabsTrigger>
              <TabsTrigger value="week2">Week 2</TabsTrigger>
              <TabsTrigger value="week3">Week 3</TabsTrigger>
            </TabsList>

            <TabsContent value="week1" className="space-y-6">
              {/* Day Selector */}
              <div className="grid grid-cols-7 gap-2">
                {weekData.map((day) => (
                  <Button
                    key={day.day}
                    variant={selectedDay === day.day ? "default" : "outline"}
                    className={`h-auto py-4 flex flex-col gap-1 ${
                      selectedDay === day.day ? 'medical-gradient text-white' : ''
                    } ${day.completed ? 'border-success' : ''}`}
                    onClick={() => setSelectedDay(day.day)}
                  >
                    <span className="text-xs opacity-80">Day {day.day}</span>
                    <span className="font-semibold">{day.date}</span>
                    {day.completed && <span className="text-xs">✓</span>}
                  </Button>
                ))}
              </div>

              {/* Selected Day Meals */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">Day {selectedDay} - {selectedDayData.date}</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Calories</p>
                    <p className="text-2xl font-bold text-foreground">{selectedDayData.totalCalories}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedDayData.meals.map((meal, index) => (
                    <Card key={index} className="glass-card p-5 hover-lift smooth-transition">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <Badge variant="outline" className="mb-2">{meal.type}</Badge>
                          <h4 className="font-semibold text-foreground">{meal.name}</h4>
                          <p className="text-sm text-muted-foreground">{meal.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{meal.calories}</p>
                          <p className="text-xs text-muted-foreground">calories</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground">Protein</p>
                          <p className="font-medium text-foreground">{meal.protein}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Carbs</p>
                          <p className="font-medium text-foreground">{meal.carbs}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Fat</p>
                          <p className="font-medium text-foreground">{meal.fat}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="week2">
              <p className="text-center text-muted-foreground py-8">Week 2 meals coming soon...</p>
            </TabsContent>

            <TabsContent value="week3">
              <p className="text-center text-muted-foreground py-8">Week 3 meals coming soon...</p>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DietPlanDetail;
