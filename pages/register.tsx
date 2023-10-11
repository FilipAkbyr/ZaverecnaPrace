'use client';

import {authUtils} from "../firebase/auth-utils";
import {useRouter} from 'next/router';
import React, {FormEvent} from 'react';
import { NextPage } from 'next';
import { Container, Grid, Paper, Input, Button } from '@mui/material';
import Link from 'next/link';

export const Register: NextPage = () =>
{
    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    await authUtils.register(email, password);
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
            Registrovat se
          </Button>
        </Grid>
        <Grid item>
          <Link href="/login">
            <Button fullWidth variant="outlined">
              Stránka přihlášení
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
</Container>);
}
export default Register;