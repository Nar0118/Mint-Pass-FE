import { ErrorCodeKey } from '.';

export const errorMessages: Record<ErrorCodeKey, string> = {
  [ErrorCodeKey.EMPTY]:
    'Collection description cannot be empty. Please provide a description.',
  [ErrorCodeKey.SIZE]: 'Description must be between 20 and 500 characters.',
  [ErrorCodeKey.INAPPROPRIATE]:
    'Collection description contains inappropriate content. Please provide a suitable description.',
};
