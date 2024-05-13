import { useEffect, useCallback, useMemo, useState } from "react";
import ThemeContext from "./context/theme";
import Layout from "./layout/Layout";
import WebProjectDetail from "./pages/WebProjectDetail";
import UiProjectDetail from "./pages/UiProjectDetail";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home";

import { initTE, Carousel } from "tw-elements";

function App() {
  const [dark, setDark] = useState("dark");

  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
    initTE({ Carousel });
    document.body.setAttribute("theme", dark);
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  const toggleDark = useCallback(() => {
    if (dark === "light") {
      setDark("dark");
    } else {
      setDark("light");
    }

    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  const providerValue = useMemo(
    () => ({
      dark,
      toggleDark,
    }),
    [dark, toggleDark]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/studycase/web/:id" element={<WebProjectDetail />} />
          <Route path="/studycase/ui/:id" element={<UiProjectDetail />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
