import Login from "./components/Login";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Login/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/ford"} element={<Products/>}/>

            </Routes>
        </BrowserRouter>);
}

export default App;
