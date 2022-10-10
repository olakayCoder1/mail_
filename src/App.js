import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Blacklist from './Blacklist';
import CurrentLoan from './CurrentLoan';
import ForgetPassword from './ForgetPassword';
import History from './History';
import HistoryB from './HistoryB';
import Home from './Home';
import HomeB from './HomeB';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeB />} />
        <Route path='/home/history' element={<HistoryB />} />
        <Route path='/home/in-hand' element={<CurrentLoan />} />
        <Route path='/history' element={<History />} />
        <Route path='/blacklist' element={<Blacklist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/password-forget' element={<ForgetPassword />} />
        <Route path='/password-forget/reset' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
