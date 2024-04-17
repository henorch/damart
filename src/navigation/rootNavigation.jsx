import { useState } from 'react';
import AuthComponent from '../components/auth.component';
import { DrawerPanel } from './drawerNavigation';



const RootNavigation = () => {
    const [isAuth, setIsAuth] = useState(false)
    return(
        <>{
            isAuth ? <AuthComponent/> :
            <DrawerPanel/>
        }
        </>
    )
}

export default RootNavigation;