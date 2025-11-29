import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Clock, Flame, Heart, Search, Star } from "lucide-react";

const Recipes = () => {
  const navigate = useNavigate();

  const featuredRecipes = [
    {
      id: 1,
      title: "Grilled Salmon with Quinoa",
      image: "🍽️",
      calories: 450,
      time: "30 min",
      rating: 4.8,
      tags: ["Heart-Healthy", "Low-Sodium", "High-Protein"],
      healthScore: 95
    },
    {
      id: 2,
      title: "Vegetarian Buddha Bowl",
      image: "🥗",
      calories: 380,
      time: "25 min",
      rating: 4.6,
      tags: ["Vegetarian", "Diabetic-Friendly", "Fiber-Rich"],
      healthScore: 92
    },
    {
      id: 3,
      title: "Mediterranean Chicken Salad",
      image: "🥙",
      calories: 320,
      time: "20 min",
      rating: 4.9,
      tags: ["Low-Carb", "Heart-Safe", "Gluten-Free"],
      healthScore: 88
    },
    {
      id: 4,
      title: "Sweet Potato & Black Bean Tacos",
      image: "🌮",
      calories: 410,
      time: "35 min",
      rating: 4.7,
      tags: ["Vegan", "High-Fiber", "Low-Fat"],
      healthScore: 90
    },
    {
      id: 5,
      title: "Greek Yogurt Parfait",
      image: "🥄",
      calories: 280,
      time: "10 min",
      rating: 4.5,
      tags: ["High-Protein", "Low-Sugar", "Probiotic"],
      healthScore: 85
    },
    {
      id: 6,
      title: "Zucchini Noodles with Pesto",
      image: "🍝",
      calories: 250,
      time: "15 min",
      rating: 4.4,
      tags: ["Low-Carb", "Vegetarian", "Keto-Friendly"],
      healthScore: 87
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Recipe Recommendations</h1>
            <p className="text-muted-foreground text-lg">Personalized recipes based on your health profile</p>
          </div>
          <Button 
            className="medical-gradient text-white gap-2"
            onClick={() => navigate("/recipes/search")}
          >
            <Search className="h-4 w-4" />
            Search Recipes
          </Button>
        </div>

        {/* Health Alerts */}
        <Card className="glass-card p-6 border-l-4 border-l-accent">
          <div className="flex items-start gap-3">
            <Heart className="h-6 w-6 text-accent mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Personalized Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Based on your profile, we're showing low-sodium, diabetic-friendly recipes. All recipes avoid your listed allergens.
              </p>
            </div>
          </div>
        </Card>

        {/* Featured Recipes */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Today's Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Card 
                key={recipe.id}
                className="glass-card overflow-hidden hover-lift smooth-transition cursor-pointer"
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              >
                <div className="h-48 bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center text-7xl">
                  {recipe.image}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg text-foreground">{recipe.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={`${
                        recipe.healthScore >= 90 
                          ? 'border-success text-success' 
                          : 'border-primary text-primary'
                      }`}
                    >
                      {recipe.healthScore}%
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4" />
                      <span>{recipe.calories} cal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Recipes;
