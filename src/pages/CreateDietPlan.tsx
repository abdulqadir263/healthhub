import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Sparkles } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const CreateDietPlan = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [planData, setPlanData] = useState({
    goal: "",
    currentWeight: "",
    targetWeight: "",
    duration: "",
    activityLevel: "",
    workoutRoutine: "",
    dietaryPreferences: "",
    mealCount: "3",
  });

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      toast({
        title: "Diet Plan Generated!",
        description: "Your personalized meal plan is ready.",
      });
      navigate("/diet-plans/1");
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/diet-plans")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Diet Plans
        </Button>

        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Create Diet Plan</h1>
          <p className="text-muted-foreground text-lg">Tell us about your goals and we'll create a personalized plan</p>
        </div>

        <Card className="glass-card p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Your Goals</h2>
              
              <div className="space-y-4 mb-6">
                <Label>What's your primary goal?</Label>
                <RadioGroup value={planData.goal} onValueChange={(value) => setPlanData({ ...planData, goal: value })}>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                    <RadioGroupItem value="weight-loss" id="weight-loss" />
                    <Label htmlFor="weight-loss" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Weight Loss</div>
                      <div className="text-sm text-muted-foreground">Lose weight in a healthy, sustainable way</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                    <RadioGroupItem value="weight-gain" id="weight-gain" />
                    <Label htmlFor="weight-gain" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Weight Gain</div>
                      <div className="text-sm text-muted-foreground">Build muscle and increase body mass</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50 smooth-transition">
                    <RadioGroupItem value="maintenance" id="maintenance" />
                    <Label htmlFor="maintenance" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Maintenance</div>
                      <div className="text-sm text-muted-foreground">Maintain current weight with balanced nutrition</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                  <Input
                    id="currentWeight"
                    type="number"
                    placeholder="70"
                    value={planData.currentWeight}
                    onChange={(e) => setPlanData({ ...planData, currentWeight: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                  <Input
                    id="targetWeight"
                    type="number"
                    placeholder="65"
                    value={planData.targetWeight}
                    onChange={(e) => setPlanData({ ...planData, targetWeight: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Plan Duration</Label>
                  <Select value={planData.duration} onValueChange={(value) => setPlanData({ ...planData, duration: value })}>
                    <SelectTrigger className="glass-input">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 Days</SelectItem>
                      <SelectItem value="15">15 Days</SelectItem>
                      <SelectItem value="20">20 Days</SelectItem>
                      <SelectItem value="30">30 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activityLevel">Activity Level</Label>
                  <Select value={planData.activityLevel} onValueChange={(value) => setPlanData({ ...planData, activityLevel: value })}>
                    <SelectTrigger className="glass-input">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (Little/No Exercise)</SelectItem>
                      <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                      <SelectItem value="very-active">Very Active (Intense exercise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Additional Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="workoutRoutine">Workout Routine</Label>
                <Textarea
                  id="workoutRoutine"
                  placeholder="Describe your typical workout routine (e.g., cardio 3x/week, strength training 2x/week)"
                  value={planData.workoutRoutine}
                  onChange={(e) => setPlanData({ ...planData, workoutRoutine: e.target.value })}
                  className="glass-input min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietaryPreferences">Dietary Preferences & Restrictions</Label>
                <Textarea
                  id="dietaryPreferences"
                  placeholder="Any dietary preferences or restrictions? (e.g., vegetarian, allergies, dislikes)"
                  value={planData.dietaryPreferences}
                  onChange={(e) => setPlanData({ ...planData, dietaryPreferences: e.target.value })}
                  className="glass-input min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mealCount">Meals Per Day</Label>
                <Select value={planData.mealCount} onValueChange={(value) => setPlanData({ ...planData, mealCount: value })}>
                  <SelectTrigger className="glass-input">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 Meals</SelectItem>
                    <SelectItem value="4">4 Meals</SelectItem>
                    <SelectItem value="5">5 Meals (3 main + 2 snacks)</SelectItem>
                    <SelectItem value="6">6 Meals (Small frequent meals)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              className="w-full h-12 medical-gradient text-white gap-2"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate My Diet Plan
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CreateDietPlan;
