import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@/Layouts/Layout/Layout';

import { Home, About, Logement, Error } from '@/pages/index';



const PublicRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Navigate to="/Home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<Logement />} />

                    <Route path="*" element={<Error />} />
                </Route>
            </Routes >
        </div >
    );
};

export default PublicRouter;