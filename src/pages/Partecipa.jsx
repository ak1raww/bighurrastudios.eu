import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, UserPlus, Download, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const Partecipa = () => {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [reportForm, setReportForm] = useState({ name: '', email: '', subject: '', description: '' });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    toast.success('Grazie per la tua candidatura! Ti contatteremo presto.');
    setVolunteerForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    toast.success('Segnalazione inviata con successo. Grazie!');
    setReportForm({ name: '', email: '', subject: '', description: '' });
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Partecipa</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Il tuo contributo è fondamentale. Diventa volontario, segnala un problema o scarica i materiali della campagna.
          </p>
        </div>

        <Tabs defaultValue="volontario" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="volontario">Volontario</TabsTrigger>
            <TabsTrigger value="segnala">Segnala</TabsTrigger>
            <TabsTrigger value="materiali">Materiali</TabsTrigger>
          </TabsList>

          <TabsContent value="volontario">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><UserPlus className="w-5 h-5" /> Diventa Volontario</CardTitle>
                <CardDescription>Compila il form per unirti al nostro team di volontari.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="v-name">Nome e Cognome</Label><Input id="v-name" value={volunteerForm.name} onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })} required /></div>
                    <div><Label htmlFor="v-email">Email</Label><Input id="v-email" type="email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })} required /></div>
                  </div>
                  <div><Label htmlFor="v-phone">Telefono</Label><Input id="v-phone" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })} /></div>
                  <div><Label htmlFor="v-message">Come vorresti contribuire?</Label><Textarea id="v-message" value={volunteerForm.message} onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })} /></div>
                  <Button type="submit" className="w-full"><Send className="mr-2 h-4 w-4" />Invia Candidatura</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segnala">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Segnala un Problema</CardTitle>
                <CardDescription>Aiutaci a conoscere i problemi del tuo quartiere.</CardDescription>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Download className="w-5 h-5" /> Scarica Materiali</CardTitle>
                <CardDescription>Scarica volantini, banner e contenuti per i social media.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Volantino Ufficiale', 'Banner Social Media', 'Locandina A3', 'Kit Grafico Completo'].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="font-medium">{item}</span>
                      <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Scarica</Button>
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