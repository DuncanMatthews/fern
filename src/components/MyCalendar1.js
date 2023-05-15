import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';



const MyCalendar = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
  
    useEffect(() => {
      const fetchCalendarData = async () => {
        try {
          const response = await fetch('/api/calendar');
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error('Error fetching calendar data:', error);
        }
      };
  
      fetchCalendarData();
    }, []);
  
    const handleEventClick = (eventInfo) => {
      console.log('Event clicked:', eventInfo.event);
      console.log('Event info:', eventInfo);
      setModalContent(eventInfo.event.extendedProps.summary);
      setShowModal(true);
    };
    
    const handleDateClick = (arg) => {
      console.log('Date clicked:', arg.date);
    };
  
    return (
      <div>
        <h5> Property Availability</h5>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventContent={renderEventContent}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          eventBackgroundColor={(info) => {
            if (info.event.extendedProps.priority === 'high') {
              return 'red';
            } else {
              return 'green';
            }
          }}
        />
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  


export function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.event.title}</b>
        <span>{eventInfo.event.extendedProps.summary}</span>
       
      </>
    );
  }
  


export default MyCalendar;


