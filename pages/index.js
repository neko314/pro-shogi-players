import Head from 'next/head';
import { Grid } from "@nextui-org/react";
import { getSortedPostsData } from '../lib/players';
import Player from './player';

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Pro Shogi Players</title>
        <meta name="pro shogi players" content="pro shogi players list" />
        <link rel="icon" href="/shogi.svg" />
      </Head>
      <Grid.Container gap={1} justify="center">
        {allPostsData.players.map(({ name, title, path}) => (
            <Player key={name} name={name} title={title} path={path} />
        ))}
      </Grid.Container>
    </>
  );
}
