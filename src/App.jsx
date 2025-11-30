import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import Recipes from "./pages/Recipes";
import RecipeSearch from "./pages/RecipeSearch";
import RecipeDetail from "./pages/RecipeDetail";
import DietPlans from "./pages/DietPlans";
import CreateDietPlan from "./pages/CreateDietPlan";
import DietPlanDetail from "./pages/DietPlanDetail";
import Progress from "./pages/Progress";
import ProgressLog from "./pages/ProgressLog";
import LabReports from "./pages/LabReports";
import LabReportUpload from "./pages/LabReportUpload";
import LabReportDetail from "./pages/LabReportDetail";
import AIDoctor from "./pages/AIDoctor";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import { testGeminiAPI } from "./utils/testGemini";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Test Gemini API on app load
  useEffect(() => {
    testGeminiAPI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile-setup" element={<ProfileSetup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/search" element={<RecipeSearch />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
              <Route path="/diet-plans" element={<DietPlans />} />
              <Route path="/diet-plans/create" element={<CreateDietPlan />} />
              <Route path="/diet-plans/:id" element={<DietPlanDetail />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/progress/log" element={<ProgressLog />} />
              <Route path="/lab-reports" element={<LabReports />} />
              <Route path="/lab-reports/upload" element={<LabReportUpload />} />
              <Route path="/lab-reports/:id" element={<LabReportDetail />} />
              <Route path="/ai-doctor" element={<AIDoctor />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
