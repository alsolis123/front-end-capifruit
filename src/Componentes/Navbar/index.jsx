import { NavLink } from "react-router-dom"



const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'


    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Capifruit & Veggies Corporation
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/administrador'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } 
                    >
                        Administrador
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/personal'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } 
                    >
                        Personal
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dias-libres'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } 
                    >
                        Dias Libres
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/pagos'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } 
                    >
                        Pagos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aguinaldo'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    } 
                    >
                        Aguinaldo
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink className='text-black/60'>
                        Usuario
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        Notificaciones
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/administrador'>
                        Cerrar  Sesión
                    </NavLink>
                </li>
            </ul>
        </nav>

        
    )
}

export default Navbar