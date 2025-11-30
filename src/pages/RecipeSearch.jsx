import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";

const RecipeSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const dietaryFilters = [
    "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free",
    "Low-Carb", "Keto", "Paleo", "Low-Sodium"
  ];

  const healthFilters = [
    "Diabetic-Friendly", "Heart-Healthy", "Low-Cholesterol",
    "High-Protein", "Low-Fat", "High-Fiber"
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Search Recipes</h1>
          <p className="text-muted-foreground text-lg">Find the perfect recipe based on your ingredients and preferences</p>
        </div>

        <Card className="glass-card p-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="search" className="text-lg mb-3 block">Enter your available ingredients</Label>
              <div className="flex gap-3">
                <Input
                  id="search"
                  placeholder="e.g., chicken, tomatoes, spinach..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="glass-input h-12 flex-1"
                />
                <Button className="medical-gradient text-white gap-2 h-12 px-8">
                  <Search className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Dietary Preferences
                </h3>
                <div className="space-y-3">
                  {dietaryFilters.map((filter) => (
                    <div key={filter} className="flex items-center gap-2">
                      <Checkbox 
                        id={filter}
                        checked={selectedFilters.includes(filter)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedFilters([...selectedFilters, filter]);
                          } else {
                            setSelectedFilters(selectedFilters.filter(f => f !== filter));
                          }
                        }}
                      />
                      <Label htmlFor={filter} className="cursor-pointer">{filter}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-accent" />
                  Health Considerations
                </h3>
                <div className="space-y-3">
                  {healthFilters.map((filter) => (
                    <div key={filter} className="flex items-center gap-2">
                      <Checkbox 
                        id={filter}
                        checked={selectedFilters.includes(filter)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedFilters([...selectedFilters, filter]);
                          } else {
                            setSelectedFilters(selectedFilters.filter(f => f !== filter));
                          }
                        }}
                      />
                      <Label htmlFor={filter} className="cursor-pointer">{filter}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedFilters.length > 0 && (
              <div>
                <p className="text-sm text-muted-foreground mb-2">Active filters:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.map((filter) => (
                    <Badge 
                      key={filter}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-white"
                      onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))}
                    >
                      {filter} ×
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Suggestions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <span className="text-3xl">🥗</span>
              <span className="text-sm">Salads</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <span className="text-3xl">🍲</span>
              <span className="text-sm">Soups</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <span className="text-3xl">🍗</span>
              <span className="text-sm">Protein</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <span className="text-3xl">🥦</span>
              <span className="text-sm">Vegetables</span>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecipeSearch;
