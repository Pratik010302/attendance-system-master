import { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";
// import img from "./img.JPG";
import img from "../img.JPG";
import img1 from "../logo.svg";
import jsonData from "../data/dummy.json";

// const attendanceData = {
//   "2024-03-01": "present",
//   "2024-03-05": "absent",
//   "2024-03-07": "present",
//   "2024-03-06": "present",
//   // Add more data as needed
// };
const today = new Date();
const dayOfWeek = today.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CalendarComponent = () => {
  // const [data, setData] = useState([jsonData]);
  const [date, setDate] = useState(new Date());
  console.log(date);
  // const strdata = JSON.stringify(jsonData);
  // console.log(strdata);
  // Function to render custom content for each date cell
  // const renderDayCell = ({ date }) => {
  //   const dateString = date.toISOString().split("T")[0];

  //   const record = jsonData.find((item) =>
  //     item.attendance.find((entry) => Object.keys(entry)[0] === dateString)
  //   );
  //   console.log(record);
  //   const attendanceEntry = record?.attendance.find(
  //     (entry) => Object.keys(entry)[0] === dateString
  //   );
  //   let cellColor = "white"; // Default color
  //   console.log(attendanceEntry);
  //   if (attendanceEntry && Object.values(attendanceEntry)[0] === "present") {
  //     cellColor = "green";
  //   } else if (
  //     (attendanceEntry && Object.values(attendanceEntry)[0] === "absent") ||
  //     date.getDay() === 0
  //   ) {
  //     cellColor = "red";
  //   }

  //   return (
  //     <div
  //       style={{
  //         backgroundColor: cellColor,
  //         width: "100%",
  //         height: "100%",
  //         borderRadius: "50%",
  //       }}
  //     ></div>
  //   );
  // };

  const generateRenderDayCell = (record) => {
    return ({ date }) => {
      const dateString = date.toISOString().split("T")[0];
      console.log(dateString);
      const attendanceEntry = record.attendance.find(
        (entry) => Object.keys(entry)[0] === dateString
      );
      console.log(attendanceEntry);

      let cellColor = "#fff"; // Default color
      if (attendanceEntry) {
        cellColor =
          attendanceEntry[dateString] === "present" ? "#008000" : "#ff0000";
      } else if (date.getDay() === 0) {
        cellColor = "#ff0000"; // Red color for Sundays
      }

      return (
        <div
          style={{
            backgroundColor: cellColor,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        ></div>
      );
    };
  };
  return (
    <div className="card">
      {jsonData.map((record) => (
        <div className="profile-card" key={record.id}>
          <img src={record.imgUrl}></img>

          <h1 class="title">{record.name}</h1>

          <h2>Web Developer</h2>

          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={generateRenderDayCell(record)} // Render custom content for each date cell
            />
          </div>
        </div>
      ))}
      ;
      {/* <p className="text-center">
      <span className="bold">Selected Date:</span> {date.toDateString()}
    </p> */}
    </div>
  );
};

export default CalendarComponent;
