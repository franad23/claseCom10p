import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"


function LoginPage() {
const [errorGeneral, setErrorGeneral] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate();
  const baseDeDatos = {
    email: 'franco@franco.com',
    password: 'Franco123!'
  }

  const onSubmit = (data) => {
    const {email, password} = data;
    if (email === baseDeDatos.email) {
        if(password === baseDeDatos.password) {
            localStorage.setItem('auth', true)
            navigate('/admin')
            return
        }
        localStorage.setItem('auth', false)
        return setErrorGeneral('Contraseña incorrecta')
    }
    localStorage.setItem('auth', false)
    setErrorGeneral('Usuario no encontrado')

    }
    useEffect(() => {
        const userIsAuth = JSON.parse(localStorage.getItem('auth'));
        if (userIsAuth === true) {
            navigate('/admin')
        }
    },[])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {
        required: {
          value: true,
          message: 'Email es requerido'
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Debes ingresar un email correcto'
        }
      })} />
      { errors.email && <span>{errors.email.message}</span> }
      <input type="password" {...register('password', {
        required: {
          value: true,
          message: 'Contraseña obligatoria'
        }, 
        pattern: {
          value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: 'mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial'
        }
      })} />
      { errors.password && <span>{errors.password.message}</span> }
      <button>Iniciar Sesion</button>
      {errorGeneral && <span>{errorGeneral}</span> }
    </form>
  )
}

export default LoginPage