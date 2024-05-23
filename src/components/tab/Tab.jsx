import { useEffect, useState } from "react";

export const Tab = ({ tabContArr, setIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIndex(activeIndex);
  }, [activeIndex]);
  return (
    <div className="tabs">
      <ul className="tabs-menu">
        {tabContArr.map((item, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => {
                setActiveIndex(index);
              }}
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
