
import React from "react";

const ConverterHeader = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        <span className="slovene-accent">Slovène</span>
        {" → "}
        <span className="french-accent">Français</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-4">
        Convertisseur de prononciation pour voyageurs francophones
      </p>
      <div className="flex items-center justify-center space-x-4">
        <div className="w-6 h-4 bg-slovene-blue"></div>
        <div className="w-6 h-4 bg-slovene-white border border-gray-200"></div>
        <div className="w-6 h-4 bg-slovene-red"></div>
      </div>
    </div>
  );
};

export default ConverterHeader;
