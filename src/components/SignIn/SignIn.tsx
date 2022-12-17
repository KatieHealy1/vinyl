import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    Container,
    Button,
    Typography,
    Snackbar,
    Alert as MUIAlert,
    AlertProps,
    AlertTitle,
    CircularProgress
} from '@mui/material'
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form'
import { Input, Input2 } from '../sharedComponents/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { palette } from '@mui/system';

const signinStyles = {
    googleButton:{
        backgroundColor: 'rgb(66, 133, 244)',
        margin: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googlelogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },

    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif',
        textAlign: 'center',
        fontSize: '2em'
    },

    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    }
}

// styled link for nav
const NavA = styled(Link) ({
    display: 'block',
    color: 'black',
    fontFamily: 'sans-serif',
    marginBottom: '20px'
})

// functional components to be used inside of our sign in and sign up
const Alert = (props:AlertProps) => {
    return <MUIAlert elevation={6} variant='filled'/>
}


interface buttonProps{
    open?: boolean,
    onClick?: () => void
}

// functional component to conditionally render google sign in button
const GoogleButton= (props:buttonProps) => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const[signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)


        const signIn = async () =>{
            await signInWithGoogle()
            // storing an authenticated user in a local variable
            localStorage.setItem('myAuth', 'true')

            navigate('/profile')
        }

        const signUsOut = async () =>{
            await signOut(auth)
            //setting local variable to false for signed out user
            localStorage.setItem('myAuth', 'false')
            navigate('/signin')
        }

        if(loading) {
            return <CircularProgress />
        }

        let MyAuth = localStorage.getItem('myAuth')
        if (MyAuth == 'true'){
            return(
                <Button variant='contained' color = 'secondary' onClick={signUsOut}>Sign Out</Button>
            )
        } else {
            return (
                <Button sx={signinStyles.googleButton} onClick={signIn}>Sign In With Google</Button>
            )
        }
    }


interface userProps {
    email?: any,
    password?: any
}



export const SignIn = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const {register, handleSubmit } = useForm({});
    const auth = getAuth();

    const handleSnackOpen = () =>{
        setOpen(true)
    }

    const handleSnackClose = () =>{
        setOpen(false)
        navigate('/profile')
    }

    //onSubmit to grab user info from form
    const onSubmit = async (data: any, event: any) =>{
        console.log(data.email, data.password)

        // add option to sign in with a form
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredentaial) =>{
                //signed in
                //storing authenticated user in local variable
                localStorage.setItem('myAuth', 'true')
                const user = userCredentaial.user;
                navigate('/profile')
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
            });
    }
    return (
        <Container maxWidth='sm' sx={signinStyles.containerStyle}>
            <Typography sx={signinStyles.typographyStyle}>
                Sign In Below
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <Input {...register('email')} name='email' placeholder='place email here..'/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <Input2 {...register('password')} name='password' placeholder='place password here..'/>
                </div>
                <Link to="/profile">Submit</Link>
            </form>
            <br></br>
            <NavA to = "/create-account">Don't Have an Account? Create one now!</NavA>
            <GoogleButton open={open} onClick={handleSnackClose} />
        </Container>
    )
}



