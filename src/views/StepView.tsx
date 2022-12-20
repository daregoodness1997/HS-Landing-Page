import React from 'react';

interface StepViewProps {
  step?: string;
  noOfSteps?: number;
  children?: React.ReactNode | undefined;
}

const StepView: React.FC<StepViewProps> = ({ step, children, noOfSteps }) => {
  return <div>{children}</div>;
};

export default StepView;
