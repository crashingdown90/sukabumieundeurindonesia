import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    if (request.method === 'GET' || request.nextUrl.pathname.startsWith('/api/auth')) {
      return NextResponse.next();
    }
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1];
    const validToken = process.env.ADMIN_API_TOKEN || "default_fallback_token";

    if (!token || token !== validToken) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Unauthorized API Access' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
