"use client";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

function ScrollToTop() {
  const [stick, setStick] = useState<boolean>(false);

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${stick ? "opacity-100" : "opacity-0"}`}
      onClick={onClickHandler}
    >
      <BsArrowUp />
    </button>
  );
}

export default ScrollToTop;
