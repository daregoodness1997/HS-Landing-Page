import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContent, LayoutWrapper } from '../layout/styles';
import SideMenu from '../sidemenu';
import TopMenu from '../topmenu';

interface DashProps {
  children?: React.ReactNode | undefined;
}

const Dashboard: React.FC<DashProps> = ({ children }) => {
  {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
      document.title = 'ABCDG - Dashboard';
    }, []);

    const [isOpen, setIsOpen] = useState<Boolean>(false);
    return (
      <LayoutWrapper>
        {/* <SideMenu isOpen={isOpen} /> */}
        <LayoutContent>
          <TopMenu isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
          {/*  )} */}
          <div className='layout__content-main'>
            {children}
            <Outlet />
          </div>
        </LayoutContent>
      </LayoutWrapper>
    );
  }
};

export default Dashboard;
