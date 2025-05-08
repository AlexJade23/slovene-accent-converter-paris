
type PronunciationRule = {
  pattern: RegExp | string;
  replacement: string;
};

// Dictionnaire de conversion pour les caractères et digraphes spéciaux
const specialCharacters: Record<string, string> = {
  'č': 'tch',
  'š': 'ch',
  'ž': 'j',
  'lj': 'li',
  'nj': 'gn'
};

// Dictionnaire de conversion pour les autres caractères
const regularCharacters: Record<string, string> = {
  'j': 'y',
  'c': 'ts',
  'u': 'ou',
  'é': 'é',
  'ê': 'è',
  'ô': 'ô'
};

export const convertToPronunciation = (text: string): string => {
  let result = '';
  let i = 0;

  // Parcourir le texte caractère par caractère
  while (i < text.length) {
    // Vérifier d'abord les digraphes (2 caractères)
    if (i < text.length - 1) {
      const digraph = text.substring(i, i + 2);
      if (specialCharacters[digraph]) {
        result += specialCharacters[digraph];
        i += 2;
        continue;
      }
    }

    // Ensuite, vérifier les caractères spéciaux
    const char = text[i];
    if (specialCharacters[char]) {
      result += specialCharacters[char];
    } 
    // Enfin, vérifier les caractères réguliers
    else if (regularCharacters[char]) {
      result += regularCharacters[char];
    } 
    // Sinon, conserver le caractère original
    else {
      result += char;
    }
    
    i++;
  }

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
  { slovenian: "Saša", french: "Sacha" },
  { slovenian: "Kočar", french: "Kotchar" }
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
