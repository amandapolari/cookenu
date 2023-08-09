import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    LoginPage,
    SignupPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage,
} from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
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
