import Link from "next/link";
import React from "react";
import { SignedIn, SignIn, UserButton } from "@clerk/nextjs";
import {
  Home,
  Camera,
  WandSparkles,
  Trash2,
  Palette,
  User,
  Wallet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Image Restore",
    url: "/camera",
    icon: Camera,
  },
  {
    title: "Generative Fill",
    url: "#",
    icon: WandSparkles,
  },
  {
    title: "Object Remove",
    url: "#",
    icon: Trash2,
  },
  {
    title: "Object Recolor",
    url: "#",
    icon: Palette,
  },
  {
    title: "Background Remove",
    url: "#",
    icon: Camera,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
];

const AppSidebar = () => {
  return (
    <SignedIn>
    <Sidebar className="w-64 h-screen bg-white border-r px-4 py-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-blue-600 px-2 mb-6">
          🔷 IMAGINIFY
        </h1>
        <SidebarContent>
          <SidebarMenu className="space-y-2">
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <item.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-800">{item.title}</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>

      <div className="px-2">
        <Link href="#">
          <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-xl shadow hover:brightness-105 transition">
            <div className="flex items-center justify-center gap-2">
              <Wallet className="w-4 h-4" />
              Buy Credits
            </div>
          </button>
        </Link>
      </div>
      <div className="px-2">
        <Link href="#">
          <div className="flex items-center justify-center gap-2">
            <UserButton afterSwitchSessionUrl="/"></UserButton>
            <h1>IMAGINIFY</h1>
          </div>
        </Link>
      </div>
    </Sidebar>
    </SignedIn>
    
  );
};

export default AppSidebar;
