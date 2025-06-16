import styled, { css } from "styled-components";

type GridColumnVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridItemVariant = "base" | "auto" | true | GridColumnVariant;

export interface GridStyleProps {
  container?: boolean;
  spacing?: number;
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap-reverse" | "wrap";
  position?:
    | "absolute"
    | "fixed"
    | "relative"
    | "static"
    | "sticky"
    | "initial";
  fullHeight?: boolean;
  item?: boolean;
  xl?: GridItemVariant;
  lg?: GridItemVariant;
  md?: GridItemVariant;
  sm?: GridItemVariant;
  xs?: GridItemVariant;
  overflowX?: "auto" | "hidden" | "scroll" | "visible";
  overflowY?: "auto" | "hidden" | "scroll" | "visible";
}

const wrapResolver = (wrap?: string, direction?: string) => {
  if (wrap) return wrap;
  else if (direction === "column" || direction === "column-reverse")
    return "nowrap";
  else return "wrap";
};

const gridSizeResolver = (value: GridItemVariant) => {
  switch (value) {
    case "base":
      return css`
        flex: 0 0 auto;
        -webkit-box-flex: 0;
        max-width: none;
        width: auto;
      `;
    case "auto":
    case true:
      return css`
        flex-basis: 0rem;
        -webkit-box-flex: 1;
        flex-grow: 1;
        max-width: 100%;
      `;
    default:
      const percent = `${(100 / 12) * value}%`;
      return css`
        flex-basis: initial;
        -webkit-box-flex: 0;
        flex-grow: 0;
        width: ${percent};
      `;
  }
};

const mediaResolver = (value: GridItemVariant, media?: string) => {
  if (media)
    return css`
      @media (min-width: ${media}) {
        ${gridSizeResolver(value)}
      }
    `;

  return gridSizeResolver(value);
};

export const Container = styled.div<GridStyleProps>`
  ${({
    container,
    spacing = 0,
    direction,
    justifyContent,
    alignItems,
    wrap,
    position = "initial",
    fullHeight,
  }) =>
    container &&
    css`
      display: flex;
      width: ${spacing ? `calc(100% + ${spacing}rem)` : "100%"};
      height: ${fullHeight ? `calc(100% + ${spacing}rem)` : "initial"};
      margin: ${spacing ? `-${spacing / 2}rem` : "initial"};
      flex-direction: ${direction || "row"};
      justify-content: ${justifyContent || "flex-start"};
      align-items: ${alignItems || "flex-start"};
      flex-wrap: ${wrapResolver(wrap, direction)};
      position: ${position};

      & > div {
        padding: ${spacing ? `${spacing / 2}rem` : "initial"};
      }
    `}

  ${({ item, xs, sm, md, lg, xl, overflowX, overflowY }) =>
    item &&
    css`
      box-sizing: border-box;
      flex-grow: initial;

      overflow-x: ${overflowX};
      overflow-y: ${overflowY};

      ${xs && mediaResolver(xs)}
      ${sm && mediaResolver(sm, "600px")}
      ${md && mediaResolver(md, "900px")}
      ${lg && mediaResolver(lg, "1200px")}
      ${xl && mediaResolver(xl, "1500px")}
    `}
`;
