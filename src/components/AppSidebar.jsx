import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Apple, 
  TrendingUp, 
  FileText, 
  MessageSquare,
  User,
  LogOut
} from "lucide-react";
import { NavLink } from "./NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Recipes", url: "/recipes", icon: UtensilsCrossed },
  { title: "Diet Plans", url: "/diet-plans", icon: Apple },
  { title: "Progress", url: "/progress", icon: TrendingUp },
  { title: "Lab Reports", url: "/lab-reports", icon: FileText },
  { title: "AI Doctor", url: "/ai-doctor", icon: MessageSquare },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      navigate("/login");
    } catch (error) {
      console.error('Logout error:', error);
      // Still navigate to login on error
      navigate("/login");
    }
  };

  return (
    <Sidebar className={`${!open ? "w-16" : "w-64"} smooth-transition border-r border-border`}>
      <SidebarContent className="bg-sidebar">
        <div className={`p-4 border-b border-sidebar-border ${!open ? 'px-2' : ''}`}>
          <div className="flex items-center gap-3">
            {open && (
              <>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">H+</span>
                </div>
                <div>
                  <h2 className="font-bold text-sidebar-foreground">HealthHub</h2>
                  <p className="text-xs text-muted-foreground">Medical Platform</p>
                </div>
              </>
            )}
            {!open && (
              <div className="h-10 w-10 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">H+</span>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={!open ? 'sr-only' : ''}>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent smooth-transition"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink 
                  to="/profile" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent smooth-transition"
                  activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                >
                  <User className="h-5 w-5" />
                  {open && <span>Profile</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-3 px-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                {open && <span>Logout</span>}
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
