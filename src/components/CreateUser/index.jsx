import db from '../../../db/firebase-config'
import { getDocs , collection, addDoc } from 'firebase/firestore'
import style from './createUser.module.css'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'

const CreateUser = () => {

    const usersRef = collection(db, 'users')
    const [inputNombre , setInputNombre ] = useState("")
    const [inputApellido , setInputApellido ] = useState("")
    const [inputDni , setInputDni ] = useState("")
    const [inputEmail , setInputEmail ] = useState("")
    const [inputEmail2 , setInputEmail2 ] = useState("")
    const [inputPass , setInputPass ] = useState("")


    const addUser = async (e) => {
        e.preventDefault()
        
        if (inputNombre === "" || inputApellido === "" || inputDni === "" || inputEmail === "" || inputEmail2==="" || inputPass === "") {
            swal("Error", "Todos los campos son obligatorios", "error")
            return
        }else if(inputEmail !== inputEmail2){
                swal("Error", "Los emails no coinciden", "error")
            return
        }else{
            const user = {
                nombre: inputNombre,
                apellido: inputApellido,
                dni: inputDni,
                email: inputEmail,
                pass: inputPass,
                admin: false
            }
            await addDoc(usersRef, user )
            swal("Usuario creado", "El usuario se ha creado correctamente", "success")
            handleReset()
        }

    }

    const handleReset  = () => {
        setInputNombre("")
        setInputApellido("")
        setInputDni("")
        setInputEmail("")
        setInputEmail2("")
        setInputPass("")
    }


  return (
    <div className={style.container}>
        <form className={style.form} onSubmit={addUser}>
            <div>
                <h2 className={style.create} >Crear Usuario</h2>
            </div>
            <div className={style.block}>
                <label for="text" className={style.label}>Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    className={style.input} 
                    onChange={(e) => setInputNombre(e.target.value) }
                    value ={inputNombre} />
            </div>
            <div className={style.block}>
                <label for="text" className={style.label}>Apellido</label>
                <input 
                    type="text" 
                    name="apellido" 
                    className={style.input} 
                    onChange={(e) => setInputApellido(e.target.value) }
                    value ={inputApellido} />    
            </div>
            <div className={style.block}>
                <label for="number" className={style.label}>DNI</label>
                <input 
                    type="number" 
                    name="dni" 
                    className={style.input} 
                    placeholder="11222333" 
                    onChange={(e) => setInputDni(e.target.value)}
                    value={inputDni}/>
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
                <label for="email" className={style.label}>Repetir Email</label>
                <input 
                    type="email" 
                    name="email" 
                    className={style.input} 
                    placeholder="nombre@example.com" 
                    onChange={(e) => setInputEmail2(e.target.value) }
                    value={inputEmail2} />
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
                <input type="submit" className={style.button} value="Registrarme"/>
                <input type="button" className={style.button} onClick={handleReset} value="Cancelar"/>
            </div>
        </form>
    </div>
  )
}

export default CreateUser
