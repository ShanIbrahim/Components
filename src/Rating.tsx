import React, { useState } from "react";
import "./Rating.css";

function Rating(props: any) {
  const [value, setValue] = useState(props.defaultValue);
  const color = "white";
  const handleClick = (index: number) => {
    props.onChange(index + 1);
    setValue(index + 1);
  };

  return (
    <div>
      {[...Array(props.max)].map((rate, index) => (
        <button
          disabled={props.disabled}
          className={`circle  ${value - 1 >= index ? "red" : color}`}
          key={index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

Rating.defaultProps = {
  max: 5,
  defaultValue: 3,
  onChange: () => null,
  disabled: false,
};


export default Rating;
