import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Space, Step } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Step current={2} items={["ccc", "cccc"]} />
      {/* <Space ignoreNum={2} size={30}>
        <div>122888899999100000088888999990000-------99999000000----22</div>
        <div>2</div>===========22
        <div>3</div>
      </Space> */}
    </>
  );
};

export default Home;
