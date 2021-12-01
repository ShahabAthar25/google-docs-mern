import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.token;

  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}
