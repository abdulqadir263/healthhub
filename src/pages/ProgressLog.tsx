import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Calendar, Save } from "lucide-react";

const ProgressLog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [logData, setLogData] = useState({
    weight: "",
    date: new Date().toISOString().split('T')[0],
    bloodPressure: "",
    mood: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Progress Logged!",
      description: "Your health data has been recorded successfully.",
    });
    navigate("/progress");
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/progress")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Progress
        </Button>

        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Log Your Progress</h1>
          <p className="text-muted-foreground text-lg">Record your health metrics for today</p>
        </div>

        <Card className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={logData.date}
                  onChange={(e) => setLogData({ ...logData, date: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="72.5"
                  value={logData.weight}
                  onChange={(e) => setLogData({ ...logData, weight: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodPressure">Blood Pressure (optional)</Label>
                <Input
                  id="bloodPressure"
                  placeholder="120/80"
                  value={logData.bloodPressure}
                  onChange={(e) => setLogData({ ...logData, bloodPressure: e.target.value })}
                  className="glass-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mood">Mood/Energy Level (optional)</Label>
                <Input
                  id="mood"
                  placeholder="Good, Tired, Energetic, etc."
                  value={logData.mood}
                  onChange={(e) => setLogData({ ...logData, mood: e.target.value })}
                  className="glass-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any observations, feelings, or notes about your progress..."
                value={logData.notes}
                onChange={(e) => setLogData({ ...logData, notes: e.target.value })}
                className="glass-input min-h-[120px]"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="submit"
                className="flex-1 medical-gradient text-white gap-2"
              >
                <Save className="h-4 w-4" />
                Save Entry
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => navigate("/progress")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>

        <Card className="glass-card p-6 border-l-4 border-l-accent">
          <h3 className="font-semibold text-foreground mb-2">Tracking Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Weigh yourself at the same time each day for consistency</li>
            <li>• Morning weight (after bathroom, before eating) is most accurate</li>
            <li>• Don't worry about daily fluctuations - focus on weekly trends</li>
            <li>• Log your blood pressure if you're monitoring heart health</li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProgressLog;
