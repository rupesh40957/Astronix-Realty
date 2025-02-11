import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/components/admin/not-found";
import Dashboard from "@/components/admin/dashboard";
import Properties from "@/components/admin/properties";
import PropertyForm from "@/components/admin/property-form";
import Leads from "@/components/admin/leads";
import Blogs from "@/components/admin/blogs";
import BlogForm from "@/components/admin/blog-form";


function Router() {
  return (
    <>
    <Dashboard />
    <Properties />
    <PropertyForm />
    <PropertyForm mode="edit" />
    <BlogForm />
    <Blogs />
    <Leads />
    <NotFound />
    </>
  );
}
 