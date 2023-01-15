import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Loader } from '../components';
import AuthWrapper from '../components/app-ui/AuthWrapper';
import Button from '../components/app-ui/Button';
import Input from '../components/app-ui/inputs/basic/Input';
import PasswordInput from '../components/app-ui/PasswordInput';
import client from '../feather';
import { createEmployeeSchema } from './Admin/schema';

function Signup() {
  const navigate = useNavigate();
  const EmployeeServe = client.service('employee');
  const data = localStorage.getItem('user') || '';

  // const user = JSON.parse(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createEmployeeSchema),

    defaultValues: {
      firstname: '',
      middlename: '',
      lastname: '',
      profession: '',
      position: '',
      phone: '',
      email: '',
      department: '',
      depunit: '',
      password: '',
      facility: '60203e1c1ec8a00015baa357',
      // facility: user.currentEmployee.facilityDetail._id,
    },
  });
  const [loaderTimer, setLoaderTimer] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'ABCD - Signup';
    setTimeout(() => setLoaderTimer(false), 1500);
  }, []);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setMessage('');
    setError(false);
    setSuccess(false);
    data.createdby = '';
    data.facility = '60203e1c1ec8a00015baa357';

    setLoading(true);
    await EmployeeServe.create(data)
      .then(res => {
        e.target.reset();
        setSuccess(true);
        toast.success(`User successfully created`);

        setSuccess(false);
      })
      .catch(err => {
        toast.error(`Sorry, You weren't able to create User. ${err}`);
      });

    setLoading(false);
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
              <Box mb='1rem'>
                <Input
                  label='First Name'
                  register={register('firstname')}
                  errorText={errors?.firstname?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Middle Name'
                  register={register('middlename')}
                  errorText={errors?.middlename?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Last Name'
                  register={register('lastname')}
                  errorText={errors?.lastname?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Position'
                  register={register('position')}
                  errorText={errors?.position?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Phone'
                  type='tel'
                  register={register('phone')}
                  errorText={errors?.phone?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Email'
                  type='Email'
                  register={register('email')}
                  errorText={errors?.email?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Department'
                  register={register('department')}
                  errorText={errors?.department?.message}
                />
              </Box>
              <Box mb='1rem'>
                <Input
                  label='Department Unit'
                  register={register('depunit')}
                  errorText={errors?.depunit?.message}
                />
              </Box>

              <PasswordInput register={register('password')} />
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
