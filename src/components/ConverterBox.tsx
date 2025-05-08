
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, RefreshCw } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { convertToPronunciation } from "@/utils/pronunciationConverter";
import { useToast } from "@/components/ui/use-toast";

const ConverterBox = () => {
  const [slovenian, setSlovenian] = useState("");
  const [french, setFrench] = useState("");
  const { toast } = useToast();

  const handleConvert = () => {
    if (!slovenian.trim()) {
      toast({
        title: "Texte manquant",
        description: "Veuillez entrer du texte en slovène à convertir",
        variant: "destructive",
      });
      return;
    }
    
    const result = convertToPronunciation(slovenian);
    setFrench(result);
    
    toast({
      title: "Conversion réussie",
      description: "Le texte a été converti avec succès",
    });
  };

  const handleCopy = () => {
    if (!french) {
      toast({
        title: "Rien à copier",
        description: "Convertissez d'abord un texte pour le copier",
        variant: "destructive",
      });
      return;
    }
    
    navigator.clipboard.writeText(french);
    
    toast({
      title: "Texte copié",
      description: "La prononciation a été copiée dans le presse-papiers",
    });
  };

  const handleClear = () => {
    setSlovenian("");
    setFrench("");
    
    toast({
      title: "Champs effacés",
      description: "Les champs de texte ont été réinitialisés",
    });
  };

  return (
    <div className="w-full space-y-4">
      <Card className="border-slovene-blue/20">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="slovenian-text" className="text-sm font-medium text-slovene-blue">
                  Texte en slovène
                </label>
                <Button variant="ghost" size="sm" onClick={handleClear} className="h-6">
                  <RefreshCw className="h-3 w-3 mr-1" />
                  <span className="text-xs">Effacer</span>
                </Button>
              </div>
              <Textarea
                id="slovenian-text"
                placeholder="Entrez votre texte en slovène ici..."
                className="min-h-[120px] resize-y"
                value={slovenian}
                onChange={(e) => setSlovenian(e.target.value)}
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={handleConvert}
                className="bg-slovene-blue hover:bg-slovene-blue/80"
              >
                Convertir
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="french-pronunciation" className="text-sm font-medium text-slovene-red">
                  Prononciation en français
                </label>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleCopy} 
                  className="h-6" 
                  disabled={!french}
                >
                  <Copy className="h-3 w-3 mr-1" />
                  <span className="text-xs">Copier</span>
                </Button>
              </div>
              <Textarea
                id="french-pronunciation"
                placeholder="La prononciation française apparaîtra ici..."
                className="min-h-[120px] resize-y bg-slovene-light-red/30"
                value={french}
                readOnly
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConverterBox;
