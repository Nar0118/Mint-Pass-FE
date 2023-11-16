import { useRef, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { formatDate } from 'utils/functions/dateFormatter';

import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.scss';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type TimeType = {
  [key: string]: number;
};

export const CalendarDate = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [times, setTimes] = useState<number[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<TimeType>({});
  const calendarRef = useRef(null);

  useEffect(() => {
    const times: number[] = Array.from(Array(61).keys());

    if (calendarRef?.current) {
      const tileElements = calendarRef.current.querySelectorAll(
        '.react-calendar__tile--now',
      );
      tileElements[0].style.backgroundColor = '#00AE31';
    }
    setTimes(times);

    if (selectedTimes && value instanceof Date && !isNaN(value.valueOf())) {
      const newValue = value as Date;
      selectedTimes.hour && newValue.setHours(selectedTimes.hour);
      selectedTimes.min && newValue.setMinutes(selectedTimes.min);
      setValue(newValue);
    }
  }, [calendarRef, value, isFocused]);

  const handleCalendar = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div>
      <div className={styles.titleBlock}>
        <p
          className={`${styles.title} ${
            isFocused ? styles.titleFocused : styles.titleBlured
          }`}
        >
          Phase start time
        </p>
        <img src="/icons/ask.svg" alt="ask" />
      </div>
      <div
        className={`${styles.content} 
                ${isFocused ? styles.contentFocused : styles.contentBlured}`}
        tabIndex={0}
        onClick={handleCalendar}
        id="test"
      >
        <div>{formatDate(value.toString())}</div>
        <div>
          <img src="/icons/calendar.svg" alt="calendar" />
        </div>
      </div>
      {isFocused && (
        <div className={styles.calendarContent}>
          <Calendar
            onChange={setValue}
            value={value}
            className={styles.calendar}
            inputRef={calendarRef}
          />
          <div className={styles.times}>
            <div className={styles.timesItems}>
              {times.map((number: number, index: number) => (
                <div
                  key={index}
                  className={
                    selectedTimes.hour === number ? styles.selectedTimes : ''
                  }
                  onClick={() => {
                    setSelectedTimes({ ...selectedTimes, hour: number });
                  }}
                >
                  {number}
                </div>
              ))}
            </div>
            <div className={styles.timesItems}>
              {times.map((number: number, index: number) => (
                <div
                  key={index}
                  className={
                    selectedTimes.min === number ? styles.selectedTimes : ''
                  }
                  onClick={() => {
                    setSelectedTimes({ ...selectedTimes, min: number });
                  }}
                  id="times"
                >
                  {number}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
