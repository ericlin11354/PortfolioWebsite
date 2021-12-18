import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/Containers/NavBar";

const Home: NextPage = () => {
  return (
  <div>
    <div>Hello World!</div>
    <NavBar height={"100px"}/>
  </div>
  );
};

export default Home;
