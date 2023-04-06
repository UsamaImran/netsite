import * as React from 'react';
import { useAccountContext } from '../../../../contexts/AccountContext';
import { useIsPhoneContext } from '../../../../contexts/IsPhoneContext';
import { TopBarDesktop } from './TopBarDesktop';
import { TopBarMobile } from './TopBarMobile';

interface IIndexProps { }

export const Index: React.FC<IIndexProps> = (props) => {

  const isPhone = useIsPhoneContext();
  const user = useAccountContext();

  const isUserLoggedIn = React.useMemo(() => {
    return Object.keys(user).length > 0
  }, [user])

  return (
    <>
      {
        isPhone ?
          <TopBarMobile isUserLoggedIn={isUserLoggedIn} /> :
          <TopBarDesktop isUserLoggedIn={isUserLoggedIn} />
      }
    </>
  );
}
