import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";

export const Home: NextPage = () => 
{
    return (
        <>
        <Head>
            <title>Notable reality</title>
        </Head>
        <Navbar></Navbar>
        
        </>
    );
}
export default Home;