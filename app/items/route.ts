import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://anabasis.pro/api/devices", {
    headers: {
      "Content-Type": "application/json",
      "Bearer": process.env.API_TOKEN,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
