import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('adminToken') || request.headers.get('authorization');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isAdminSignIn = request.nextUrl.pathname === '/admin/signin';

  // Store the intended destination
  if (isAdminPage && !adminToken && !isAdminSignIn) {
    const signInUrl = new URL('/admin/signin', request.url);
    signInUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  // If already signed in, redirect to admin dashboard
  if (isAdminSignIn && adminToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}; 