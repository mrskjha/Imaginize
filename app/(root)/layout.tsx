import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
    <main className="root">
      <div className="sidebar">
        <div className="sidebar-content">
          <Sidebar />
        </div>
        <div className="root-container">
          <div className="warpper">{children}</div>
        </div>
      </div>
    </main>
    </SidebarProvider>
  );
};

export default layout;
