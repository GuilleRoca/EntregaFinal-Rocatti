import db from '../../../db/firebase-config'
import style from './login.module.css'
import { getDocs , collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'

const Login = () => {

  const [users, setUsers] = useState([])
  const usersRef = collection(db, 'users')
  const [inputEmail , setInputEmail ] = useState("")
  const [inputPass , setInputPass ] = useState("")

  const subirAlLs = (clave , valor) =>{
    localStorage.setItem( clave , JSON.stringify(valor))
}

  const getUsers = async (e) => {
    const usersCollection = await getDocs(usersRef)
    const users = usersCollection.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id
    }))
    setUsers(users)    
  }

  const validateUser = (e) => {
    e.preventDefault()
    const user = users.find((user) => user.email == inputEmail && user.pass == inputPass)
    if (user) {
      swal("Bienvenido", "Has iniciado sesión correctamente", "success")
      subirAlLs("user", user)
      handleReset()
    }else{
      swal("Error", "El usuario o la contraseña son incorrectos", "error")
    }
  }

  useEffect(() => {
    getUsers()
}, [])

const handleReset  = () => {
  setInputEmail("")
  setInputPass("")
}

  return (
    <div className={style.container}>
        <form className={style.form} onSubmit={validateUser}>
            <div>
                <h2 className={style.create} >Iniciar Sesión</h2>
            </div>
            <div className={style.block}>
                <label for="email" className={style.label}>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    className={style.input} 
                    placeholder="nombre@example.com" 
                    onChange={(e) => setInputEmail(e.target.value) }
                    value={inputEmail} />
            </div>
            <div className={style.block}>
                <label for="contraseña" className={style.label}>Contraseña</label>
                <input 
                    type="password"  
                    className={style.input}
                    placeholder="*****" 
                    pattern="[a-zA-Z0-9]{6,15}" 
                    title="Una contraseña válida debe estar compuesta por letras y/o números y tener una longitud entre 6 y 15 caracteres" required 
                    onChange={(e) => setInputPass(e.target.value)}
                    value={inputPass} />
            </div>
            <div>
                <input type="submit" className={style.button} value="Login"/>
                <input type="button" className={style.button} onClick={handleReset} value="Cancelar"/>
            </div>
        </form>
    </div>
  )
}

export default Login