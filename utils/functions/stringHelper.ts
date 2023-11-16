export function reduceAddres(addres: string): string {
  return addres.length > 10
    ? addres.slice(0, 4) + '...' + addres.slice(-4)
    : addres;
}
