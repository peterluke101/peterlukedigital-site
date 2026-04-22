import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Peter Luke Digital";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#0A1628",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#94A3B8",
            marginBottom: 24,
          }}
        >
          Peter Luke Digital
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          Websites that bring patients to medical and wellness practices
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#94A3B8",
          }}
        >
          Design, SEO, and content included
        </div>
      </div>
    ),
    size,
  );
}
