import * as React from 'react';

interface IIndexProps {  }

export const Index:React.FC<IIndexProps> = ({children}) => {
    return (
      <>
        { children }
      </>
    );
}
