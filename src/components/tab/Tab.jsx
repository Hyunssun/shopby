import { useState } from "react";

export const Tab = ({ tabContArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  return (
    <div className="tabs">
      <ul className="tabs-menu">
        {tabContArr.map((item, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {item.tabTitle}
            </li>
          );
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
};
