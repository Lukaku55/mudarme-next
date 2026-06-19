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
          background: "#1a1a1a",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "#e8e0d0",
            fontSize: 15,
            fontWeight: 900,
            fontFamily: "serif",
            letterSpacing: "-1.5px",
            lineHeight: 1,
          }}
        >
          LM
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: 4,
            right: 4,
            height: 2,
            background: "#f97316",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
