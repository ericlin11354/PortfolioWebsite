/**
 * Darkens given color
 * @param {string} color - HEX color
 * @param {number} [amount=0.1] - Percentage darkened  
 * @returns {string} Darkened HEX color
 */
export const darken = (color: string, amount = 0.1): string => {
    let res = '#'; // darkened color
    const val = Math.floor(255 * amount); // darken by 10%

    // Hex syntax is '#RRGGBB'
    // iterate 'RR', 'GG', 'BB'
    for (let i = 1; i < 7; i += 2) {
        const c = parseInt(color.slice(i, i+2), 16);
        const num = Math.max(c - val, 0); // no negative color
        res += num.toString(16).padStart(2, '0'); // add hex form
    }
    return res;
}