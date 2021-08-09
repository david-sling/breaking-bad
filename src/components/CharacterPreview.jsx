import React from "react";
import { dateParse } from "../utils/dateParse";
import { Icon } from "@iconify/react";
import calendarRange from "@iconify/icons-mdi/calendar-range";

export default function CharacterPreview({
  char_id,
  name,
  nickname,
  occupation,
  birthday,
  status,
  img: image,
  full,
  appearance,
  portrayed,
}) {
  const { date, month, year } = dateParse(birthday);
  const hasBirthday = birthday !== "Unknown";
  return (
    <div className="CharacterPreview">
      <div className="status">
        <div id={status} className="dot"></div>
        <p>{status}</p>
      </div>
      <h3 className="name">{name}</h3>
      <h6 className="nickname">{nickname}</h6>
      <div className="image">
        <img src={image} alt={`${name} photo`} />
      </div>
      <div className="dob">
        <p className="head">Date Of Birth{!hasBirthday && " Unknown"}</p>
        {hasBirthday && (
          <>
            <p className="date">
              {date} {month}
            </p>
            <div className="year">
              <Icon
                icon={calendarRange}
                style={{ color: "#bababa", fontSize: "1.5rem" }}
              />
              <p>{year}</p>
            </div>
          </>
        )}
      </div>
      <div className="details">
        <div className="occupation">
          {full && <h2>OCCUPATION{occupation?.length > 1 && "S"}</h2>}
          {occupation?.map((o) => (
            <p>{o}</p>
          ))}
        </div>
        {full && (
          <>
            <div className="appearance">
              <h2>APPEARANCE</h2>
              <ul>
                {appearance?.map((n) => (
                  <li>SEASON {n}</li>
                ))}
              </ul>
            </div>
            <div className="portrayed">
              <h2>PORTRAYED BY</h2>
              <p>{portrayed}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
