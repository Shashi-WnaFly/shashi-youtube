import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/",
        element: <MainContainer />
      }
      
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="relative">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
