import * as React from 'react';
import { useAccountContext } from '../../../contexts/AccountContext';
import { IRoute } from '../../../routing/routes.interfaces';
import { Index as RegionTable } from '../regions/Index';
import { Index as RegionPage } from '../region/Index';
import { AlertWrapped } from '../../shared/Alerts/AlertWrapped';

interface IIndexProps extends IRoute {  }

export const Index:React.FC<IIndexProps> = (props) => {

  const account = useAccountContext();
  
  const getDashboard = () => {
    let clientIds = account.GetClientIds();
    if(clientIds.length === 1){
      return <RegionPage/>;
    } else if(clientIds.length > 1) {
      return <RegionTable/>
    } else{
      return <AlertWrapped header="Permission Error" text="User is not authorized for any clients. Please contact support." bgStyle="danger" textColor="danger"/>
    }
  }

    return (
      <>
        {
          getDashboard()
        }
      </>
    );
}
