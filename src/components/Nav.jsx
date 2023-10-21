import tutorverselogoresize from "../assets/images/tutorverselogoresize.png";
import { navLinks, regLinks } from "../constants";

const Nav = () => {
  return (
    <nav className="navbar bg-black">
      <div className="navbar-start flex items-center">
        <div className="flex items-center justify-center pl-6">
          <img src={tutorverselogoresize} alt="Logo" height={100} width={100} className="p-3"/>
          <a className="normal-case font-bold text-2xl">tutorverse</a>
        </div>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 px-2 z-[1] shadow bg-base-100 rounded-box w-36">
            {regLinks.map((reg) => (
                <li key={reg.label}>
                  <a href={reg.href}>{reg.label}</a>
                </li>
            ))}
            {navLinks.map((nav) => (
                <li key={nav.label}>
                  <a href={nav.href}>{nav.label}</a>
                </li>
            ))}
        </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal text-base">
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end lg-flex max-lg:hidden">
        <ul className="menu menu-horizontal pr-60 text-base font-bold uppercase">
          {regLinks.map((reg) => (
            <li key={reg.label}>
              <a href={reg.href}>{reg.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
