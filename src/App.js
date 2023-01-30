import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Menu from './components/Menu';
import QuestionScreen from './pages/QuestionScreen';
import WhoScreen from './pages/WhoScreen';
import Rules from './pages/Rules'

function App() {
  return (
    <>
      <Menu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/question" element={<QuestionScreen/>}/>
          <Route exact path="/who" element={<WhoScreen/>}/>
          <Route exact path="/rules" element={<Rules/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
