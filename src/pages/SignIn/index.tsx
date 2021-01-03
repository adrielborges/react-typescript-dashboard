import React, { useState, FormEvent } from 'react';

import { RiDashboardLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { useAuth } from '../../hooks/Auth';

// interface SignInFormData {
//   email: string;
//   password: string;
// }

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    name: string,
    loginPassword: string,
  ) => {
    e.preventDefault();

    try {
      signIn({ name, password: loginPassword });
      history.push('/dashboard');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container>
      <RiDashboardLine />
      <h1>Login</h1>
      <form onSubmit={e => handleSubmit(e, email, password)}>
        <input
          type="text"
          name="login"
          placeholder="Usuário"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};

export default SignIn;
