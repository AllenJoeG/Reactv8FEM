import React, {useState} from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import {createRoot} from 'react-dom/client';
import SearchParams from './SearchParams';
import Details from './Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//Instantiate and configure tanstack React Query Client. Wrap in the return below.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // How long to cache for, in ms, OR infinity.
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },

})

// App MUST be capitalized
const App = () => {
  
  return(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/"><h1>Adopt these biological constructs!</h1></Link>
        </header>
            
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>  
    </BrowserRouter>
  )
};

//grabs root div
const container = document.getElementById("root");
//establishes said div as React Root. replaces: [ReactDOM.render(container, <App />)]
// const root = ReactDOM.createRoot(container);
const root = createRoot(container);
//instructs root to render our base-level App component. Can be reused to rerender your entire app with a simple root.render call
// root.render(React.createElement(App));
//equivalent to:
root.render(<App />);

// React.createElement(arg1, arg2, arg3)
  // arg1 type of html element, arg2 (null or object with attributes handing down i.e. id:"", className=""), arg3 is children
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Mina",
  //     animal: "Cat",
  //     breed: "Tortoiseshell",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Quade",
  //     animal: "Cat",
  //     breed: "Orangeboi",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Spooder",
  //     animal: "Spider",
  //     breed: "Yellowsac",
  //   }),
  // ]);