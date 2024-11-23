export const getObjectKeys = <M extends object, K extends keyof M>(
  map: M
): K[] => Object.keys(map ?? {}) as K[];

export const getObjectValues = <T, K>(obj: T, param: K): K[] => {
  if (!obj) return [];
  return Object.entries(obj).reduce((values, [key, value]) => {
    if (key === param) {
      values.push(value as K);
    } else if (typeof value === 'object' && value !== null) {
      const nestedValues = getObjectValues(value, param);
      values.push(...nestedValues);
    }
    return values;
  }, [] as K[]);
};

export function groupByKey<T, K extends keyof T>(
  obj: Record<string, T>,
  groupingKey: K
): { [key: string]: T[] } {
  const groupedData: { [key: string]: T[] } = {};

  getObjectKeys(obj).forEach((id) => {
    const group = obj[id][groupingKey] as string;
    if (!groupedData[group]) {
      groupedData[group] = [];
    }
    groupedData[group].push(obj[id]);
  });
  return groupedData;
}
