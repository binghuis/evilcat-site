const raydium = {
  pairId: '25x9Av7ddPJQFVJy512VzzQ96A2Tqza22LtfHTKCpump',
  chainId: 'sol',
};

const dexscreener = {
  pairId: 'bsdpxv8ja3cyzdter9ufprd1w9ncdu9cg9avqknsu4eh',
  chainId: 'solana',
};

const Config = {
  url: {
    raydium: `https://raydium.io/swap/?inputMint=${raydium.chainId}&outputMint=${raydium.pairId}`,
    dexscreener: `https://dexscreener.com/${dexscreener.chainId}/${dexscreener.pairId}`,
    x: 'https://x.com',
    telegram: 'https://t.me/',
  },
  ca: 'zSyuawLybV374Fiufx4bQnLnwfFRxX2cFsQ6kwKpump',
  xId: '1678577280489234432',
};

export default Config;
