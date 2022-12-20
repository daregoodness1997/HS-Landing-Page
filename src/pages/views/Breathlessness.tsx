import React from 'react';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const Breathlessness = () => {
  return (
    <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 '>
      <ModuleCard label='Wheezing' />
      <ModuleCard label='Stridor' />
      <ModuleCard label='Crepitations' />
      <ModuleCard label='Uear' />
      <ModuleCard label='Others' />
    </div>
  );
};

export default Breathlessness;
