import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, Download, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const Partecipa = () => {
  const [reportForm, setReportForm] = useState({ name: '', email: '', subject: '', description: '' });

  const materialItems = [
    { label: 'Volantino Ufficiale', href: '/cv/Volantino-Ufficiale.pdf' },
    { label: 'Banner Social Media', href: '/cv/Banner-Social-Media.pdf' },
    { label: 'Locandina A3', href: '/cv/Locandina-A3.pdf' },
    { label: 'Kit Grafico Completo', href: '/cv/Kit-Grafico-Completo.zip' },
  ];

  const handleReportSubmit = (e) => {
    e.preventDefault();
    toast.success('Segnalazione inviata con successo. Grazie!');
    setReportForm({ name: '', email: '', subject: '', description: '' });
  };

  return (
    <div className="py-10 lg:py-12 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Partecipa</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Il tuo contributo è fondamentale. Segnala un problema, scarica materiale per la stampa o scrivici se vuoi collaborare.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-primary/20 bg-primary/5 p-4 text-slate-900">
          <p className="text-lg font-semibold text-slate-900">Vuoi contribuire in modo più attivo?</p>
          <p className="mt-2 text-slate-700">Scrivici direttamente per proporre idee, iniziative o collaborazioni.</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link to="/contatti">Contattaci</Link>
          </Button>
        </div>

        <Tabs defaultValue="segnala" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="segnala">Segnala</TabsTrigger>
            <TabsTrigger value="materiali">Materiali</TabsTrigger>
          </TabsList>

          <TabsContent value="segnala">
              <Card className="border border-slate-200 bg-white shadow-sm shadow-slate-200/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900"><AlertTriangle className="w-5 h-5 text-primary" /> Segnala un Problema</CardTitle>
                <CardDescription className="text-slate-600">Aiutaci a conoscere i problemi del tuo quartiere.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReportSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="r-name">Nome e Cognome</Label><Input id="r-name" value={reportForm.name} onChange={(e) => setReportForm({ ...reportForm, name: e.target.value })} required /></div>
                    <div><Label htmlFor="r-email">Email</Label><Input id="r-email" type="email" value={reportForm.email} onChange={(e) => setReportForm({ ...reportForm, email: e.target.value })} required /></div>
                  </div>
                  <div><Label htmlFor="r-subject">Oggetto</Label><Input id="r-subject" value={reportForm.subject} onChange={(e) => setReportForm({ ...reportForm, subject: e.target.value })} required /></div>
                  <div><Label htmlFor="r-desc">Descrizione del Problema</Label><Textarea id="r-desc" value={reportForm.description} onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })} required /></div>
                  <Button type="submit" className="w-full"><Send className="mr-2 h-4 w-4" />Invia Segnalazione</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materiali">
            <Card className="border border-slate-200 bg-white shadow-sm shadow-slate-200/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900"><Download className="w-5 h-5 text-primary" /> Scarica Materiali</CardTitle>
                <CardDescription className="text-slate-600">Scarica volantini, banner e contenuti per i social media.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materialItems.map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50">
                      <span className="font-medium text-slate-900">{item.label}</span>
                      <Button asChild variant="outline" size="sm">
                        <a href={item.href} download>
                          <Download className="mr-2 h-4 w-4" /> Scarica
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Partecipa;