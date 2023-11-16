import { ChangeEvent, useState } from 'react';

export function useInputChange(initialValue?: string) {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsChanged(true);
  };

  return {
    value: isChanged ? value : initialValue,
    onChange: handleChange,
  };
}
