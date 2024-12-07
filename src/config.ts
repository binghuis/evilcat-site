const raydium = {
  pairId: '',
  chainId: 'sol',
};

const dexscreener = {
  pairId: '',
  // pairId: '6ov9hy1b3vvahupteynxjqde37kftxxfos9qyo6ft9xz',
  chainId: 'solana',
};

const Config = {
  url: {
    raydium: raydium.pairId
      ? `https://raydium.io/swap/?inputMint=${raydium.chainId}&outputMint=${raydium.pairId}`
      : '',
    dexscreener: dexscreener.pairId
      ? `https://dexscreener.com/${dexscreener.chainId}/${dexscreener.pairId}`
      : '',
    x: 'https://x.com/evilcatcoin',
    telegram: 'https://t.me/evilcatzone',
  },
  ca: '458e48q9Ca2H5wEFzNrzCsfVS4dZiU9zFeUgboLZpump',
  xId: '1863480331967598615',
};

export default Config;
