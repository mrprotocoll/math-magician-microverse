import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CalculatorRoute from './routes/CalculatorRoute';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import Quote from './routes/Quote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<CalculatorRoute />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
