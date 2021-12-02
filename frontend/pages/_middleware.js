import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.token;

  if ((token && pathname === "/login") || (token && pathname === "/signup")) {
    return NextResponse.redirect("/");
  }

  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}
