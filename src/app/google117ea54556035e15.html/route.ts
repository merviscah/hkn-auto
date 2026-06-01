export const dynamic = 'force-static';

export function GET() {
  return new Response('google-site-verification: google117ea54556035e15.html', {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
}
