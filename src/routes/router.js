import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage,
} from '../pages';
import { Header } from '../components/header';
import { useState } from 'react';

export const Router = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route
                    path="/"
                    element={
                        <LoginPage
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                />
                <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    );
};
