import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useAuthContext } from "../components/auth-context-provider";
import { Typography } from "@mui/material";

export const Home: NextPage = () => 
{
    const { user } = useAuthContext();
    return (
        <>
        <Head>
            <title>Notable reality</title>
        </Head>
        <Navbar></Navbar>
        <Typography variant="h1">user: {user?.email}</Typography>
        
        </>
    );
}
export default Home;