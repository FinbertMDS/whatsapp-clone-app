import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://hzingenieria.com/wp-content/uploads/2017/08/whatsapp-logo-2.png'
                    alt=''
                />
                <div className='login__next'>
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>SIGN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
