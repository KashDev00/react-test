import './App.css'
import {NavLink} from "react-router-dom";

function App() {

    return (
        <>
            <div>Visits frontend</div>
            <NavLink to={'/users'}>Go to users</NavLink>
            <NavLink to={'/office'}>Go to office</NavLink>
        </>
    )
}

export default App
