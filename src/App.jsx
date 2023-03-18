import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

const queryClient = new QueryClient();

const fetchUrl = async (url) => {
  const initialUrl = "https://swapi.dev/api/people";

  const response = await fetch(initialUrl);
  return response.json();
};

function App() {
  // useEffect(() => {
  //   const initialUrl = "https://swapi.dev/api/people";

  //   fetch(initialUrl)
  //     .then((res) => res.json())
  //     .then((data) => console.log("data", data));
  // }, []);

  const fetchUrl = async (url) => {
    const initialUrl = "https://swapi.dev/api/people";

    const response = await fetch(initialUrl);
    return await response.json();
  };

  useEffect(() => {
    const x = fetchUrl("");
    // console.log("data=>", x);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
