
import React, { useState } from "react";
import ConverterHeader from "@/components/ConverterHeader";
import ConverterBox from "@/components/ConverterBox";
import PronunciationGuide from "@/components/PronunciationGuide";
import ExamplesSection from "@/components/ExamplesSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [slovenianText, setSlovenianText] = useState("");
  const converterRef = React.useRef<HTMLDivElement>(null);

  const handleSelectExample = (example: string) => {
    setSlovenianText(example);
    if (converterRef.current) {
      const textareaElement = converterRef.current.querySelector(
        "#slovenian-text"
      ) as HTMLTextAreaElement;
      if (textareaElement) {
        textareaElement.value = example;
        textareaElement.focus();
        // Trigger change event to update state in the child component
        const event = new Event("input", { bubbles: true });
        textareaElement.dispatchEvent(event);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slovene-light-blue/20">
      <div className="container py-8 px-4 md:px-6">
        <ConverterHeader />

        <div className="max-w-4xl mx-auto">
          <div ref={converterRef} className="mb-8">
            <ConverterBox />
          </div>

          <Tabs defaultValue="examples" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="examples">Exemples</TabsTrigger>
              <TabsTrigger value="guide">Guide de prononciation</TabsTrigger>
            </TabsList>

            <TabsContent value="examples" className="mt-4">
              <ExamplesSection onSelectExample={handleSelectExample} />
            </TabsContent>

            <TabsContent value="guide" className="mt-4">
              <PronunciationGuide />
            </TabsContent>
          </Tabs>

          <footer className="text-center text-sm text-muted-foreground mt-8">
            <p>
              Convertisseur de prononciation slovène-français
              <span className="mx-2">•</span>
              Créé avec ❤️ pour les voyageurs
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
