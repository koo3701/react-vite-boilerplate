declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_API_URL?: string;
      }
    }
  }
}