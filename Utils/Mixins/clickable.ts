import { darken } from './darken';

/**
 * Darken all attributes
 * @param {string} color - HEX color
 * @param {object} attrs - object 
 * @returns {string}
 */
const createStyles = (
    color: string, 
    attrs: string[]
): string =>
    attrs.reduce((prev, curr): string => `${prev}${curr}: ${color};`, '');

export const clickable = (
    color: string,
    amount = 0.1,
    attributes = ['primary'],
): string => `
    cursor: pointer;
    &:not(:disabled):hover {
        ${createStyles(darken(color, amount), attributes)}
    }
    &:not(:disabled):active {
        ${createStyles(darken(color, amount*2), attributes)}
    }
`;