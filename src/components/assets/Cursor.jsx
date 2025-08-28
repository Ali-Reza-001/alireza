import { useState, useEffect, useRef } from "react";

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const cursorWidth = 40;
  const cursor = useRef(null);
  const arrivalTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.pageX - cursorWidth / 2);
      setCursorY(e.pageY - cursorWidth / 2);

      // Reset arrival state
      cursor.current.classList.remove("cursor-arrived");
      if (arrivalTimeout.current) clearTimeout(arrivalTimeout.current);

      // Simulate arrival after transition duration
      arrivalTimeout.current = setTimeout(() => {
        cursor.current.classList.add("cursor-arrived");
      }, 300); // Match your transition duration
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .hover-target")) {
        cursor.current.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = () => {
      cursor.current.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (arrivalTimeout.current) clearTimeout(arrivalTimeout.current);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="custom-cursor"
      style={{
        top: `${cursorY}px`,
        left: `${cursorX}px`,
        width: `${cursorWidth}px`,
        height: `${cursorWidth}px`,
      }}
    ></div>
  );
};

export default Cursor;