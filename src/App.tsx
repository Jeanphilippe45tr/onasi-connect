/**
 * App.tsx - Routage principal du site ONASI
 * Toutes les pages sont enveloppées dans le Layout (Header + Footer).
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import APropos from "./pages/APropos";
import Equipe from "./pages/Equipe";
import Formations from "./pages/Formations";
import Actualites from "./pages/Actualites";
import Evenements from "./pages/Evenements";
import Inscription from "./pages/Inscription";
import Contact from "./pages/Contact";
import ReglementInterieur from "./pages/ReglementInterieur";
<<<<<<< HEAD
import Certificats from "./pages/Certificats";
=======
>>>>>>> 0485df8c925956e933ef2171290045b2058e2558
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/reglement-interieur" element={<ReglementInterieur />} />
<<<<<<< HEAD
            <Route path="/certificats" element={<Certificats />} />
=======
>>>>>>> 0485df8c925956e933ef2171290045b2058e2558
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
