import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage,
} from '../pages';
import { Header } from '../components/header';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/add-recipe" element={<AddRecipePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/recipe/:id" element={<RecipeDetailPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    );
};
