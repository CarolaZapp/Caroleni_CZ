import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Start = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="gridStart">
      <div className="boxStart" style={{ background: theme }}>
        Sunday
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🧑
      </div>
      <div className="boxStart" style={{ background: theme }}>
        5
      </div>
      <div className="boxStart" style={{ background: theme }}>
        😃
      </div>
      <div className="boxStart" style={{ background: theme }}>
        April
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🤸🏼‍♀️
      </div>
      <div className="boxStart" style={{ background: theme }}>
        December
      </div>
      <div className="boxStart" style={{ background: theme }}>
        ⏰
      </div>
      <div className="boxStart" style={{ background: theme }}>
        Tuesday
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🧘
      </div>

      <div className="boxStart" style={{ background: theme }}>
        30
      </div>
      <div className="boxStart" style={{ background: theme }}>
        👩🏻‍⚕️
      </div>
      <div className="boxStart" style={{ background: theme }}>
        9
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🎄
      </div>
      <div className="boxStart" style={{ background: theme }}>
        2023
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🥂
      </div>
      <div className="boxStart" style={{ background: theme }}>
        September
      </div>
      <div className=" boxStart spanStart" style={{ backgroundColor: theme }}>
        <h1>Carpe Diem</h1>
        <p>with</p>
        <h3>Caroleni</h3>
        <NavLink to="login" className={"navLink"}>
          <button className="enterCaroleniButton"> Click to Enter </button>
        </NavLink>
      </div>

      <div className="boxStart" style={{ background: theme }}>
        20
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🍕
      </div>
      <div className="boxStart" style={{ background: theme }}>
        10:00
      </div>
      <div className="boxStart" style={{ background: theme }}>
        👎
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🚴‍♀️
      </div>
      <div className="boxStart" style={{ background: theme }}>
        February
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🪘
      </div>
      <div className="boxStart" style={{ background: theme }}>
        :-P
      </div>
      <div className="boxStart" style={{ background: theme }}>
        12:30
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🧑‍💻
      </div>

      <div className="boxStart" style={{ background: theme }}>
        29
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🥪
      </div>
      <div className="boxStart" style={{ background: theme }}>
        Friday
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🏝
      </div>
      <div className="boxStart" style={{ background: theme }}>
        October
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🎦
      </div>
      <div className="boxStart" style={{ background: theme }}>
        31
      </div>
      <div className="boxStart" style={{ background: theme }}>
        📠
      </div>
      <div className="boxStart" style={{ background: theme }}>
        :(
      </div>
      <div className="boxStart" style={{ background: theme }}>
        🎂
      </div>
      <div className="boxStart" style={{ background: theme }}>
        August
      </div>
      <div className="boxStart" style={{ background: theme }}>
        ☎️
      </div>
      <div className="boxStart" style={{ background: theme }}>
        12
      </div>
      <div className="boxStart" style={{ background: theme }}>
        📒
      </div>
      <div className="boxStart" style={{ background: theme }}>
        Monday
      </div>
    </div>
  );
};

export default Start;
