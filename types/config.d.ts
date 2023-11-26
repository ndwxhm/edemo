export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  ossUrl: string;
  tokenKey: string;
  origin: string;
  login: string;
  host: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
  VITE_GLOB_OSS_URL: string;
  VITE_GLOB_TOKENKEY: string;
  VITE_GLOB_ORIGIN: string;
  VITE_GLOB_HOST: string;
  VITE_GLOB_LOGIN: string;
}