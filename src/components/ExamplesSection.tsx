
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { examples } from "@/utils/pronunciationConverter";

interface ExamplesSectionProps {
  onSelectExample: (text: string) => void;
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({ onSelectExample }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Exemples pratiques</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className="p-3 border rounded-md hover:bg-slovene-light-blue/30 transition-colors cursor-pointer"
              onClick={() => onSelectExample(example.slovenian)}
            >
              <div className="font-medium text-slovene-blue">{example.slovenian}</div>
              <div className="text-sm text-slovene-red mt-1">{example.french}</div>
              <div className="mt-2 text-right">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectExample(example.slovenian);
                  }}
                >
                  Utiliser
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamplesSection;
