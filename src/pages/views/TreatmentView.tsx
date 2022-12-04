import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import Input from '../../components/app-ui/inputs/basic/Input';
import Select from '../../components/app-ui/inputs/basic/Select/Select';
import { BottomWrapper } from '../../components/app-ui/styles';
import AppButton from '../../components/app-ui/app-button';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const TreatmentView = () => {
  const [pen, setPen] = useState(false);
  const [diag, setDiag] = useState('');
  const [medications, setMedications] = useState([{ data: [''] }]);
  const { handleSubmit, control, register, watch, setValue } = useForm();

  const medicationData = [
    {
      id: '1',
      name: 'Rheumatic Fever',
      medications: [
        { peninclin: true, data: ['Phenoxymethylpenicillin'] },
        { peninclin: false, data: ['Sulfadiazine'] },
      ],
    },
    {
      id: '2',
      name: 'Streptococcal Infection',
      medications: [
        { peninclin: true, data: ['Phenoxymethylpenicillin'] },
        { peninclin: false, data: ['Erythromycin', 'Azithromycin'] },
      ],
    },
    {
      id: '3',
      name: 'Meningitis',
      medications: [
        { peninclin: true, data: ['Ciprofloxacin'] },
        { peninclin: false, data: ['Rifampicin', 'Ceftriazone'] },
      ],
    },
  ];

  const diagnosticOptions = medicationData.map(data => ({
    label: data.name,
    value: data.id,
  }));

  const peninclinOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  const diagnostics = watch('diagnostics');
  const hasPenicilin = watch('peninclin');
  useEffect(() => {
    const getMedication = () => {
      const medications = medicationData.filter(
        medication => medication.id === diag
      );

      const medicPeninclin = medications[0]?.medications.filter(
        medication => medication.peninclin === Boolean(pen)
      );

      return medicPeninclin;
    };
    let medic = getMedication();

    setMedications(medic);
  }, [pen, diag]);

  const renderMedications = () => {
    if (medications !== undefined)
      return (
        <div
          // className='editable'
          // contentEditable='true'
          style={{
            height: 'auto',
            padding: '.9rem',
            width: '100%',
            background: '#f7f7f7',
            border: '1px solid #eee',
          }}
        >
          <ul>
            {medications.map((medication, idx) => (
              <li
                style={{ display: 'block', margin: '6px', padding: '4px' }}
                key={idx}
              >
                {medication?.data}
              </li>
            ))}
          </ul>
        </div>
      );
    return;
  };

  const submit = () => {};

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Input label='Name' register={register('name')} />
        <Select
          label='Diagnostics'
          options={diagnosticOptions}
          value={diag}
          // register={register('diagnostics')}
          handleChange={e => {
            setValue('diagnostics', e.target.value);
            setDiag(e.target.value);
          }}
        />
        <Select
          label='Peninclin'
          options={peninclinOptions}
          // register={register('peninclin')}
          value={pen}
          handleChange={e => {
            setValue('peninclin', e.target.value);
            setPen(e.target.value);
          }}
        />

        {renderMedications()}
        {/* <Textarea label='Medication' /> */}
        <BottomWrapper>
          <button>Clear</button>
          <AppButton label='Save' />
        </BottomWrapper>
      </Box>
    </form>
  );
};

export default TreatmentView;
