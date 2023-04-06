import * as React from 'react';
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext';
import { Breadcrumbs } from '../../../shared/breadcrumbs/Breadcrumbs';
import { Index as TopBar } from './topMenu/Index';

interface INoSidebarLayoutProps { }

export const NoSidebarLayout: React.FC<INoSidebarLayoutProps> = ({ children }) => {
  const phoneContext = useIsPhoneContext();

  return (
    <>
      <div className="wrapper wrapper-full-page">
        <div className="full-page">
          <div className="main-panel">
            <TopBar />
            <div className="content content-breadcrumbs">
              {
                !phoneContext ? <div className="breadCrumb">
                  <Breadcrumbs></Breadcrumbs>
                </div> : null
              }
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
