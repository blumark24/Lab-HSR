import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({ authed, children }) { return authed ? children : _jsx(Navigate, { to: '/login', replace: true }); }
