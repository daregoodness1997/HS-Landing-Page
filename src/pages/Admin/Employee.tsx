import { Box, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/app-ui/Button';
import CustomTable from '../../components/app-ui/customtable';
import Input from '../../components/app-ui/inputs/basic/Input';
import CustomSelect from '../../components/app-ui/inputs/basic/Select';
import Textarea from '../../components/app-ui/inputs/basic/Textarea';
import BoxModal from '../../components/app-ui/modal/BoxModal';
import client from '../../feather';
import { BandSchema, createBandSchema, EmployeeSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BottomWrapper } from '../../components/app-ui/styles';
import AppButton from '../../components/app-ui/app-button';

const Employees = () => {
  const data = localStorage.getItem('user') || '';

  const user = JSON.parse(data);
  const EmployeeServe = client.service('employee');

  const [open, setOpen] = useState(false);
  const [selectedBand, setSelectedBand] = useState();
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(50);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [modalState, setModalState] = useState('');
  const bandTypeOptions = [
    'Provider',
    'Company',
    'Patient',
    'Plan',
    'Corporate Sponsor',
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(createBandSchema),

    defaultValues: {
      name: '',
      bandType: '',
      description: '',
      facility: user.currentEmployee.facilityDetail._id,
    },
  });

  const handleRowClicked = row => {
    setSelectedBand(row);
    setOpen(true);
    setModalState('View');
  };
  const handleCreate = row => {
    setModalState('Create');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getEmplooyees = async () => {
    setLoading(true);
    if (user.currentEmployee) {
      const findEmployees = await EmployeeServe.find({
        query: {
          facility: user.currentEmployee.facilityDetail._id,
          $limit: 200,
          $sort: {
            createdAt: -1,
          },
        },
      });

      await setEmployees(findEmployees.data);
      setLoading(false);
    } else {
      if (user.stacker) {
        const findEmployees = await EmployeeServe.find({
          query: {
            $limit: 200,
            $sort: {
              facility: -1,
            },
          },
        });

        await setEmployees(findEmployees.data);
      }
    }
  };

  useEffect(() => {
    if (user) {
      getEmplooyees();
    } else {
    }
    EmployeeServe.on('created', obj => getEmplooyees());
    EmployeeServe.on('updated', obj => getEmplooyees());
    EmployeeServe.on('patched', obj => getEmplooyees());
    EmployeeServe.on('removed', obj => getEmplooyees());
    return () => {};
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data.bandType === '') {
      alert('Kindly choose band type');
      return;
    }
    setMessage('');
    setError(false);
    setSuccess(false);
    // data.createdby=user._id
    console.log(data);
    if (user.currentEmployee) {
      data.facility = user.currentEmployee.facilityDetail._id; // or from facility dropdown
    }
    EmployeeServe.create(data)
      .then(res => {
        //console.log(JSON.stringify(res))
        e.target.reset();
        /*  setMessage("Created Band successfully") */
        setSuccess(true);
        toast.success('Band Sucessfully created');
        setOpen(false);
        setSuccess(false);
      })
      .catch(err => {
        toast.error(`Error creating band  ${err}`);
      });
  };

  return (
    <>
      <BoxModal open={open} onClose={handleClose} header='Band'>
        {modalState === 'Create' && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Box mb='1rem'>
                <Input
                  label='Name of Band'
                  register={register('name')}
                  errorText={errors?.name?.message}
                  sx={{ marginBottom: '2rem' }}
                />
              </Box>
              <Box mb='1rem'>
                <CustomSelect
                  label='Choose Band Type'
                  name='bandType'
                  options={bandTypeOptions}
                  register={register('bandType')}
                />
              </Box>
              <Box>
                <Textarea
                  label='Description'
                  register={register('description')}
                  name='description'
                />
              </Box>
            </Grid>
            <BottomWrapper>
              <button onClick={() => setOpen(false)}>Clear</button>
              <AppButton label='Save' type='submit' />
            </BottomWrapper>
          </form>
        )}
      </BoxModal>
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Typography
            variant='body2'
            sx={{
              fontSize: '18px',
            }}
          >
            Welcome
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '20px',
              fontWeight: 'bold',
              marginLeft: 1,
            }}
          >
            {user.firstname} {user.lastname} 👋
          </Typography>
          <AppButton onClick={handleCreate} label='Create Employee' />
        </Box>
        <CustomTable
          title={''}
          columns={EmployeeSchema}
          data={employees}
          pointerOnHover
          highlightOnHover
          striped
          onRowClicked={handleRowClicked}
        />
      </Box>
    </>
  );
};

export default Employees;
