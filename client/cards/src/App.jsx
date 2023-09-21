import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CardProvider } from './contexts/CardContext';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';

import { HomePage } from './components/homePage/HomePage';
import { Catalog } from './components/catalog/Catalog';
import { AddCard } from './components/addCard/addCard';
import { CardDetails } from './components/cardDetails/CardDetails';
import { EditCard } from './components/editCard/editCard';

// import './App.css';

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
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/add-card' element={<AddCard />} />
                        <Route path='/catalog/:cardId' element={<CardDetails />} />
                        <Route path='/catalog/:cardId/edit' element={<EditCard />} />
                    </Routes>
                    <Footer />
                </CardProvider>
            </AuthProvider>
        </>
    );
}

export default App;
