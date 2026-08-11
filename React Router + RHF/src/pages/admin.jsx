import { useEffect } from "react"
import { useNavigate } from "react-router";

function AdminPage() {
    const navigate = useNavigate();
        useEffect(() => {
        const userIsAuth = JSON.parse(localStorage.getItem('auth'));
        if (!userIsAuth) {
            navigate('/login')
        }
    },[])
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage