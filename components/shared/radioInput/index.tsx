import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { IRadioInput, PropsType } from './types';

import styles from './radioInput.module.scss';

export const RadioInput = ({ data }: PropsType) => {
  const [value, setValue] = useState<number>(1);
  const [radioData, setRadioData] = useState<IRadioInput[]>(data);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleRadioInput = (id: number) => {
    const filteredData: IRadioInput[] = data.map((item: IRadioInput) => {
      item.isActive = id === item.id;
      return item;
    });
    setRadioData(filteredData);
  };

  return (
    <Radio.Group
      className={styles.customRadioGroup}
      onChange={onChange}
      value={value}
    >
      <Space direction="vertical">
        {radioData.map((e: IRadioInput) => (
          <Radio
            key={e.id}
            value={e.value}
            className={styles[e.isActive ? 'active' : '']}
            onClick={() => handleRadioInput(e.id)}
          >
            {e.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};
