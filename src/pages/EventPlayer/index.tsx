import { Header, Sidebar, VideoPlayer, Lesson } from "../../components";

export const EventPlayer = () => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <VideoPlayer />
        <Lesson />
      </main>
    </div>
  );
};
