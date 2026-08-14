import { useForm } from "react-hook-form"
import { getLS, setLS } from "../utils/localstorage"
import { useState } from "react"
import { useNavigate } from "react-router";

function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

  const submit = (data) => {
    const users = getLS('users');
    const userFound = users.find((user) => user.email === data.email);
    if (!userFound) {
        setError('Usuario no encontrado');
        return
    }
    if (userFound.password !== data.password) {
        setError('Contraseña incorrecta');
        return
    }
    setLS('userAuth', userFound)
    navigate('/admin')
}

  return (
    <form onSubmit={handleSubmit(submit)}>
        <input {...register('email', {
            required: {
                value: true,
                message: 'Email requerido'
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'DEBE SER UN EMAIL'
            }
        })}/>
        { errors.email && <span>{errors.email.message}</span> }
        <input type="password" {...register('password', {
            required: {
                value: true,
                message: 'Password obligatorio'
            }
        })}/>
        { errors.password && <span>{errors.password.message}</span> }
        <button>Iniciar sesion</button>
        <span>{error}</span>
    </form>
)
}

export default Login