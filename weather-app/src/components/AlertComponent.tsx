// AlertComponent.tsx

import React from 'react';
import Alert from '@mui/material/Alert';

interface AlertComponentProps {
  text: string;
  severity: 'error' | 'warning';
}

const AlertComponent: React.FC<AlertComponentProps> = ({ text, severity }) => {
  return (
    <div data-testid="alert-container">
      <Alert variant="filled" severity={severity} style={{ marginTop: '20px' }}>
        {text}
     </Alert>
    </div>
  );
};

export default AlertComponent;
