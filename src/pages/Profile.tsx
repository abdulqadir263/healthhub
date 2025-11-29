import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { Edit, User, Heart, Activity, Calendar } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const profileData = {
    personalInfo: {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 32,
      gender: "Male",
      bloodType: "A+"
    },
    measurements: {
      height: "175 cm",
      weight: "73.2 kg",
      bmi: "23.1",
      bloodPressure: "120/80"
    },
    medical: {
      diabetes: "Pre-diabetic",
      heartConditions: "None",
      allergies: "Shellfish, Peanuts",
      medications: "Metformin 500mg"
    },
    lifestyle: {
      activityLevel: "Moderate (3-5 days/week)",
      smokingStatus: "Never",
      alcoholConsumption: "Occasional",
      dietaryRestrictions: "Vegetarian"
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Health Profile</h1>
            <p className="text-muted-foreground text-lg">Your personal health information and medical history</p>
          </div>
          <Button 
            className="medical-gradient text-white gap-2"
            onClick={() => navigate("/profile/edit")}
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Profile Header Card */}
        <Card className="glass-card p-8">
          <div className="flex items-start gap-6">
            <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-2">{profileData.personalInfo.name}</h2>
              <p className="text-muted-foreground mb-4">{profileData.personalInfo.email}</p>
              <div className="flex gap-3">
                <Badge variant="outline" className="text-sm">
                  {profileData.personalInfo.age} years
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {profileData.personalInfo.gender}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Blood Type: {profileData.personalInfo.bloodType}
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Physical Measurements */}
          <Card className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Physical Measurements</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Height</p>
                <p className="text-xl font-semibold text-foreground">{profileData.measurements.height}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Weight</p>
                <p className="text-xl font-semibold text-foreground">{profileData.measurements.weight}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">BMI</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-foreground">{profileData.measurements.bmi}</p>
                  <Badge className="bg-success text-white">Normal</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Blood Pressure</p>
                <p className="text-xl font-semibold text-foreground">{profileData.measurements.bloodPressure}</p>
              </div>
            </div>
          </Card>

          {/* Medical History */}
          <Card className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-destructive" />
              <h3 className="text-2xl font-semibold text-foreground">Medical History</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Diabetes Status</p>
                <Badge variant="outline" className="text-warning border-warning">
                  {profileData.medical.diabetes}
                </Badge>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Heart Conditions</p>
                <p className="text-foreground">{profileData.medical.heartConditions}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Allergies</p>
                <p className="text-foreground">{profileData.medical.allergies}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Medications</p>
                <p className="text-foreground">{profileData.medical.medications}</p>
              </div>
            </div>
          </Card>

          {/* Lifestyle Information */}
          <Card className="glass-card p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold text-foreground">Lifestyle Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Activity Level</p>
                <p className="text-lg font-medium text-foreground">{profileData.lifestyle.activityLevel}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Smoking Status</p>
                <p className="text-lg font-medium text-foreground">{profileData.lifestyle.smokingStatus}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Alcohol Consumption</p>
                <p className="text-lg font-medium text-foreground">{profileData.lifestyle.alcoholConsumption}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Dietary Restrictions</p>
                <p className="text-lg font-medium text-foreground">{profileData.lifestyle.dietaryRestrictions}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col gap-2 hover:bg-primary hover:text-white"
              onClick={() => navigate("/profile/edit")}
            >
              <Edit className="h-5 w-5" />
              <span>Edit Profile</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col gap-2 hover:bg-primary hover:text-white"
              onClick={() => navigate("/progress")}
            >
              <Activity className="h-5 w-5" />
              <span>View Progress</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col gap-2 hover:bg-primary hover:text-white"
              onClick={() => navigate("/lab-reports")}
            >
              <Heart className="h-5 w-5" />
              <span>Lab Reports</span>
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
