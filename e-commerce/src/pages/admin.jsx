import { useEffect, useState } from "react"
import { getLS } from "../utils/localstorage"
import { useNavigate } from "react-router";

function Admin() {
    const [ isUserAdmin, setIsUserAdmin ] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        function checkRole () {
            const userLogged = getLS('userAuth');
            if (!userLogged) { 
                navigate('/login');
                return
            }
            if (userLogged.role === 'buyer') {
                setIsUserAdmin(false)
                return
            }
            setIsUserAdmin(true)
        }
        checkRole();
    }, [])

    if (!isUserAdmin) {
        return <span>NO TENES PERMISOS</span>
    }

  return (
    <div>Admin</div>
  )
}

export default Admin

// CREAR UN CRUD DE PRODUCTOS, EN UNA TABLA Y DEBEN TENER 
// LOS SIGUIENTES DATOS, NOMBRE, DESCRIPCION, PRECIO
// ID Y STOCK, SE DEBEN GUARDAR EN EL LS.
// CRUD = CREAR,LEER, EDITAR, Y BORRAR