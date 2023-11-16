import { useEffect, useRef, useState } from 'react';
import { Steps as StepsAnt } from 'antd';
import Button from 'components/shared/button';
const { Step } = StepsAnt;

import 'antd/dist/antd.css';
import styles from './stepButton.module.scss';

type PropsType = { id: number };

export const Steps = ({ steps }: { steps: PropsType[] }) => {
  const [current, setCurrent] = useState<number>(0);
  const ref = useRef(null);

  const applyStylesToItems = (
    items: HTMLElement[],
    backgroundColor: string,
    border: string,
  ): void => {
    for (const item of items) {
      item.style.backgroundColor = backgroundColor;
      item.style.border = `1px solid ${border}`;
    }
  };

  useEffect(() => {
    if (ref?.current) {
      const finishedItems: HTMLElement[] = Array.from(
        ref.current.querySelectorAll(
          '.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon',
        ),
      );

      const waitItems: HTMLElement[] = Array.from(
        ref.current.querySelectorAll(
          '.ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-icon',
        ),
      );

      if (finishedItems?.length) {
        applyStylesToItems(finishedItems, '#22EE5B', '#22EE5B');
      }

      if (waitItems?.length) {
        applyStylesToItems(waitItems, 'unset', '#00AE31');
      }
    }
  }, [ref, current]);

  const handleClickNext = (): void => {
    setCurrent(current + 1);
  };

  const handleClickPrev = (): void => {
    setCurrent(current - 1);
  };

  return (
    <div className={styles.container} ref={ref}>
      <StepsAnt current={current}>
        {steps?.map((step: PropsType) => <Step key={step.id} title="" />)}
      </StepsAnt>
      <br />
      <div className={styles.guidingBtnContainer}>
        {current > 0 && (
          <div>
            <Button onClick={handleClickPrev}>← Prev step</Button>
          </div>
        )}
        {current < steps?.length && (
          <div>
            <Button onClick={handleClickNext}>Next step →</Button>
          </div>
        )}
      </div>
    </div>
  );
};
