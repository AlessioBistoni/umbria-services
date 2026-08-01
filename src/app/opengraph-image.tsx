import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #3a4f3e 0%, #2c3d30 55%, #1e2a21 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 9999,
            background: "#f7f2e7",
            marginBottom: 36,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"
              fill="#3a4f3e"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 700,
            color: "#f7f2e7",
            textAlign: "center",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            color: "#c9a86a",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 26,
            color: "#e5ddc8",
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          Massaggi, Yoga & Trattamenti di Benessere in Umbria
        </div>
      </div>
    ),
    { ...size }
  );
}
