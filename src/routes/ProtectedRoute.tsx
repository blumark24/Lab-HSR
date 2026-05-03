import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({authed,children}:{authed:boolean;children:JSX.Element}){return authed?children:<Navigate to='/login' replace/>}
