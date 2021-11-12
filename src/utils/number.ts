export function truncate(num:string|number):string {
  const re = new RegExp('^-?\\d+(?:.\\d{0,2})?');
  return num.toString().match(re)?.[0] || '0';
}
