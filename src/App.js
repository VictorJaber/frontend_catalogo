import login from "./components/Login";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";
import Ford from "./components/Ford";

function App() {
    return (<BrowserRouter>
        <Routes>

            <Route path={"/"} element={<Login/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/ford"} element={<Ford/>}/>

        </Routes>
    </BrowserRouter>);
}

export default App;
