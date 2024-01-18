export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
    matcher: [
        "/PfeIdeas/newIdea",
        "/PfeIdeas/:id/edite",
        "/SharingLink/newLink",
        "/SharingLink/:id/edite",
        "/News/addNews",
        "/News/:id/edite",
        "/Profile"
    ]
}

// export function middleware(request) {
//     const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
//     const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
//     style-src 'self' 'nonce-${nonce}';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     block-all-mixed-content;
//     upgrade-insecure-requests;
// `;
//     // Replace newline characters and spaces
//     const contentSecurityPolicyHeaderValue = cspHeader
//         .replace(/\s{2,}/g, " ")
//         .trim();

//     const requestHeaders = new Headers(request.headers);
//     requestHeaders.set("x-nonce", nonce);
//     requestHeaders.set(
//         "Content-Security-Policy",
//         contentSecurityPolicyHeaderValue
//     );

//     const response = NextResponse.next({
//         request: {
//             headers: requestHeaders,
//         },
//     });
//     response.headers.set(
//         "Content-Security-Policy",
//         contentSecurityPolicyHeaderValue
//     );

//     return response;
// }
