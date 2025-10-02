// lib/gtag.ts
export const GA_TRACKING_ID = "AW-17151250932"; // <-- replace with yours

// Standard pageview tracking
export const pageview = (url: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Custom event tracking (optional)
export const event = ({ action, category, label, value }: any) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
