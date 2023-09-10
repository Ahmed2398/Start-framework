import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/./Home';


function App() {

  const route = createBrowserRouter(
    [
      {path:"/",element:<Layout/>  ,children:
      [
        {index: true , element: <Home/> },
        {path: "Home" , element: <Home/> },
        {path: "About" , element: <About/> },
        {path: "Portfolio" , element: <Portfolio/> },
        {path: "Contact" , element: <Contact/> },
      ]

    }
    ]
  )
  return (
    <div className="App">

      <RouterProvider router={route}/>

    </div>
  );
}

export default App;
