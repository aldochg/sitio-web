import { useLocation, NavLink } from "react-router-dom";

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
                        <span className="breadcrumb__separator"> / </span>
                        <NavLink className="breadcrumb__link">
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </NavLink>
                    </div>
                );
            })}
        </nav>
    );
};

