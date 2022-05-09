export const IsNullOrUndefined: (value: any) => boolean = (value) =>
  value === null || typeof value === 'undefined';

export const AnyNullOrUndefined: (...args: any) => boolean = (...args) => {
  args.forEach((arg: any) => {
    if (IsNullOrUndefined(arg)) return true;
  });

  return false;
};

export const IsNullUndefinedOrEmpty: (value?: string | any[] | {} | null) => boolean =
  (value) => {
    if (IsNullOrUndefined(value)) return true;

    const isObject = typeof value === 'object' && !Array.isArray(value);

    if (isObject) {
      value = Object.keys(value as {});
    }

    if ((value! as string | any[]).length < 1) return true;

    return false;
  };