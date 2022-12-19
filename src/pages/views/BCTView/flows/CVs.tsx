import React, { useState } from 'react';
import ModuleCard from '../../../../components/app-ui/card/ModuleCard';

const CVs = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const renderCirculation = () => {
    if (content === 'Normal')
      return <ModuleCard label='See BCT2' onClick={() => {}} />;
    if (content === 'NotNormal')
      return (
        <div>
          <ul>
            <li>BP</li>
            <li>Chest Pain</li>
            <li>Hearth Failure </li>
            <li>{`HR>/200/min`}</li>
          </ul>
        </div>
      );
  };

  console.log('Content', content);

  return (
    <div>
      {step === 0 && (
        <div className='grid gap-16 lg:grid-cols-18 lg:gap-x-12 lg:gap-y-4 '>
          <ModuleCard
            label='Yes'
            onClick={() => {
              setContent('Yes');
              setStep(step + 1);
            }}
          />
          <ModuleCard
            label='No'
            onClick={() => {
              setContent('No');
              setStep(step + 1);
            }}
          />
        </div>
      )}

      {step === 1 && (
        <ModuleCard
          label='Airway'
          onClick={() => {
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <ModuleCard
          label='Breathing + C2'
          onClick={() => {
            setContent('Circulation');
            setStep(step + 1);
          }}
        />
      )}
      {step === 3 && (
        <div className='grid gap-16 lg:grid-cols-18 lg:gap-x-12 lg:gap-y-4 '>
          <ModuleCard
            label='Check  Electrolytes'
            onClick={() => {
              setStep(step + 1);
            }}
          />
        </div>
      )}

      {step === 7 && (
        <div className='grid gap-16 lg:grid-cols-18 lg:gap-x-12 lg:gap-y-4 '>
          <h4 className='my-2'>Circulation</h4>
          <ModuleCard
            label='Normal'
            onClick={() => {
              setContent('Normal');
              setStep(step + 1);
            }}
          />
          <ModuleCard
            label='Not Normal'
            onClick={() => {
              setContent('NotNormal');
              setStep(step + 1);
            }}
          />
        </div>
      )}
      {step === 4 && renderCirculation()}
    </div>
  );
};

export default CVs;
