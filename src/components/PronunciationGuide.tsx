
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pronunciationGuide } from "@/utils/pronunciationConverter";

const PronunciationGuide = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Guide de prononciation</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="voyelles" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="voyelles">Voyelles</TabsTrigger>
            <TabsTrigger value="voyelles-spec">Voyelles spécifiques</TabsTrigger>
            <TabsTrigger value="consonnes">Consonnes</TabsTrigger>
          </TabsList>
          
          {pronunciationGuide.map((category, index) => (
            <TabsContent key={index} value={category.category === "Voyelles" 
              ? "voyelles" 
              : category.category === "Voyelles spécifiques" 
                ? "voyelles-spec" 
                : "consonnes"
            }>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.rules.map((rule, ruleIndex) => (
                  <div key={ruleIndex} className="flex items-center p-2 border rounded-md">
                    <div className="text-lg font-bold w-8 h-8 flex items-center justify-center bg-slovene-light-blue rounded-full mr-2">
                      {rule.char}
                    </div>
                    <div className="text-sm">{rule.description}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PronunciationGuide;
