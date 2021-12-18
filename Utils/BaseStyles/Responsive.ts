export interface ResponsiveInterface {
  media?: {
    [name: string]: Function;
  };
}

export const Responsive = ({
  media = {}, // for @media flag
  ...props
}: ResponsiveInterface): string =>
  Object.entries(media).reduce(
    (acc, [breakpoint, styles]): string => `
            ${acc}
            // change styles when max-width >= 'breakpoint'px
            @media (max-width: ${breakpoint}px) { 
                ${typeof styles === "function" 
                ? styles(props) 
                : styles}
            }
        `,
    ""
  );
