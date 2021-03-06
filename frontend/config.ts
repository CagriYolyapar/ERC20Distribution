// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {
    "0xb1A3B6F50b9905510949E095c3EC742665dd2982": 1,
    "0x74304F75F0D9AD5D589Bb759BED2fF8113761372": 1,
  },
};

// Export config
export default config;
