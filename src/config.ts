const raydium = {
  pairId: '',
  chainId: 'sol',
};

const dexscreener = {
  pairId: '',
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
    x: 'https://x.com/EvilCatMeme',
    telegram: 'https://t.me/',
  },
  ca: '',
  xId: '1862428073792348535',
};

export default Config;
