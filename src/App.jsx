import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Programma from './pages/Programma';
import ComeVotare from './pages/ComeVotare';
import Partecipa from './pages/Partecipa';
import Candidato from './pages/Candidato';
import Notizie from './pages/Notizie';
import Eventi from './pages/Eventi';
import Contatti from './pages/Contatti';
import Layout from './components/layout/Layout';
// Add page imports here

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/programma" element={<Programma />} />
      <Route path="/come-votare" element={<ComeVotare />} />
      <Route path="/partecipa" element={<Partecipa />} />
      <Route path="/candidato" element={<Candidato />} />
      <Route path="/notizie" element={<Notizie />} />
      <Route path="/eventi" element={<Eventi />} />
      <Route path="/contatti" element={<Contatti />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App