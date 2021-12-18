export interface MainInterface {
    margin?: string | number;
    padding?: string | number;
    inlineStyle?: string | Function;
}

export const Main = ({
    margin = 0,
    padding = 0,
    inlineStyle = '',
    ...props
}: MainInterface): string => `
    // positioning
    margin: ${margin};
    padding: ${padding};

    // inline styles
    ${
        typeof inlineStyle === 'function'
        ? inlineStyle({ ...props, margin, padding })
        : inlineStyle
    };
`;

export const MainProps: string[] = ['margin', 'padding', 'inlineStyle'];