import React, { useState } from "react";
import "./AppList.css";
import _ from "lodash";
import Rating from "./Rating";

type Props = {
  options: string[];
  showRatingsColumn: boolean;
};

export default function AppList({ options, showRatingsColumn }: Props) {
  const [obj, setObj] = useState(
    Object.fromEntries(options.map((k) => [k, 0]))
  );

  const handleChange = (option: string, currentValue: number) => {
    setObj({ ...obj, [option]: currentValue });
  };

  const handleClick = () => {
    console.log(JSON.stringify(obj));
  };

  return (
    <div className="applist-container">
      <div className="applist">
        {_.map(options, (option) => (
          <div className="options" key={option}>
            {option}
            {showRatingsColumn && (
              <div className="ratings">
                <Rating
                  max={5}
                  defaultValue={0}
                  onChange={(option:string, currentValue: number) =>
                    handleChange(option, currentValue)
                  }
                  disabled={false}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="submit-btn" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
