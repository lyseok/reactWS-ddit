import React from 'react';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className='sticky t-[200px] w-[300px] h-full'>
      <Navigation
        activeItemId="/"
        onSelect={({ itemId }) => {
          console.log(itemId);
          navigate(itemId);
        }}
        items={[
          {
            title: 'LeeYunSeok',
            itemId: '/',
          },
          {
            title: '회원관리',
            itemId: '/people',
            subNav: [
              {
                title: '회원 목록',
                itemId: '/people/list',
              },
              {
                title: '회원 등록',
                itemId: '/people/form',
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Sidebar;
