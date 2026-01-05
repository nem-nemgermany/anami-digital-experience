import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UeberUns from "./pages/UeberUns";
import Speisekarte from "./pages/Speisekarte";
import Galerie from "./pages/Galerie";
import Kontakt from "./pages/Kontakt";
import Reservierung from "./pages/Reservierung";
import Takeaway from "./pages/Takeaway";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/reservierung" element={<Reservierung />} />
          <Route path="/takeaway" element={<Takeaway />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
