import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#f97316",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#000",
            fontSize: 14,
            fontWeight: 900,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
          }}
        >
          LM
        </span>
      </div>
    ),
    { ...size }
  );
}
