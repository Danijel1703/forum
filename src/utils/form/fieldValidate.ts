import { every, find, isEmpty, isFunction } from "lodash";

type Validation = { isValid: boolean; error: string | undefined };

function fieldValidate(
  validators: Array<
    (value: any) => {
      isValid: boolean;
      error: string | undefined;
    }
  >,
  value: string | number | undefined
): Validation | undefined {
  const defaultValue = { isValid: true, error: undefined };
  if (isEmpty(validators)) return defaultValue;
  const valid = every(validators, (validator) => validator(value).isValid);
  if (valid) defaultValue;
  const func = find(validators, (validator) => !validator(value).isValid);
  return isFunction(func) ? func(value) : undefined;
}

export default fieldValidate;
