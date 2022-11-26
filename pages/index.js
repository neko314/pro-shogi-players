import Head from 'next/head';
import { Grid } from "@nextui-org/react";
import { getSortedPlayersData } from '../lib/players';
import Player from './player';

export function getStaticProps() {
  const allPlayersData = getSortedPlayersData();
  return {
    props: {
      allPlayersData,
    },
  };
}

export default function Home({ allPlayersData }) {
  return (
    <>
      <Head>
        <title>Pro Shogi Players</title>
        <meta name="pro shogi players" content="pro shogi players list" />
        <link rel="icon" href="/shogi.svg" />
      </Head>
      <Grid.Container gap={1} justify="center">
        {allPlayersData.players.map(({ name, title, path}) => (
            <Player key={name} name={name} title={title} path={path} />
        ))}
      </Grid.Container>
    </>
  );
}
