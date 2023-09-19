import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CardProvider } from './contexts/CardContext';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { HomePage } from './components/homePage/HomePage';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';

import { AddCard } from './components/addCard/addCard';

import './App.css';

function App() {
    return (
        <>
            <AuthProvider>
                <CardProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/add-card' element={<AddCard />} />
                    </Routes>
                    {/* <Footer /> */}
                </CardProvider>
            </AuthProvider>
        </>
    );
}

export default App;
