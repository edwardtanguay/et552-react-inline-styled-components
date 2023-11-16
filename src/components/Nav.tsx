import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-3 bg-slate-500 py-1 px-2 content">
			<li><NavLink to="/welcome">Welcome</NavLink></li>
			<li><NavLink to="/info">Info</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};
