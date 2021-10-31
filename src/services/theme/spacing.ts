export enum Spacing {
  Quarck = '4px',
  Nano = '8px',
  XXXS = '16px',
  XXS = '24px',
  XS = '32px',
  SM = '40px',
  MD = '48px',
  LG = '56px',
  XL = '64px',
  XXL = '80px',
  XXXL = '120px',
}

export type SpacingTokenName = keyof typeof Spacing
