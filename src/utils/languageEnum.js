const LanguageEnum = {
  en: "English",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  hi: "Hindi",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  ru: "Russian",
  pt: "Portuguese",
  tl: "Tagalog",

  // helper function to get the name of the language
  getName: function (code) {
    return this[code] || code;
  },
};

export default LanguageEnum;
