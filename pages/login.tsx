'use client';

import exp from 'constants';
import {authUtils} from "../firebase/auth-utils";
import {useRouter} from 'next/router';
import React, {FormEvent} from 'react';
import { Container, Grid, Paper, Input, Button } from '@mui/material';
import Link from 'next/link';
import { NextPage } from 'next';

export const Login: NextPage = () =>
{
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    await authUtils.login(email, password);
    return router.push('/');
  };

  return (
    <Container maxWidth="sm" component="form" noValidate onSubmit={handleForm}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Paper elevation={2} sx={{ padding: 5 }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Input
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </Grid>
            <Grid item>
              <Input
                fullWidth
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Grid>
            <Grid item>
              <Button fullWidth variant="contained" type="submit">
                Přihlásit se
              </Button>
            </Grid>
            <Grid item>
              <Link href="/register">
                <Button fullWidth variant="outlined">
                  Stránka registrace
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}
export default Login;