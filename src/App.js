import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import Challans from './pages/Challans/Challans';

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path : '/Challans',
      element : <Challans />
    }
  ]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <ToastContainer position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce} />
    </div>
  );
}

export default App;
