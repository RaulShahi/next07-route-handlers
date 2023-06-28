import { NextResponse } from "next/server";

export async function GET() {
  console.log("running");
  return NextResponse.json({ message: "Hello, Next.js!" });
}
