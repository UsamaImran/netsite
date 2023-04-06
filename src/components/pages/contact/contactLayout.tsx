import React from 'react';
import { Index as TopBar } from '../../shared/Layout/topMenu/Index';
export const ContactLayout: React.FC = ({ children }) => {
  const contactPageStyle = {
    overflowX: 'hidden',
  } as React.CSSProperties;

  return (
    <div>
      <TopBar />
      <div style={contactPageStyle}>{children}</div>
    </div>
  );
};

export default ContactLayout;
