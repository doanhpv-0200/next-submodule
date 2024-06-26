import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from '@/utils/subdomain';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

const SUB_DOMAIN_LIST = ['sub1', 'sub2']

export async function middleware(req: NextRequest) {
    // Clone the URL
    const url = req.nextUrl.clone();

    // Skip public files
    if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

    const host = req.headers.get('host');
    const subdomain = getValidSubdomain(host);
    const pathArray = url.pathname.split('/');
    if (SUB_DOMAIN_LIST.includes(pathArray[1])) {
        url.pathname = `/notfound`;
    }

    if (subdomain && SUB_DOMAIN_LIST.includes(subdomain)) {
        // Subdomain available, rewriting
        console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
        url.pathname = `/${subdomain}${url.pathname}`;
    }

    return NextResponse.rewrite(url);
}
