import React from 'react';

import { AuthProvider } from './Auth';
import { TaskProvider } from './Tasks';
import { ThemeProvider } from './Theme';

const AppContext: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemeProvider>
      <TaskProvider>{children}</TaskProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default AppContext;
