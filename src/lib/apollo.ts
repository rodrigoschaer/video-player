import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4plowef20bl01ywhceb6ph8/master",
  cache: new InMemoryCache(),
});
