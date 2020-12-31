import React from 'react';

import { AuthProvider } from './Auth';
import { TaskProvider } from './Tasks';

const AppContext: React.FC = ({ children }) => (
  <AuthProvider>
    <TaskProvider>{children}</TaskProvider>
  </AuthProvider>
);

export default AppContext;
