import { gql } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query Lessons {
    lessons {
      title
      slug
    }
  }
`;

export const App = () => {
  useEffect(() => {
    client
      .query({ query: GET_LESSONS_QUERY })
      .then((response) => console.log(response.data));
  });

  return <h1 className="text-2xl font-bold"> Rodrigo OS </h1>;
};
