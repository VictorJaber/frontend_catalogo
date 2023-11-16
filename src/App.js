import Login from "./components/Login";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import User from "./components/User";

function App() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Login/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/ford"} element={<Products/>}/>
                <Route path={"/profile"} element={<User/>}/>

            </Routes>
        </BrowserRouter>);
}

export default App;
