import { useAppSelector } from '../redux/hooks'
import { Navigate, Outlet, } from 'react-router-dom';

export default function PrivateRoutes() {

    const token = useAppSelector(state => state.user.token);
    const user = useAppSelector(state => state.user.user);

    if (!user || !token)
        return <Navigate to="/login"/>

    return <Outlet />
}
