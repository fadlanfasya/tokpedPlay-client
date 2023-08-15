import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//layout and pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Login from './pages/Login';
import Register from './pages/Register';

// import './App.css';

//router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/video/:_id" element={<VideoDetail />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
