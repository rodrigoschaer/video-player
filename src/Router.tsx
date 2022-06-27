import { Route, Routes } from "react-router-dom";
import { EventPlayer, Login } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/event/lesson/:slug" element={<EventPlayer />} />
    </Routes>
  );
};
