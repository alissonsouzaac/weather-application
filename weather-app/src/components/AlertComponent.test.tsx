import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AlertComponent from './AlertComponent';

describe('AlertComponent Tests', () => {
    test('renders alert component with correct text and severity', () => {
      const { container } = render(
        <AlertComponent text="Test message" severity="error" />
      );
    
      const alertContainer = container.querySelector('.MuiAlert-filledError');
      expect(alertContainer).toBeInTheDocument();
      expect(alertContainer).toHaveClass('MuiAlert-filledError');
    });
})
