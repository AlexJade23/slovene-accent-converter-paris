type PronunciationRule = {
  pattern: RegExp;
  replacement: string;
};

// L'ordre des règles est important: d'abord les digraphes, 
// puis les caractères spéciaux, enfin les caractères normaux
const rules: PronunciationRule[] = [
  // Specific digraphs (must come before single characters)
  { pattern: /lj/g, replacement: "li" },
  { pattern: /nj/g, replacement: "gn" },
  
  // Special characters - ordre important
  { pattern: /č/g, replacement: "tch" },
  { pattern: /š/g, replacement: "ch" },
  { pattern: /ž/g, replacement: "j" },
  { pattern: /j/g, replacement: "y" },
  { pattern: /c/g, replacement: "ts" },
  
  // Vowels with diacritics
  { pattern: /é/g, replacement: "é" },
  { pattern: /ê/g, replacement: "è" },
  { pattern: /ô/g, replacement: "ô" },
  
  // Regular vowels that need conversion
  { pattern: /u/g, replacement: "ou" },
  
  // Other consonants with specific pronunciation
  { pattern: /r/g, replacement: "r" },
  { pattern: /v/g, replacement: "v" }
];

export const convertToPronunciation = (text: string): string => {
  let result = text;
  
  // Appliquer chaque règle pour transformer le texte
  rules.forEach(rule => {
    result = result.replace(rule.pattern, rule.replacement);
  });
  
  // Débogage pour vérifier les conversions
  console.log("Texte original:", text);
  console.log("Texte converti:", result);
  
  return result;
};

// Example pronunciations for reference
export const examples = [
  { slovenian: "Ljubljana", french: "Lioubliana" },
  { slovenian: "Škofja Loka", french: "Chkof-ya Loka" },
  { slovenian: "Postojna", french: "Pos-toy-na" },
  { slovenian: "Ptuj", french: "P-touy" },
  { slovenian: "Piran", french: "Pi-ran" },
  { slovenian: "Koper", french: "Ko-pèr" },
  { slovenian: "Maribor", french: "Ma-ri-bor" },
  { slovenian: "Bled", french: "Blèd" },
  { slovenian: "Dober dan", french: "Do-ber dan" },
  { slovenian: "Hvala", french: "Hva-la" },
  { slovenian: "Prosim", french: "Pro-sim" },
  { slovenian: "Kmetija", french: "K-mé-ti-ya" },
  { slovenian: "Kolesar", french: "Ko-lé-sar" },
  { slovenian: "Saša", french: "Sacha" }, // Ajout de cet exemple pour démontrer la correction
  { slovenian: "Kočar", french: "Kotchar" } // Nouvel exemple pour démontrer la correction de č
];

// Pronunciation guide for reference
export const pronunciationGuide = [
  { category: "Voyelles", rules: [
    { char: "a", description: "comme en français" },
    { char: "e", description: "comme dans \"été\"" },
    { char: "i", description: "comme en français" },
    { char: "o", description: "comme en français" },
    { char: "u", description: "comme \"ou\" en français" },
    { char: "ə", description: "comme le \"e\" muet français" }
  ]},
  { category: "Voyelles spécifiques", rules: [
    { char: "é", description: "\"e\" long" },
    { char: "ê", description: "\"e\" avec intonation descendante" },
    { char: "ô", description: "\"o\" avec intonation descendante" }
  ]},
  { category: "Consonnes particulières", rules: [
    { char: "č", description: "\"tch\" comme dans \"tchèque\"" },
    { char: "š", description: "\"ch\" comme dans \"chat\"" },
    { char: "ž", description: "\"j\" comme dans \"journal\"" },
    { char: "j", description: "\"y\" comme dans \"yoga\"" },
    { char: "c", description: "\"ts\" comme dans \"tsé-tsé\"" },
    { char: "h", description: "aspiré comme en allemand" },
    { char: "l", description: "comme en français" },
    { char: "lj", description: "\"li\" comme dans \"million\"" },
    { char: "nj", description: "\"gn\" comme dans \"agneau\"" },
    { char: "r", description: "roulé comme en italien" },
    { char: "v", description: "entre \"v\" et \"w\" anglais" }
  ]}
];

// Fonction de test pour vérifier les conversions spécifiques
export const testConversions = () => {
  const testCases = [
    { input: "Saša", expected: "Sacha" },
    { input: "Kočar", expected: "Kotchar" },
    { input: "Ljubljana", expected: "Lioubliana" }
  ];
  
  testCases.forEach(test => {
    const result = convertToPronunciation(test.input);
    console.log(`Test: ${test.input} => ${result} (attendu: ${test.expected})`);
    console.log(`Résultat correct: ${result === test.expected ? "Oui" : "Non"}`);
  });
};
