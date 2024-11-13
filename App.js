import LogAdmin from './Dashboard/LogAdmin';
import UserProfilePage from './Profile/UserProfile';
import AdminPanel from './Dashboard/AdminPanel';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import MyMainForms from './MyMainForms/MyMainForms';
import RegistrationForm from './RegistrationForm/registration';

function App() {
  return (
    <div>
      <h1>Welcome to the Registration Page</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;