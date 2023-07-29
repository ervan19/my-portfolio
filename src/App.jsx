import { useEffect, useCallback, useMemo, useState } from 'react';
import ThemeContext from './context/theme';
import Layout from './layout/Layout';
import WebProjectDetail from './pages/WebProjectDetail';
import UiProjectDetail from './pages/UiProjectDetail';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import { initTE, Carousel } from 'tw-elements';

function App() {
  const [dark, setDark] = useState('dark');

  useEffect(() => {
    initTE({ Carousel });
    document.body.setAttribute('theme', dark);
    localStorage.setItem('theme', JSON.stringify(dark));
  }, [dark]);

  const toggleDark = useCallback(() => {
    if (dark === 'light') {
      setDark('dark');
    } else {
      setDark('light');
    }

    localStorage.setItem('theme', JSON.stringify(dark));
  }, [dark]);

  const providerValue = useMemo(
    () => ({
      dark,
      toggleDark,
    }),
    [dark, toggleDark],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/studycase/web/:id' element={<WebProjectDetail />} />
          <Route path='/studycase/ui/:id' element={<UiProjectDetail />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
