import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './home';
import {Login} from './LoginSystem/login';
import {Registration} from "./LoginSystem/registration";
import {UserManager} from "./LoginSystem/userManager";
import {ApartmentsList} from "./apartmentSystem/apartmentsList";
import {ApartmentView} from "./apartmentSystem/apartmentView";
import DocumentList from "./documents/DocumentList";
import { ApartmentProvider } from './contexts/ApartmentContext';
import PropertyForm from './components/PropertyForm';
import ApartmentList from './components/ApartmentList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const {initialState} = UserManager();
    const [userInfo, setUserInfo] = useState(initialState)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home userInfo={userInfo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} />} />
                    <Route path="/register" element={<Registration setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} />} />
                    <Route path="/apartments" element={<ApartmentsList userInfo={userInfo} loggedIn={loggedIn}/>} />
                    <Route path="/apartments/:id" element={<ApartmentView userInfo={userInfo} loggedIn={loggedIn}/>} />
                    <Route path="/documents" element={<DocumentList />} />
                    <Route path="/property-form" element={<PropertyForm />} />
                    <Route path="/apartment-list" element={<ApartmentList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
