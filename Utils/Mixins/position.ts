/**
 * Consistent positioning with default built-in
 * @param {string} [position='absolute'] 
 * @param {number|string} [margin=0] 
 * @param {number|string} top 
 * @param {number|string} right 
 * @param {number|string} bottom 
 * @param {number|string} left 
 * @returns {string} position styling
 */
export const position = (
    position = 'absolute',
    margin: number | string = 'auto',
    top: number | string = 0,
    right: number | string = top,
    bottom: number | string = top,
    left: number | string = right,
): string => `
    position: ${position};
    margin: ${margin};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
`;