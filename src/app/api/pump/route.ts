import { getHttpStatus } from '@/constant/http-status';
import { RateLimiter } from 'limiter';
import { NextResponse } from 'next/server';
import WebSocket from 'ws';
export const runtime = 'edge';
const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'second',
  fireImmediately: true,
});

export async function GET(req: Request) {
  const { chainId, pairId } = await req.json();
  const ws = new WebSocket('wss://pumpportal.fun/api/data');

  ws.on('open', function open() {
    let payload: {
      method: string;
      keys?: string[];
    } = {
      method: 'subscribeNewToken',
    };
    // ws.send(JSON.stringify(payload));

    payload = {
      method: 'subscribeAccountTrade',
      keys: ['AArPXm8JatJiuyEffuC1un2Sc835SULa4uQqDcaGpAjV'], // array of accounts to watch
    };
    ws.send(JSON.stringify(payload));

    // Subscribing to trades on tokens
    payload = {
      method: 'subscribeTokenTrade',
      keys: ['91WNez8D22NwBssQbkzjy4s2ipFrzpmn5hfvWVe2aY5p'], // array of token CAs to watch
    };
    ws.send(JSON.stringify(payload));
  });

  ws.on('message', function message(data) {
    console.log(data);
  });

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
