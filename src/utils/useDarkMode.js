import { useDispatch } from "react-redux";
import { toggle_dark_mode } from "redux/actions/commonActions";

const { useState, useEffect } = require("react");

const useDarkMode = () => {
  const dispatch = useDispatch();
  const [isDark, setDark] = useState(
    () => localStorage.getItem("dark") === "true" || false
  );

  const toggle = () => {
    setDark(!isDark);
  };
  useEffect(() => {
    localStorage.setItem("dark", isDark);
    dispatch(toggle_dark_mode(isDark));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return [isDark, toggle];
};

export { useDarkMode };
