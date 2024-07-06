import styles from './Register.module.css'
import {useState, useEffect} from 'react';

const Register = () => {
  return (
    <>
        <h1>Cadastre-se para postar</h1>
        <p>Crie o seu usuário e compartilhe suas histórias</p>
        <form action="">
            <label>
                <span>Nome: </span>
                <input type="text" name='displayName' required placeholder='Digite o seu nome de usuário'/>
            </label>
            <label>
                <span>Email: </span>
                <input type="email" name='email' required placeholder='Digite o seu E-mail'/>
            </label>
            <label>
                <span>Senha: </span>
                <input type="password" name='password' required placeholder='Digite a sua Senha'/>
            </label>
            <label>
                <span>Confirme sua senha: </span>
                <input type="password" name='confirmPassword' required placeholder='Confirme a sua Senha'/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </>
  )
}

export default Register