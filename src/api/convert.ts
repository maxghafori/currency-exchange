import { useQuery } from 'react-query';
import { getExchangeRate } from './utils';

export const useExchangeRate = (from:string, to:string) => useQuery(['convert', from, to], () => getExchangeRate(from, to).then((res) => res.json()));
