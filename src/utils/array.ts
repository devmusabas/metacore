export function toArray<T>(arg: T | T[]): T[] {
  return Array.isArray(arg) ? arg : [arg];
}

export function getSortedArray<T, K extends keyof T>(arr: T[], key?: K): T[] {
  if (!key) return arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}

export function groupByKey<T, K extends keyof T>(
  arr: T[],
  groupingKey: K,
  nullKeyName?: string
): { [key: string]: T[] } {
  if (!arr) return {};
  const groupedData: { [key: string]: T[] } = {};

  arr.forEach((obj) => {
    const group =
      (obj[groupingKey] as unknown as string) ?? nullKeyName ?? 'No Group';
    if (!groupedData[group]) {
      groupedData[group] = [];
    }
    groupedData[group].push(obj);
  });
  return groupedData;
}
