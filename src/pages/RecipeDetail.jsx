import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Flame, Heart, Star, Users, AlertTriangle } from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder recipe data
  const recipe = {
    title: "Grilled Salmon with Quinoa",
    image: "🍽️",
    description: "A heart-healthy, protein-rich meal perfect for maintaining cardiovascular health. This recipe is specially designed for individuals with diabetes and high blood pressure concerns.",
    calories: 450,
    time: "30 min",
    servings: 2,
    rating: 4.8,
    healthScore: 95,
    tags: ["Heart-Healthy", "Low-Sodium", "High-Protein", "Diabetic-Friendly"],
    nutrition: {
      protein: "38g",
      carbs: "42g",
      fat: "12g",
      fiber: "6g",
      sodium: "180mg",
      sugar: "3g"
    },
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 cup quinoa",
      "2 cups vegetable broth (low-sodium)",
      "2 tablespoons olive oil",
      "1 lemon",
      "2 cloves garlic, minced",
      "1 cup cherry tomatoes",
      "2 cups fresh spinach",
      "Fresh herbs (dill, parsley)",
      "Black pepper to taste"
    ],
    instructions: [
      "Rinse quinoa and cook in low-sodium vegetable broth according to package directions.",
      "While quinoa cooks, season salmon fillets with black pepper, garlic, and lemon juice.",
      "Heat olive oil in a grill pan over medium-high heat.",
      "Grill salmon for 4-5 minutes per side until cooked through.",
      "In the same pan, sauté cherry tomatoes until they start to burst.",
      "Add spinach and cook until just wilted.",
      "Fluff quinoa and mix with vegetables.",
      "Serve salmon over quinoa mixture, garnished with fresh herbs and lemon wedges."
    ],
    healthWarnings: [
      "Low in sodium - suitable for blood pressure management",
      "Rich in Omega-3 fatty acids for heart health",
      "Low glycemic index - diabetic-friendly",
      "High in protein for muscle maintenance"
    ],
    warnings: [
      "Contains fish - check for allergies",
      "If on blood thinners, consult doctor about fish consumption"
    ]
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/recipes")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center text-9xl">
                {recipe.image}
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{recipe.title}</h1>
                    <p className="text-muted-foreground">{recipe.description}</p>
                  </div>
                  <Badge className="bg-success text-white text-lg px-4 py-2">
                    {recipe.healthScore}% Match
                  </Badge>
                </div>

                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-primary" />
                    <span className="font-medium">{recipe.calories} calories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-warning text-warning" />
                    <span className="font-medium">{recipe.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Health Benefits */}
            <Card className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-success" />
                <h2 className="text-2xl font-semibold text-foreground">Health Benefits</h2>
              </div>
              <div className="space-y-3">
                {recipe.healthWarnings.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-success mt-2" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Important Warnings */}
            {recipe.warnings.length > 0 && (
              <Card className="glass-card p-6 border-l-4 border-l-warning">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                  <h2 className="text-2xl font-semibold text-foreground">Important Notes</h2>
                </div>
                <div className="space-y-2">
                  {recipe.warnings.map((warning, index) => (
                    <p key={index} className="text-muted-foreground">• {warning}</p>
                  ))}
                </div>
              </Card>
            )}

            {/* Ingredients */}
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ingredients</h2>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground">{ingredient}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Instructions */}
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Instructions</h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nutrition Facts</h3>
              <div className="space-y-3">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted-foreground capitalize">{key}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Actions</h3>
              <div className="space-y-3">
                <Button className="w-full medical-gradient text-white">
                  Add to Meal Plan
                </Button>
                <Button variant="outline" className="w-full">
                  Save Recipe
                </Button>
                <Button variant="outline" className="w-full">
                  Share Recipe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecipeDetail;
