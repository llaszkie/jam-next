import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mountain from '../components/mountain';
import Home from '../components/home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":mountainId" element={<Mountain />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
