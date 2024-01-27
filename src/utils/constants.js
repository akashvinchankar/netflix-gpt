export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_LOGO = "https://avatars.githubusercontent.com/u/86399324?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English", displayName: "English" },
  { identifier: "ja", name: "Japanese", displayName: "日本語" },
  { identifier: "ko", name: "Korean", displayName: "한국어" },
  { identifier: "zh", name: "Chinese", displayName: "中文" },
  { identifier: "hi", name: "Hindi", displayName: "हिन्दी" },
  { identifier: "es", name: "Spanish", displayName: "Español" },
  { identifier: "fr", name: "French", displayName: "Français" },
  { identifier: "de", name: "German", displayName: "Deutsch" },
  { identifier: "it", name: "Italian", displayName: "Italiano" },
  { identifier: "ru", name: "Russian", displayName: "Русский" },
  { identifier: "pt", name: "Portuguese", displayName: "Português" },
  { identifier: "mr", name: "Marathi", displayName: "मराठी" },
  { identifier: "ta", name: "Tamil", displayName: "தமிழ்" },
  { identifier: "te", name: "Telugu", displayName: "తెలుగు" },
  { identifier: "ml", name: "Malayalam", displayName: "മലയാളം" },
];

// export const OPENAI_KEY = "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";
