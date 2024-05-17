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
import Cart from './pages/Cart.tsx';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="audiobook" index element={<AudioBook />} />
                    <Route path="books" index element={<Books />} />
                    <Route path="download" index element={<Download />} />
                    <Route path="gifts" index element={<Gifts />} />
                    <Route path="price" index element={<Price />} />
                    <Route path="help" index element={<Help />} />
                    <Route path="faq" index element={<FAQ />} />
                    <Route path="register" index element={<Register />} />
                    <Route path="blog" index element={<Blog />} />
                    <Route path="Regulations" index element={<Regulations />} />
                    <Route path="PageNotFound" index element={<PageNotFound />} />
                    <Route path="Login" index element={<Login />} />
                    <Route path="Cart" index element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


