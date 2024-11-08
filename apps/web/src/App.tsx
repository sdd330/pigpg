import { useEffect, useRef } from 'react';
import './App.css';
import { AppUtil } from './AppUtil.ts';

const App = () => {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const util = new AppUtil();
    util.init(div).then(() => {});
  });

  return <div id="container" ref={div} />;
};

export default App;
