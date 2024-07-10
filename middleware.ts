import { auth } from './auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface CustomSession {
    user: { email: string; role: string };
    expires: string;
    sessionToken: string;
}

export async function middleware(request: NextRequest) {
    const session = await auth();
    if (request.nextUrl.pathname.startsWith('/Login') && session) {
        return Response.redirect(request.nextUrl.origin);
    }
    if (
        request.nextUrl.pathname.startsWith('/employee') &&
        (session as CustomSession)?.user?.role !== 'employee'
    ) {
        console.log('Inside Employeeee');
        return Response.redirect(request.nextUrl.origin);
    }

    if (
        request.nextUrl.pathname.startsWith('/employer') &&
        (session as CustomSession)?.user?.role !== 'employer'
    ) {
        console.log('Inside Employerrr');
        return Response.redirect(request.nextUrl.origin);
    }
}
