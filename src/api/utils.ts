import { apiKey, baseUrl } from './config';

export const getExchangeRate = (from:string, to:string) => fetch(`${baseUrl}/convert?q=${from}_${to}&compact=ultra&apiKey=${apiKey}`);
