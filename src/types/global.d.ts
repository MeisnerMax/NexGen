export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}
