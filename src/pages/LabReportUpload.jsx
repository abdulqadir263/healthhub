import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, FileText, Sparkles } from "lucide-react";
import LoadingSpinner from "@/components/LoadingSpinner";

const LabReportUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [file, setFile] = useState(null);
  const [reportData, setReportData] = useState({
    testName: "",
    testDate: "",
    notes: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      toast({
        title: "Report Analyzed!",
        description: "Your lab report has been processed successfully.",
      });
      navigate("/lab-reports/1");
    }, 2500);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/lab-reports")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Button>

        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Upload Lab Report</h1>
          <p className="text-muted-foreground text-lg">Upload your report for AI-powered analysis</p>
        </div>

        <Card className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file">Report File (PDF or Image)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary smooth-transition">
                <input
                  id="file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="file" className="cursor-pointer">
                  {file ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-foreground font-medium mb-1">Click to upload</p>
                      <p className="text-sm text-muted-foreground">PDF, JPG, PNG (Max 10MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="testName">Test Name</Label>
                <Input
                  id="testName"
                  placeholder="e.g., Complete Blood Count"
                  value={reportData.testName}
                  onChange={(e) => setReportData({ ...reportData, testName: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testDate">Test Date</Label>
                <Input
                  id="testDate"
                  type="date"
                  value={reportData.testDate}
                  onChange={(e) => setReportData({ ...reportData, testDate: e.target.value })}
                  className="glass-input"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any symptoms, concerns, or context about this test..."
                value={reportData.notes}
                onChange={(e) => setReportData({ ...reportData, notes: e.target.value })}
                className="glass-input min-h-[100px]"
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-12 medical-gradient text-white gap-2"
              disabled={!file || isAnalyzing}
            >
              {isAnalyzing ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Analyze Report with AI
                </>
              )}
            </Button>
          </form>
        </Card>

        <Card className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Our AI will analyze your lab report in seconds</li>
            <li>• You'll receive detailed explanations of key findings</li>
            <li>• Get personalized dietary recommendations based on results</li>
            <li>• View health risk assessments and areas of concern</li>
            <li>• Receive suggestions for follow-up tests if needed</li>
          </ul>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LabReportUpload;
