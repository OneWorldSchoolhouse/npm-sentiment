
/**
 * Performs sentiment analysis on the provided input 'phrase'.
 *
 * @param input Input phrase
 * @param [inject] Optional sentiment additions to AFINN (hash k/v pairs)
 * @param [callback] Optional callback function to run when done
 * @return {Object}
 */
declare function sentiment(phrase: string, inject?: Object, callback?: Function): sentiment.IResults;

declare namespace sentiment {
  export interface IResults {
  score: number;
  comparative: number;
  tokens: string[];
  words: string[];
  positive: string[];
  negative: string[];
}
}

export = sentiment;
