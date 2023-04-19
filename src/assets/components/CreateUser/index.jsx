import React from 'react'
import style from './createUser.module.css'

const CreateUser = () => {
  return (
    <div className={style.container}>
        <form className={style.form}>
            <div>
                <h2 className={style.create} >Crear Usuario</h2>
            </div>
            <div className={style.block}>
                <label for="text" className={style.label}>Nombre</label>
                <input type="text" name="nombre" className={style.input} controlId="crear_nombre"/>
            </div>
            <div className={style.block}>
                <label for="text" className={style.label}>Apellido</label>
                <input type="text" name="apellido" className={style.input} controlId="crear_apellido"/>    
            </div>
            <div className={style.block}>
                <label for="number" className={style.label}>DNI</label>
                <input type="number" name="dni" className={style.input} controlId="crear_dni" placeholder="11222333"/>
            </div>
            <div className={style.block}>
                <label for="email" className={style.label}>Email</label>
                <input type="email" name="email" className={style.input} controlId="crear_email" placeholder="nombre@example.com"/>
            </div>
            <div className={style.block}>
                <label for="contraseña" className={style.label}>Contraseña</label>
                <input type="password"  className={style.input} controlId="create_pass" placeholder="*****"  pattern="[a-zA-Z0-9]{6,15}" title="Una contraseña válida debe estar compuesta por letras y/o números y tener una longitud entre 6 y 15 caracteres" required/>
            </div>
            <div>
                <input type="submit" controlId="crear_usuario" className={style.button} value="Ingresar"/>
                <input type="button" className={style.button} value="Cancelar"/>
            </div>
        </form>
    </div>
  )
}

export default CreateUser