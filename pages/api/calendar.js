import ical from 'ical';
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.airbnb.com/calendar/ical/32234578.ics?s=f61a4ebfd3a89195fcfdee22b14e90f3'
    );
    const calendarData = ical.parseICS(response.data);

    const calendarEvents = Object.values(calendarData).map((event) => ({
      start: event.start,
      end: event.end,
      summary: event.summary,
      description: event.description,
      
    }));
    res.status(200).json(calendarEvents);
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    res.status(500).json({ message: 'Error fetching calendar data' });
  }
};

