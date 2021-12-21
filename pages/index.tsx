import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/Containers/NavBar";
import { Global, ThemeTypes } from "../components/Containers";

const Home: NextPage = () => {
  return (
    <Global
      theme={ThemeTypes.MAIN}
    >
      <div>
        <div>Hello World!</div>
        <NavBar height={"100px"}/>
      </div>
    </Global>
  );
};

export default Home;
