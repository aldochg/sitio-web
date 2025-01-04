import { useLocation, NavLink } from "react-router-dom";
import './Breadcrumb.css';

export const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="breadcrumb">
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                console.log(to);
                return (
                    <div key={to}>
                        <a className="breadcrumb__separator"><i className="pi pi-home"></i> </a>
                        <NavLink className="breadcrumb__link">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </NavLink>
                    </div>
                );
            })}
        </nav>
    );
};

