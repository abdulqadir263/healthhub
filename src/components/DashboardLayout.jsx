import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10 flex items-center px-6 gap-4">
            <SidebarTrigger />
            <div className="flex items-center justify-between flex-1">
              <h1 className="text-lg font-semibold text-foreground">Health Management Platform</h1>
            </div>
          </header>
          <main className="flex-1 p-6 animate-fade-in">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
