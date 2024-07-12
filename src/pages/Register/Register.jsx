import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css'
import {useState, useEffect} from 'react';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            displayName,
            email,
            password
        };

        if(password !== confirmPassword) {
            setError("As Senhas precisam ser iguais!")
            return;
        }

        const res = await createUser(user);

        if (res) {
            console.log("Cadastro bem sucedido!")
        }
    };

    useEffect(() => {
        if(authError) {
            setError(authError)
        }
    }, [authError])

return (
    <div className={styles.register}>
        <h1>Cadastro</h1>
        <p>Crie o seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit} method='POST'>
            <label>
                <span>Nome: </span>
                <input type="text" name='displayName' required placeholder='Digite o seu nome de usuário' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>Email: </span>
                <input type="email" name='email' required placeholder='Digite o seu E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha: </span>
                <input type="password" name='password' required placeholder='Digite a sua Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirme sua senha: </span>
                <input type="password" name='confirmPassword' required placeholder='Confirme a sua Senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register