import { Route, Routes } from "react-router-dom";
import { EventPlayer } from "./pages/EventPlayer";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<p>{"<Home />"}</p>} />
      <Route path="/event/lesson/:slug" element={<EventPlayer />} />
    </Routes>
  );
};
