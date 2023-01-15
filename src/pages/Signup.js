import {
  Box,
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
import Input from '../components/app-ui/inputs/basic/Input';
import PasswordInput from '../components/app-ui/PasswordInput';
import { UserContext } from '../context';
import client from '../feather';

function Signup() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({}); //   const { setUser } = useContext(UserContext);
  const [keepMeIn, setKeepMeIn] = useState(false);
  const [loaderTimer, setLoaderTimer] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'ABCD - Signup';
    setTimeout(() => setLoaderTimer(false), 1500);
  }, []);

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  }) => {
    setLoading(true);
    await client
      .create({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      })
      .then(res => {
        const user = {
          ...res.user,
          currentEmployee: { ...res.user.employeeData[0] },
        };
        // setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
        toast.success('You successfully created in');

        navigate('/login');
      })
      .catch(err => {
        toast.error(
          `Error registering in User, probable network issues  ${err}`
        );
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
          <AuthWrapper paragraph='Create your account'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mt={2}>
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label='First Name'
                      placeholder='Enter your firstname'
                    />
                  )}
                />

                {errors.firstName && (
                  <p style={{ color: 'blue', fontSize: '16px' }}>
                    <> {errors.firstName?.message}</>
                  </p>
                )}
              </Box>
              <Box mt={2}>
                <Controller
                  name='lastName'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label='Last Name'
                      placeholder='Enter your lastname'
                    />
                  )}
                />
                {errors.lastName && (
                  <p style={{ color: 'blue', fontSize: '16px' }}>
                    <>{errors.lastName?.message}</>
                  </p>
                )}
              </Box>

              <Box mt={2}>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label='Email'
                      placeholder='Enter your email'
                    />
                  )}
                />

                {errors.email && (
                  <p style={{ color: 'blue', fontSize: '16px' }}>
                    <> {errors.email?.message}</>
                  </p>
                )}
              </Box>

              <Box mt={2}>
                <Controller
                  name='phoneNumber'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label='Phone Number'
                      placeholder='Enter your email'
                    />
                  )}
                />

                {errors.phoneNumber && (
                  <p style={{ color: 'blue', fontSize: '16px' }}>
                    <> {errors.phoneNumber?.message}</>
                  </p>
                )}
              </Box>

              <Controller
                name='password'
                control={control}
                render={({ field }) => <PasswordInput {...field} />}
              />

              {errors.password && (
                <p style={{ color: 'blue', fontSize: '16px' }}>
                  <>{errors.password?.message}</>
                </p>
              )}

              <p>
                Already have an account?
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
                  to='/login'
                >
                  Click here
                </Link>
              </p>
              <Button
                type='submit'
                label='Signup'
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

export default Signup;
