import React from 'react';

import Breadcrumbs from '../breadcrumb';
import ProfileMenu from '../profilemenu';
import { Profile, TopMenuWrapper } from './styles';

const TopMenu = ({ isOpen, handleClick }) => {
  return (
    <TopMenuWrapper>
      <div
        style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}
      >
        <span
          onClick={handleClick}
          style={{
            fontSize: '1.2rem',
            marginRight: '1rem',
            fontWeight: 'bold',
          }}
        >
          {!isOpen ? (
            <i className='bi bi-list'></i>
          ) : (
            <i className='bi bi-list' />
          )}
        </span>
        <span className='breadcrumb'>
          <Breadcrumbs />
        </span>
      </div>

      <button>Hello World</button>

      <Profile>
        <div className='location-selector'></div>

        <div className='profile-item'>
          <i className='bi bi-bell-fill' />
          {/* <Avatar src="/img_avatar.png" alt="" /> */}
          <ProfileMenu />
        </div>
      </Profile>
    </TopMenuWrapper>
  );
};

export default TopMenu;
