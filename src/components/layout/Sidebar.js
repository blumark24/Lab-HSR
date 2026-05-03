import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
const links = [['/', 'Dashboard'], ['/users', 'Users'], ['/clients', 'Clients'], ['/tasks', 'Tasks'], ['/finance', 'Finance'], ['/reports', 'Reports'], ['/notifications', 'Notifications'], ['/settings', 'Settings']];
export default function Sidebar() { return _jsx("aside", { className: 'bg-[#0A0E1A] border border-[#003580] rounded-2xl p-4', children: links.map(([to, t]) => _jsx(NavLink, { to: to, className: 'block p-2 rounded hover:bg-[#003580]/40', children: t }, to)) }); }
