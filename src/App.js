import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Clients from './pages/Clients';
import Tasks from './pages/Tasks';
import Finance from './pages/Finance';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import ProtectedRoute from './routes/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
export default function App() { const { profile, loading } = useAuth(); if (loading)
    return _jsx("div", { className: 'p-8', children: "Loading..." }); const authed = !!profile; return _jsxs(Routes, { children: [_jsx(Route, { path: '/login', element: _jsx(Login, {}) }), _jsx(Route, { path: '*', element: _jsx(ProtectedRoute, { authed: authed, children: _jsxs("div", { className: 'min-h-screen p-4 grid grid-cols-[1fr_260px] gap-4', children: [_jsxs("main", { className: 'space-y-4', children: [_jsx(Topbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Dashboard, {}) }), _jsx(Route, { path: '/users', element: _jsx(Users, {}) }), _jsx(Route, { path: '/clients', element: _jsx(Clients, {}) }), _jsx(Route, { path: '/tasks', element: _jsx(Tasks, {}) }), _jsx(Route, { path: '/finance', element: _jsx(Finance, {}) }), _jsx(Route, { path: '/reports', element: _jsx(Reports, {}) }), _jsx(Route, { path: '/notifications', element: _jsx(Notifications, {}) }), _jsx(Route, { path: '/settings', element: _jsx(Settings, {}) })] })] }), _jsx(Sidebar, {})] }) }) })] }); }
