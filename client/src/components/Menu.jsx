import { NavLink } from 'react-router';
import '../css/menu.css';

export default () => {
    const routes = [
        { to: "/", label: "Home" },
        { to: "/activities", label: "Activities" },
        { to: "/new", label: "Create Activity" }
    ]

    return (
        <div id="menuToggle">
            <input type="checkbox" id="menuCheckbox"/>

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
            {
                routes.map(route => (
                    <li key={"li-" + route.label } >
                        <NavLink to={route.to}>{route.label}</NavLink>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}