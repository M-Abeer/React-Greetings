import react from "react";
import "./style.css";

let date = new Date().getHours();
let greet;
let msg;
if (date >= 1 && date <= 11) {
  greet = " Morning";
  msg = "green";
} else if (date >= 12 && date <= 19) {
  greet = " Evening";
  msg = "orange";
} else if (date > 19 && date <= 24) {
  greet = " Night";
  msg = "black";
}

function Text() {
  return (
    <div className="primary">
      <h1 className="a">
        Hello sir, <span style={{ color: msg }}> Good {greet}</span>
      </h1>
    </div>
  );
}

export default Text;
