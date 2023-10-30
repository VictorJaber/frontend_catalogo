import login from "./components/Login";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";

function App() {
    return (<BrowserRouter>
        <Routes>

            <Route path={"/"} element={<Login/>}/>
            <Route path={"/home"} element={<Home/>}/>

        </Routes>
    </BrowserRouter>);
}

export default App;
