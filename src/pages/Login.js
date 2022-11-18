import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Loader } from '../components';
import AuthWrapper from '../components/app-ui/AuthWrapper';
import Button from '../components/app-ui/Button';
import Input from '../components/app-ui/Input';
import PasswordInput from '../components/app-ui/PasswordInput';
import { UserContext } from '../context';
import client from '../feather';

function Login() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { setUser } = useContext(UserContext);
  const [keepMeIn, setKeepMeIn] = useState(false);
  const [loaderTimer, setLoaderTimer] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - Login';
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
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
        toast.success('You successfully logged in');

        navigate('/app');
      })
      .catch(err => {
        toast.error(`Error loggin in User, probable network issues  ${err}`);
      });
  };

  return (
    <>
      {/*  {console.error('hello there')} */}
      {loaderTimer ? (
        <Loader />
      ) : (
        <AuthWrapper paragraph='Login here as an organization'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer theme='colored' />

            <Controller
              name='email'
              control={control}
              render={({ field: { ref: _re, ...field } }) => (
                <Input {...field} type='email' label='Email' />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field: { ref: _re, ...field } }) => (
                <PasswordInput {...field} />
              )}
            />
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

          <div className='bottom-center'>
            <p>or continue with</p>
            <a href='#'>
              <i className='bi bi-google' />
            </a>
            <a href=''>
              <i className='bi bi-facebook' />
            </a>
            <a href=''>
              <i className='bi bi-linkedin' />
            </a>

            <p>
              Want to create organization?
              <Link
                className='nav-link'
                style={{
                  padding: '0',
                  background: 'transparent',
                  color: 'blue',
                  marginLeft: '0.6rem',
                }}
                to='/signup'
              >
                Click here
              </Link>
            </p>
          </div>
        </AuthWrapper>
      )}
    </>
  );
}

export default Login;
