import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, Calendar, AlertCircle } from "lucide-react";

const LabReports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      date: "Jan 15, 2024",
      status: "Reviewed",
      findings: "Normal",
      riskLevel: "low"
    },
    {
      id: 2,
      name: "Lipid Profile",
      date: "Jan 10, 2024",
      status: "Reviewed",
      findings: "Slightly Elevated Cholesterol",
      riskLevel: "medium"
    },
    {
      id: 3,
      name: "Blood Glucose Test",
      date: "Jan 5, 2024",
      status: "Reviewed",
      findings: "Pre-diabetic Range",
      riskLevel: "medium"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-success text-white";
      case "medium":
        return "bg-warning text-white";
      case "high":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Lab Reports</h1>
            <p className="text-muted-foreground text-lg">Upload and analyze your medical reports with AI</p>
          </div>
          <Button 
            className="medical-gradient text-white gap-2"
            onClick={() => navigate("/lab-reports/upload")}
          >
            <Upload className="h-4 w-4" />
            Upload Report
          </Button>
        </div>

        {/* Important Notice */}
        <Card className="glass-card p-6 border-l-4 border-l-accent">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-accent mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">AI-Powered Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI assistant analyzes your lab reports and provides personalized dietary recommendations. Always consult your healthcare provider for medical advice.
              </p>
            </div>
          </div>
        </Card>

        {/* Reports Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Your Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <Card 
                key={report.id}
                className="glass-card p-6 hover-lift smooth-transition cursor-pointer"
                onClick={() => navigate(`/lab-reports/${report.id}`)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={getRiskColor(report.riskLevel)}>
                    {report.riskLevel === 'low' ? 'Normal' : report.riskLevel === 'medium' ? 'Caution' : 'Alert'}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{report.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{report.findings}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{report.date}</span>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View Analysis
                </Button>
              </Card>
            ))}

            {/* Upload New Card */}
            <Card 
              className="glass-card p-6 border-2 border-dashed border-primary/30 hover-lift smooth-transition cursor-pointer flex items-center justify-center"
              onClick={() => navigate("/lab-reports/upload")}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Upload New Report</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered analysis and recommendations
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">What We Analyze</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Biomarkers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Blood glucose levels and HbA1c</li>
                <li>• Cholesterol (LDL, HDL, triglycerides)</li>
                <li>• Blood pressure indicators</li>
                <li>• Vitamin and mineral deficiencies</li>
                <li>• Liver and kidney function markers</li>
              </ul>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Personalized Recommendations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dietary adjustments based on results</li>
                <li>• Foods to increase or avoid</li>
                <li>• Supplement recommendations</li>
                <li>• Lifestyle modification suggestions</li>
                <li>• Follow-up test reminders</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LabReports;
