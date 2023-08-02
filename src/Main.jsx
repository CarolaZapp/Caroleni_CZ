import { useState, useContext, useEffect } from "react";

import { Calendar } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HeaderMain from "./components/HeaderMain.jsx";
import Modal from "./components/Modal.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "./Main.css";
import Footer from "./components/Footer.jsx";
import ThemeContext from "./Contexts/ColorContext.js";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Meeting",
    allDay: true,
    start: new Date(2023, 7, 8),
    end: new Date(2023, 7, 8),
  },
  {
    title: "Vacation",
    start: new Date(2023, 7, 21),
    end: new Date(2023, 7, 23),
  },
  {
    title: "Conference",
    start: new Date(2023, 8, 16),
    end: new Date(2023, 8, 18),
  },
];

const Main = ({ city }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [allEvents, setAllEvents] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [zIndex, setZIndex] = useState(1);

  useEffect(() => {
    const eventsLocalStorage = localStorage.getItem("allEvents");
    if (eventsLocalStorage !== null) {
      setAllEvents(JSON.parse(eventsLocalStorage));
    }
  }, []);

  const [theme] = useContext(ThemeContext);

  const handleCancel = () => {
    setShowModal(false);
    setZIndex(1);
  };

  function handleAddEvents() {
    setAllEvents([...allEvents, newEvent]);
    localStorage.setItem("allEvents", JSON.stringify(allEvents));
    setShowModal(false);
    setZIndex(1);
  }

  const handleClick = () => {
    setShowModal(true);
    setZIndex(-1);
    setNewEvent({});
  };

  return (
    <div>
      <HeaderMain />

      <div className="cale_side">
        <div className="cale_button">
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 400,
              width: "70vw",
              margin: "50px",
              zIndex: `${zIndex}`,
            }}
          />
          <button
            className="addNewEventButtonMain"
            style={{
              backgroundColor: theme,
            }}
            onClick={handleClick}
          >
            Add new Event
          </button>
        </div>
        {showModal ? (
          <Modal>
            <div>
              <input
                className="inputEventCalendarMain"
                type="text"
                placeholder="Add event title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
            </div>
            <DatePicker
              className="datePickerCalendarMain"
              placeholderText="Start date"
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              className="datePickerCalendarMain"
              placeholderText="End date"
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            {/* <div>
              <p className="description">Description:</p>
              <input
                className="inputEventCalendarMain"
                type="text"
                rows="40"
                cols="50"
                name="comment"
                placeholder="Add description"
                values={newEvent.description}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
              />
            </div> */}
            <div className="modalButtonMainPosition">
              <button
                className="modalButtonMain"
                style={{
                  backgroundColor: theme,
                }}
                onClick={handleAddEvents}
              >
                Add event
              </button>
              <button
                className="modalButtonMain"
                style={{
                  backgroundColor: theme,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Modal>
        ) : null}
        <Sidebar city={city} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
