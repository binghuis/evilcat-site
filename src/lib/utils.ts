import { clsx, type ClassValue } from 'clsx';
import { NextResponse } from 'next/server';
import { toast, type ToastOptions } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function middlewareChain(functions: Function[], index = 0): () => NextResponse {
  const current = functions[index];
  if (current) {
    const next = middlewareChain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

type ToastType = 'success' | 'error' | 'loading';

export function toastDark(msg: string, opts?: ToastOptions & { type?: ToastType }) {
  toast[opts?.type ?? 'success'](msg, {
    icon: opts?.icon,
    style: {
      borderRadius: '16px',
      background: '#333',
      color: '#ffaa40',
      ...opts?.style,
    },
  });
}

export function sendIt() {
  toastDark('Keep sending!', { icon: '🚀🌕' });
}
