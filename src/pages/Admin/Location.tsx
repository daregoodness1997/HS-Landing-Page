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
import {
  BandSchema,
  createBandSchema,
  createLocationSchema,
  EmployeeSchema,
  LocationSchema,
} from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BottomWrapper } from '../../components/app-ui/styles';
import AppButton from '../../components/app-ui/app-button';

const Locations = () => {
  const data = localStorage.getItem('user') || '';

  const user = JSON.parse(data);
  const LocationServ = client.service('location');

  const [open, setOpen] = useState(false);
  const [selectedBand, setSelectedBand] = useState();
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(50);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [modalState, setModalState] = useState('');
  const locationTypeOptions = [
    'Front Desk',
    'Clinic',
    'Ward',
    'Store',
    'Laboratory',
    'Finance',
    'Theatre',
    'Pharmacy',
    'Radiology',
    'Managed Care',
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(createLocationSchema),

    defaultValues: {
      name: '',
      locationType: '',
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
      const findLocations = await LocationServ.find({
        query: {
          facility: user.currentEmployee.facilityDetail._id,
          $limit: 200,
          $sort: {
            createdAt: -1,
          },
        },
      });

      await setLocations(findLocations.data);
      setLoading(false);
    } else {
      if (user.stacker) {
        const findLocations = await LocationServ.find({
          query: {
            $limit: 200,
            $sort: {
              facility: -1,
            },
          },
        });

        await setLocations(findLocations.data);
      }
    }
  };

  useEffect(() => {
    if (user) {
      getEmplooyees();
    } else {
    }
    LocationServ.on('created', obj => getEmplooyees());
    LocationServ.on('updated', obj => getEmplooyees());
    LocationServ.on('patched', obj => getEmplooyees());
    LocationServ.on('removed', obj => getEmplooyees());
    return () => {};
  }, []);

  const onSubmit = (data, e) => {
    // e.preventDefault();
    if (data.locationType === '') {
      alert('Kindly choose location type');
      return;
    }
    setMessage('');
    setError(false);
    setSuccess(false);
    data.createdby = user._id;
    if (user.currentEmployee) {
      data.facility = user.currentEmployee.facilityDetail._id; // or from facility dropdown
    }
    LocationServ.create(data)
      .then(res => {
        console.log(JSON.stringify(res));
        e.target.reset();
        /*  setMessage("Created Location successfully") */
        setSuccess(true);
        toast.success('Location Sucessfully created');
        setOpen(false);
        setSuccess(false);
      })
      .catch(err => {
        console.log(err);
        toast.error(`Error creating Location  ${err}`);
      });
  };

  return (
    <>
      <BoxModal open={open} onClose={handleClose} header='Location'>
        {modalState === 'Create' && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Box mb='1rem'>
                <Input
                  label='Name of Location'
                  register={register('name')}
                  errorText={errors?.name?.message}
                  sx={{ marginBottom: '2rem' }}
                />
              </Box>
              <Box mb='1rem'>
                <CustomSelect
                  label='Choose Location Type'
                  name='locationType'
                  options={locationTypeOptions}
                  register={register('locationType')}
                />
              </Box>
            </Grid>
            <BottomWrapper>
              <button onClick={() => setOpen(false)}>Cancel</button>
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
          <AppButton onClick={handleCreate} label='Create Location' />
        </Box>
        <CustomTable
          title={''}
          columns={LocationSchema}
          data={locations}
          pointerOnHover
          highlightOnHover
          striped
          onRowClicked={handleRowClicked}
        />
      </Box>
    </>
  );
};

export default Locations;
