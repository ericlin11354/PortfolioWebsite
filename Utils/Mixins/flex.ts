const FLEX_DIRECTIONS = ['row', 'column', 'row-reverse', 'column-reverse'];

/**
 * Flex display with the following configuration:
 * - Nothing => row, flex-start, flex-start
 * - One param => direction OR justify + align
 * - Two Params => (direction, justify + align) OR (justify, align)
 * - Three Params => (direction, justify, align)
 * @param {string} param1 - flex direction
 * @param {string} param2 - justify content
 * @param {string} param3 - align items
 * @returns {string} flex styling
 */
export const flex = (
    param1?: string,
    param2?: string,
    param3?: string,
): string => {
    if (!param1) 
        return 'display: flex;';
    else if (!param2) {
        return `
            display: flex;
            ${ FLEX_DIRECTIONS.includes(param1) ? `
                flex-direction: ${param1};
            `: `
                justify-content: ${param1};
                align-items: ${param1};
            `}
        `;
    }
    else if (!param3) {
        return `
            display: flex;
            ${ FLEX_DIRECTIONS.includes(param1) ? `
                flex-direction: ${param1};
                justify-content: ${param2};
                align-items: ${param2};
            `: `
                justify-content: ${param1};
                align-items: ${param2};
            `}
        `;
    }
    else {
        return `
            display: flex;
            flex-direction: ${param1};
            justify-contents: ${param2};
            align-items: ${param3};
        `
    }
};

