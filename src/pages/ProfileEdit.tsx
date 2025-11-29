import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save } from "lucide-react";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: "32",
    gender: "male",
    bloodType: "A+",
    height: "175",
    weight: "73.2",
    bloodPressure: "120/80",
    diabetes: "prediabetic",
    heartConditions: "None",
    allergies: "Shellfish, Peanuts",
    medications: "Metformin 500mg",
    activityLevel: "moderate",
    smokingStatus: "never",
    alcoholConsumption: "occasional",
    dietaryRestrictions: "Vegetarian",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated!",
      description: "Your health profile has been saved successfully.",
    });
    navigate("/profile");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Profile
        </Button>

        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Edit Health Profile</h1>
          <p className="text-muted-foreground text-lg">Update your personal and medical information</p>
        </div>

        <Card className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profileData.age}
                    onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select 
                    value={profileData.gender} 
                    onValueChange={(value) => setProfileData({ ...profileData, gender: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select 
                    value={profileData.bloodType} 
                    onValueChange={(value) => setProfileData({ ...profileData, bloodType: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Physical Measurements */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Physical Measurements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={profileData.height}
                    onChange={(e) => setProfileData({ ...profileData, height: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={profileData.weight}
                    onChange={(e) => setProfileData({ ...profileData, weight: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodPressure">Blood Pressure</Label>
                  <Input
                    id="bloodPressure"
                    placeholder="120/80"
                    value={profileData.bloodPressure}
                    onChange={(e) => setProfileData({ ...profileData, bloodPressure: e.target.value })}
                    className="glass-input"
                  />
                </div>
              </div>
            </div>

            {/* Medical History */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Medical History</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="diabetes">Diabetes Status</Label>
                  <Select 
                    value={profileData.diabetes} 
                    onValueChange={(value) => setProfileData({ ...profileData, diabetes: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="type1">Type 1</SelectItem>
                      <SelectItem value="type2">Type 2</SelectItem>
                      <SelectItem value="prediabetic">Pre-diabetic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="heartConditions">Heart Conditions</Label>
                  <Input
                    id="heartConditions"
                    value={profileData.heartConditions}
                    onChange={(e) => setProfileData({ ...profileData, heartConditions: e.target.value })}
                    className="glass-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    value={profileData.allergies}
                    onChange={(e) => setProfileData({ ...profileData, allergies: e.target.value })}
                    className="glass-input min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea
                    id="medications"
                    value={profileData.medications}
                    onChange={(e) => setProfileData({ ...profileData, medications: e.target.value })}
                    className="glass-input min-h-[80px]"
                  />
                </div>
              </div>
            </div>

            {/* Lifestyle */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Lifestyle Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="activityLevel">Activity Level</Label>
                  <Select 
                    value={profileData.activityLevel} 
                    onValueChange={(value) => setProfileData({ ...profileData, activityLevel: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="very-active">Very Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smokingStatus">Smoking Status</Label>
                  <Select 
                    value={profileData.smokingStatus} 
                    onValueChange={(value) => setProfileData({ ...profileData, smokingStatus: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="former">Former</SelectItem>
                      <SelectItem value="current">Current</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alcoholConsumption">Alcohol Consumption</Label>
                  <Select 
                    value={profileData.alcoholConsumption} 
                    onValueChange={(value) => setProfileData({ ...profileData, alcoholConsumption: value })}
                  >
                    <SelectTrigger className="glass-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="occasional">Occasional</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="frequent">Frequent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Input
                    id="dietaryRestrictions"
                    value={profileData.dietaryRestrictions}
                    onChange={(e) => setProfileData({ ...profileData, dietaryRestrictions: e.target.value })}
                    className="glass-input"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-6">
              <Button 
                type="submit"
                className="flex-1 medical-gradient text-white gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => navigate("/profile")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfileEdit;
