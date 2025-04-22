import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element : <Home />
    },
    {
      path:"/login",
      element : <Login />
    }
  ]
)

function App() {
  return (
    <div className="App">
     <RouterProvider router={routes} />
    </div>
  );
}

export default App;
