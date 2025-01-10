import { useLocation, NavLink } from "react-router-dom";
import "./Breadcrumb.css";

export const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <NavLink to="/" className="breadcrumb__link">
        <i className="pi pi-home"></i> Home
      </NavLink>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={to} className="breadcrumb__separator">
            <span className="breadcrumb__arrow"> &gt;&gt; </span>
            <NavLink to={to} className="breadcrumb__link">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};
