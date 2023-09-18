import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { HomePage } from './components/homePage/HomePage';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';

import './App.css';

function App() {
    return (
        <>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
                {/* <Footer /> */}
            </AuthProvider>
        </>
    );
}

export default App;
