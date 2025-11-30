import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, AlertTriangle, CheckCircle, FileText, TrendingUp } from "lucide-react";

const LabReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const report = {
    name: "Complete Blood Count (CBC)",
    date: "Jan 15, 2024",
    status: "Reviewed",
    testType: "Blood Test",
    findings: [
      { parameter: "Hemoglobin", value: "14.5 g/dL", range: "13.5-17.5 g/dL", status: "normal" },
      { parameter: "White Blood Cells", value: "7,200 /μL", range: "4,500-11,000 /μL", status: "normal" },
      { parameter: "Platelets", value: "250,000 /μL", range: "150,000-400,000 /μL", status: "normal" },
      { parameter: "Red Blood Cells", value: "5.0 million/μL", range: "4.5-5.5 million/μL", status: "normal" },
    ],
    analysis: {
      summary: "Your Complete Blood Count results are within normal ranges, indicating healthy blood cell production and function.",
      keyFindings: [
        "All blood cell counts are within optimal ranges",
        "No signs of anemia or infection",
        "Healthy platelet count for normal blood clotting",
        "Red blood cell count indicates good oxygen-carrying capacity"
      ],
      concerns: []
    },
    recommendations: [
      "Continue maintaining your current balanced diet rich in iron and vitamins",
      "Stay hydrated with 8-10 glasses of water daily",
      "Regular exercise supports healthy blood circulation",
      "Schedule next CBC test in 6 months for routine monitoring"
    ],
    dietarySuggestions: [
      "Iron-rich foods: Lean meats, spinach, lentils, fortified cereals",
      "Vitamin B12: Eggs, dairy products, fish, nutritional yeast",
      "Folate: Leafy greens, beans, citrus fruits, avocados",
      "Vitamin C: Bell peppers, oranges, strawberries (helps iron absorption)"
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
        return "text-success";
      case "warning":
        return "text-warning";
      case "alert":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/lab-reports")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Button>

        {/* Report Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{report.name}</h1>
            <p className="text-muted-foreground text-lg">{report.date}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Badge className="bg-success text-white h-10 px-4 text-base">
              All Normal
            </Badge>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <Card className="glass-card p-6 border-l-4 border-l-success">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-success to-green-500 shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Analysis Summary</h3>
              <p className="text-muted-foreground">{report.analysis.summary}</p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Test Results */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Test Results</h2>
              <div className="space-y-4">
                {report.findings.map((finding, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${getStatusColor(finding.status)}`} />
                        <span className="font-semibold text-foreground">{finding.parameter}</span>
                      </div>
                      <Badge variant="outline" className={getStatusColor(finding.status)}>
                        {finding.status === 'normal' ? 'Normal' : finding.status === 'warning' ? 'Caution' : 'Alert'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm ml-8">
                      <span className="text-muted-foreground">Your Value:</span>
                      <span className="font-medium text-foreground">{finding.value}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm ml-8">
                      <span className="text-muted-foreground">Normal Range:</span>
                      <span className="text-muted-foreground">{finding.range}</span>
                    </div>
                    {index < report.findings.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Key Findings */}
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Key Findings</h2>
              <div className="space-y-3">
                {report.analysis.keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <p className="text-foreground">{finding}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Dietary Suggestions */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold text-foreground">Dietary Suggestions</h2>
              </div>
              <div className="space-y-3">
                {report.dietarySuggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                    <p className="text-foreground">{suggestion}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Report Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Test Type</p>
                  <p className="font-medium text-foreground">{report.testType}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Test Date</p>
                  <p className="font-medium text-foreground">{report.date}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-medium text-foreground">{report.status}</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recommendations</h3>
              <div className="space-y-3">
                {report.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <p className="text-sm text-muted-foreground">{rec}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full medical-gradient text-white"
                  onClick={() => navigate("/recipes")}
                >
                  View Recommended Recipes
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/diet-plans/create")}
                >
                  Create Diet Plan
                </Button>
                <Button variant="outline" className="w-full">
                  Share with Doctor
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LabReportDetail;
