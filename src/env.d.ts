/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_API: string
  readonly VITE_AUTH_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
