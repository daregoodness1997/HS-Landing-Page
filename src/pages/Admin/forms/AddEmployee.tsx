import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createEmployeeSchema } from '../schema';
import client from '../../../feather';
import { Box } from '@mui/material';
import Input from '../../../components/app-ui/inputs/basic/Input';
import PasswordInput from '../../../components/app-ui/PasswordInput';
import { BottomWrapper } from '../../../components/app-ui/styles';
import AppButton from '../../../components/app-ui/app-button';

interface Props {
  setOpen?: any;
}

const AddEmployee: React.FC<Props> = ({ setOpen }) => {
  const data = localStorage.getItem('user') || '';

  const user = JSON.parse(data);

  const EmployeeServe = client.service('employee');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(createEmployeeSchema),

    defaultValues: {
      firstname: '',
      lastname: '',
      profession: '',
      position: '',
      phone: '',
      email: '',
      department: '',
      deptunit: '',
      password: '',
      facility: user.currentEmployee.facilityDetail._id || '',
    },
  });
  const submit = async (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box mb='1rem'>
        <Input
          label='First Name'
          register={register('firstname')}
          errorText={errors?.firstname?.message}
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
          register={register('deptunit')}
          errorText={errors?.deptunit?.message}
        />
      </Box>

      <PasswordInput register={register('password')} />
      <BottomWrapper>
        <button onClick={() => setOpen(false)}>Cancel</button>
        <AppButton label='Save' type='submit' />
      </BottomWrapper>
    </form>
  );
};

export default AddEmployee;
