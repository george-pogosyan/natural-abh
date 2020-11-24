/** *
 * RegExp definitions for tokenizing text in a specific language based
 * on its alphabet. Each language is keyed by the two-letter code per
 * ISO 639-1, and defines a RegExp that excludes alphabetic characters.
 */
export const Matchers = {
  fi: /[^A-Za-zÅåÄäÖö]/
};
