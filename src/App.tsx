import { gql, useQuery } from "@apollo/client";
import { EventPlayer } from "./pages/EventPlayer";

const GET_LESSONS_QUERY = gql`
  query Lessons {
    lessons {
      id
      title
      slug
    }
  }
`;

export const App = () => {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return (
    <>
      <h1 className="text-2xl font-bold">
        {data?.lessons.map((lesson: any) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </h1>
      <EventPlayer />
    </>
  );
};
