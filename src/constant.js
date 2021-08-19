export const COLORS = {
  darkBlue:'hsl(231, 26%, 24% )',
  limeGreen:'hsl(136, 64%, 51%)',
  brightCyan:'hsl(192, 69%, 51%)',
  grayishBlue:'hsl(231, 8%, 61%)',
  lightGrayishBlue:'hsl(223,18%, 96%)',
  veryLightGray:'hsl(0, 0%, 95%)',
  white:'hsl(0, 0%, 100%)'

}
export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};