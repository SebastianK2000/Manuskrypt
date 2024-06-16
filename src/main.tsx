import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Layout from './layout/Layout.tsx';
import AudioBook from './pages/AudioBook.tsx';
import Books from './pages/Books.tsx';
import Gifts from './pages/Gifts.tsx';
import Download from './pages/Download.tsx';
import Price from './pages/Price.tsx';
import Help from './pages/Help.tsx';
import FAQ from './pages/FAQ.tsx';
import Register from './pages/Register.tsx';
import Blog from './pages/Blog.tsx';
import Regulations from './pages/Regulations.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import Login from './pages/Login.tsx';
import Cart from './cart/Cart.tsx';
import Settings from './pages/Settings.tsx';
import Home from './pages/Home.tsx';
import { ShopContextProvider } from "./context/shop-context";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShopContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<App />} />
                        <Route path="audiobook" element={<AudioBook />} />
                        <Route path="download" element={<Download />} />
                        <Route path="gifts" element={<Gifts />} />
                        <Route path="price" element={<Price />} />
                        <Route path="help" element={<Help />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="register" element={<Register />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="regulations" element={<Regulations />} />
                        <Route path="login" element={<Login />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="app" element={<App />} />
                        <Route path="books" element={<Books />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </ShopContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
