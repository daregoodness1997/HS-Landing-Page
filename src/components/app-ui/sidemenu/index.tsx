import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuItem from '../menuitem';
import { Lists } from '../menuitem/style';
import { MainMenu, Sidemenu, TopSection } from './styles';

export const menuItems = [
  {
    name: 'Overview',
    exact: true,
    to: '/app',
    iconClassName: 'bi bi-house-door',
    subMenus: [{ name: 'Dashboard', to: '/app/overview/dashboard' }],
  },
  {
    name: 'Treatments',
    exact: true,
    to: '/app/clients',
    iconClassName: 'bi bi-people',
    subMenus: [
      { name: 'Appointment', to: '/app/clients/appointments' },
      { name: 'Client', to: '/app/clients/clients' },
      { name: 'Dashboard', to: '/app/clients/dashboard' },
    ],
  },
  {
    name: 'BCT',
    exact: true,
    to: '/app/bct',
    iconClassName: 'bi bi-file-medical',
  },

  {
    name: 'NMT',
    exact: true,
    to: '/app/nmt',
    iconClassName: 'bi bi-calendar',
  },
  {
    name: 'Laboratory',
    exact: true,
    to: '/app/laboratory',
    iconClassName: 'bi bi-binoculars',
    subMenus: [
      { name: 'Bill Client', to: '/app/laboratory/billclient' },
      { name: 'Bill Lab Orders', to: '/app/laboratory/billlaborders' },
      { name: 'Payment', to: '/app/laboratory/payment' },
      { name: 'Lab Result', to: '/app/laboratory/labresult' },
      { name: 'Dashboard', to: '/app/laboratory/dashboard' },
    ],
  },

  {
    name: 'Pharmacy',
    exact: true,
    to: '/app/pharmacy',
    iconClassName: 'bi bi-file-medical',
    subMenus: [
      { name: 'Bill Client', to: '/app/pharmacy/billclient' },
      { name: 'Bill Prescription Sent', to: '/app/pharmacy/billprescription' },
      // { name: 'Payment', to: '/app/pharmacy/payment' },
      { name: 'Dispensary', to: '/app/pharmacy/dispensary' },
      { name: 'Store Inventory', to: '/app/pharmacy/storeinventory' },
      { name: 'Product Entry', to: '/app/pharmacy/productentry' },
      { name: 'Issue Out', to: '/app/pharmacy/issueout' },
      { name: 'Requisiition', to: '/app/pharmacy/requisition' },
      { name: 'Transfer', to: '/app/pharmacy/transfer' },
      { name: 'Dashboard', to: '/app/pharmacy/dashboard' },
    ],
  },

  {
    name: 'CRM',
    exact: true,
    to: '/app/crm',
    iconClassName: 'bi bi-person',
    subMenus: [
      { name: 'Lead', to: '/app/crm/lead' },
      { name: 'Proposal', to: '/app/crm/proposal' },
      { name: 'Invoice', to: '/app/crm/invoice' },
      { name: 'SLA', to: '/app/crm/SLA' },
      { name: 'Dashboard', to: '/app/crm/dashboard' },
      { name: 'Appointment', to: '/app/crm/appointment' },
      { name: 'Deal', to: '/app/crm/deal' },
    ],
  },

  {
    name: 'Logout',
    exact: true,
    to: '/',
    action: () => {
      localStorage.setItem('user', '');
    },
    iconClassName: 'bi bi-box-arrow-right',
  },
];

function SideMenu({ isOpen }) {
  const [inactive, setInactive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu');
    }
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {};

  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(el => {
      el.addEventListener('click', () => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach(el => el.classList.remove('active'));
        el.classList.toggle('active');

        if (next !== null) {
          next.classList.toggle('active');
        }
      });
    });
  }, []);

  return (
    <Sidemenu className={`side-menu ${!isOpen ? '' : 'hide'}`}>
      <TopSection>
        <h4>Our Hospital</h4>
      </TopSection>
      <MainMenu className='main-menu'>
        <Lists>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={() => {
                if (menuItem.action) {
                  menuItem.action();
                  navigate(menuItem.to);
                }
                if (menuItem.to && !menuItem.subMenus) {
                  navigate(menuItem.to);
                }
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </Lists>
      </MainMenu>
    </Sidemenu>
  );
}

export default SideMenu;
