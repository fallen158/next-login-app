import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Space, Step } from '../components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Step current={2} items={['身份验证', '修改密码', '完成']} />
    </>
  );
};

export default Home;
