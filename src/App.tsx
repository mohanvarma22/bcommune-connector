
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import JobPostings from "./pages/JobPostings";
import PostJobListing from "./pages/PostJobListing";
import Freelance from "./pages/Freelance";
import PostFreelanceProject from "./pages/PostFreelanceProject";
import CoreConnect from "./pages/CoreConnect";
import PostTeamListing from "./pages/PostTeamListing";
import B2BSpace from "./pages/B2BSpace";
import PostB2BProject from "./pages/PostB2BProject";
import CompanyProfile from "./pages/CompanyProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobPostings />} />
          <Route path="/jobs/post" element={<PostJobListing />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/freelance/post" element={<PostFreelanceProject />} />
          <Route path="/core-connect" element={<CoreConnect />} />
          <Route path="/core-connect/post" element={<PostTeamListing />} />
          <Route path="/b2b" element={<B2BSpace />} />
          <Route path="/b2b/post" element={<PostB2BProject />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/settings" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
