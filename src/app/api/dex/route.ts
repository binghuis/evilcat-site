import { getHttpStatus } from '@/constant/http-status';
import { RateLimiter } from 'limiter';
import { NextResponse } from 'next/server';
export const runtime = 'edge';

const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'second',
  fireImmediately: true,
});

export async function GET(req: Request) {
  const { chainId, pairId } = await req.json();
  const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/{chainId}/{pairId}', {
    method: 'GET',
    headers: {},
  });
  const data = await response.json();

  try {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests < 0) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: getHttpStatus('TooManyRequests').message,
        }),
        {
          status: getHttpStatus('TooManyRequests').code,
        },
      );
    }
  } catch (error) {
    throw error;
  }
}
