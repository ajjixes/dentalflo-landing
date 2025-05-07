import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    // console.log("")
    // if (request.nextUrl.pathname.startsWith('/')) {
    //     return NextResponse.redirect(new URL('/dental4web', request.url))
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/about/:path*'],
}
