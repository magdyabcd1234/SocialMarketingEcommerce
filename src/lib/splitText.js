/**
 * Splits a plain string into an array of words, each word being an array
 * of single characters. Used by <AnimatedText /> to build the per-word /
 * per-character <span> markup that GSAP then staggers in — a dependency
 * -free stand-in for GSAP's SplitText plugin.
 *
 * NOTE: only pass plain text as children (no nested elements/markup).
 */

export function splitWords(text) {
    return text.split(" ").filter(Boolean);
}

export function splitChars(word) {
    return word.split(" ");
}


