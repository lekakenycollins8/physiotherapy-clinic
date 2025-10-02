// lib/gtag.ts
export const GA_TRACKING_ID = "AW-17151250932"

export const pageview = (url: string) => {
  ;(window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, params }: { action: string; params?: any }) => {
  ;(window as any).gtag("event", action, params)
}

// ✅ Call click conversion
export const trackCallClick = () => {
  ;(window as any).gtag?.("event", "conversion", {
    send_to: "AW-17151250932/Ve7sCM2S_KUbEPSjrfI_",
  })
}
