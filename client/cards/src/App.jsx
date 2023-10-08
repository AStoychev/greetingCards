import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CardProvider } from './contexts/CardContext';
import { OrderProvider } from './contexts/OrderContext';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';

import { HomePage } from './components/homePage/HomePage';
import { Catalog } from './components/catalog/Catalog';
import { AddCard } from './components/addCard/AddCard';
import { CardDetails } from './components/cardDetails/CardDetails';
import { EditCard } from './components/editCard/editCard';

import { AdminMainPage } from './components/admin/adminMainPage/AdminMainPage';
import { AdminAllOrders } from './components/admin/allOrders/AllOrders';

import { FirstStepOrder } from './components/makeOrder/firstStepOrder/FirstStepOrder';
import { SecondStepOrder } from './components/makeOrder/secondStepOrder/SecondStepOrder';
import { ThirtStepOrder } from './components/makeOrder/thirtStepOrder/ThirtStepOrder';
import { CompleteOrderMenu } from './components/makeOrder/completeOrderMenu/CompleteOrderMenu';

// import './App.css';

function App() {
    return (
        <>
            <AuthProvider>
                <CardProvider>
                    <OrderProvider>
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

                            <Route path='/make-first-step-order' element={<FirstStepOrder />} />
                            <Route path='/make-second-step-order' element={<SecondStepOrder />} />
                            <Route path='/make-thirth-step-order' element={<ThirtStepOrder />} />
                            <Route path='/complete-order' element={<CompleteOrderMenu />} />

                            <Route path='/admin-main-page/:userId' element={<AdminMainPage />} />
                            <Route path='/admin-main-page/all-order/:userId' element={<AdminAllOrders />} />
                        </Routes>
                        <Footer />
                    </OrderProvider>
                </CardProvider>
            </AuthProvider>
        </>
    );
}

export default App;