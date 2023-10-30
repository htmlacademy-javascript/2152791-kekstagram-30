const MINUTES_IN_HOUR = 60;

const convertTime = (hours, minutes) => Number(hours) * MINUTES_IN_HOUR + Number(minutes);

const isMeeting = (start, end, meet, duration) => {
  const [startHours, startMinutes] = start.split(':');
  const startSumMinutes = convertTime(startHours, startMinutes);
  const [endHours, endMinutes] = end.split(':'); const endSumMinutes = convertTime(endHours, endMinutes);
  const [meetHours, meetMinutes] = meet.split(':');
  const meetSumMinutes = convertTime(meetHours, meetMinutes);

  if (meetSumMinutes >= startSumMinutes && (meetSumMinutes + duration) <= endSumMinutes) {
    return true;
  } return false;
};

isMeeting('08:00', '17:30', '14:00', 90);
