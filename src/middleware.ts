import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    
  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/events", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
