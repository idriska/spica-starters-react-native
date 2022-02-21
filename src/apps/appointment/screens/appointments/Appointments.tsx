import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as COLORS from '../../../../styles/colors';
import Moment from 'moment';

const mockData = [
  {
    date: '2022-02-21T14:29:59.611Z',
  },
  {
    date: '2022-02-24T14:29:59.611Z',
  },
  {
    date: '2022-02-27T14:29:59.611Z',
  },
  {
    date: '2022-02-16T14:29:59.611Z',
  },
];

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [eventSource, setEventSource] = useState({});

  useEffect(() => {
    prepareEvents(mockData);
  }, []);

  const prepareEvents = (data: any) => {
    let tempObj = {};
    data.forEach((el: any) => {
      let tempDate = Moment(el.date).format('YYYY-MM-DD');
      tempObj = {
        ...tempObj,
        ...{
          [tempDate]: {
            marked: true,
            dotColor: '#50cebb',
            selected: selectedDate === Moment(el.date).format('YYYY-MM-DD'),
          },
        },
      };
    });
    setEventSource({...tempObj});
  };

  return (
    <CalendarList
      horizontal={true}
      // enableSwipeMonths={true}
      pagingEnabled={true}
      hideArrows={false}

      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: COLORS.HELPER_TURQUOISE,
        },
        ...eventSource,
      }}
    />
  );
};

export default Appointments;
