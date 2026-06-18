import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "La Mudanza - Empresa de mudanzas en CABA y GBA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#f97316",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          LA MUDANZA
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          Mudanzas y Guardamuebles en CABA y GBA
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 28,
            marginBottom: 48,
          }}
        >
          +30 años de experiencia · Presupuesto sin cargo
        </div>
        <div
          style={{
            background: "#f97316",
            color: "#000000",
            fontSize: 22,
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: 8,
          }}
        >
          11-2553-5500
        </div>
      </div>
    ),
    { ...size }
  );
}
