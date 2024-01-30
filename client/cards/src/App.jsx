import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CardProvider } from './contexts/CardContext';
import { OrderProvider } from './contexts/OrderContext';
import { ChatProvider } from './contexts/ChatContext';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';

import { HomePage } from './components/homePage/HomePage';
import { Catalog } from './components/catalog/Catalog';
import { AddCard } from './components/addCard/AddCard';
import { CardDetails } from './components/cardDetails/CardDetails';
import { EditCard } from './components/editCard/EditCard';

import { AdminMainPage } from './components/admin/adminMainPage/AdminMainPage';
import { AdminAllOrders } from './components/admin/allOrders/AllOrders';
import { UnprocessedOrders } from './components/admin/unprocessedOrders/UnprocessedOrders';
import { SendOrders } from './components/admin/sendOrders/SendOrders';
import { ReceivedOrders } from './components/admin/receivedOrders/ReceivedOrders';
import { ReturnedOrders } from './components/admin/returnedOrders/ReturnedOrders';
import { RefussedOrders } from './components/admin/refusedOrders/RefussedOrders';

import { FirstStepOrder } from './components/makeOrder/firstStepOrder/FirstStepOrder';
import { SecondStepOrder } from './components/makeOrder/secondStepOrder/SecondStepOrder';
import { ThirtStepOrder } from './components/makeOrder/thirtStepOrder/ThirtStepOrder';
import { CompleteOrderMenu } from './components/makeOrder/completeOrderMenu/CompleteOrderMenu';

import { ResetPasswordStepOne } from './components/resetPassword/stepOne/ResetPasswordStepOne';
import { RedirectPageStepOne } from './components/resetPassword/redirectPage/RedirectPageStepOne';
import { ResetPasswordStepTwo } from './components/resetPassword/stepTwo/ResetPasswordStepTwo';
import { ResetPasswordStepThree } from './components/resetPassword/stepThree/ResetPasswordStepThree';

// import io from 'socket.io-client';

// import './App.css';

// let socket;
// const CONNECTION_PORT = 'localhost:3000/'

function App() {

    // const [room, setRoom] = useState('');
    // const [userName, setUserName] = useState('');
    // useEffect(() => {
    //     socket = io(CONNECTION_PORT)
    // }, [CONNECTION_PORT])

    return (
        <>
            <AuthProvider>
                <CardProvider>
                    <OrderProvider>
                        <ChatProvider>
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
                                <Route path='/admin-main-page/unprocessed-order/:userId' element={<UnprocessedOrders />} />
                                <Route path='/admin-main-page/send-order/:userId' element={<SendOrders />} />
                                <Route path='/admin-main-page/received-order/:userId' element={<ReceivedOrders />} />
                                <Route path='/admin-main-page/returned-order/:userId' element={<ReturnedOrders />} />
                                <Route path='/admin-main-page/refused-order/:userId' element={<RefussedOrders />} />

                                <Route path='/reset-password-step-one' element={<ResetPasswordStepOne />} />
                                <Route path='/reset-password-step-two/:cryptEmail' element={<ResetPasswordStepTwo />} />
                                <Route path='/reset-password-step-three/:cryptEmail' element={<ResetPasswordStepThree />} />

                                <Route path='/redirect-page-reset-password' element={<RedirectPageStepOne />} />
                            </Routes>
                            <Footer />
                        </ChatProvider>
                    </OrderProvider>
                </CardProvider>
            </AuthProvider>
        </>
    );
}

export default App;