import {
  Alert,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Snackbar,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Loader } from '../components';
import AuthWrapper from '../components/app-ui/AuthWrapper';
import Button from '../components/app-ui/Button';
import Input from '../components/app-ui/inputs/basic/Input';
import PasswordInput from '../components/app-ui/PasswordInput';
import { UserContext } from '../context';
import client from '../feather';

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, control, register } = useForm();
  //   const { setUser } = useContext(UserContext);
  const [keepMeIn, setKeepMeIn] = useState(false);
  const [loaderTimer, setLoaderTimer] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClose = event => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'ABCD - Login';
    setTimeout(() => setLoaderTimer(false), 1500);
  }, []);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    await client
      .authenticate({
        strategy: 'local',
        email,
        password,
      })
      .then(res => {
        const user = {
          ...res.user,
          currentEmployee: { ...res.user.employeeData[0] },
        };
        // setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
        toast.success('You successfully logged in');
        setOpen(true);
        setSuccess(true);

        navigate('/app');
      })
      .catch(err => {
        toast.error(`Error loggin in User, probable network issues  ${err}`);
        setLoading(false);
      });
  };

  return (
    <>
      {/*  {console.error('hello there')} */}
      {loaderTimer ? (
        <Loader />
      ) : (
        <>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='success'>
              {success ? 'Sucessfully Logged' : 'Error while loogging i'}
            </Alert>
          </Snackbar>
          <AuthWrapper paragraph='Login here as an organization'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type='email' label='Email' register={register('email')} />
              <PasswordInput register={register('password')} />

              <FormControl
                component='fieldset'
                sx={{ width: '1r00%', mt: 1, mb: 1 }}
              >
                <FormGroup>
                  <FormControlLabel
                    label='Keep me Logged in'
                    control={
                      <Checkbox
                        name='keepMeIn'
                        onChange={(_, value) => setKeepMeIn(value)}
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
              <p>
                Forgot password?
                <Link
                  className='nav-link'
                  style={{
                    padding: '0',
                    background: 'transparent',
                    color: 'blue',
                    marginLeft: '0.6rem',
                    marginBottom: '0.6rem',
                    display: 'inline-block',
                  }}
                  to='/forgot-password'
                >
                  Click here
                </Link>
              </p>
              <Button
                type='submit'
                label='Login'
                fullwidth='true'
                loading={loading}
              />
            </form>
          </AuthWrapper>
        </>
      )}
    </>
  );
}

export default Login;
