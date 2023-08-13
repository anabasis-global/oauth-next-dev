import { NextResponse, NextRequest } from "next/server";

//import axios from "axios";

export async function GET() {
  const res = await fetch("https://api.github.com/meta", {
    headers: {
      // "Content-Type": "application/json",
      // "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}

let redirect = (request: any, response: NextResponse) => {
  return NextResponse.redirect(new URL("/new", request.url));
};
