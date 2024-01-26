// AlertComponent.tsx

import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertComponentProps {
  text: string;
  severity: 'error' | 'warning';
}

const AlertComponent: React.FC<AlertComponentProps> = ({ text, severity }) => {
  return (
    <Alert variant="filled" severity={severity} style={{ marginTop: '20px' }}>
      {text}
    </Alert>
  );
};

export default AlertComponent;
