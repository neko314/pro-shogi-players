import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Grid, Card, Text } from "@nextui-org/react";
import { getSortedPlayersData } from '../lib/players';

export const getStaticProps: GetStaticProps = () => {
  const allPlayersData = getSortedPlayersData();
  return {
    props: {
      allPlayersData,
    },
  };
}

export type Player = {
  name: string;
  title: string;
  path: string;
}

export function Player ({ name, title, path }: Player ) {
  return (
    <Grid>
      <Card
        isPressable
        isHoverable
        variant="bordered"
        css={{ mw: "200px" }}
        onPress={() => {
          window.open (`https://www.shogi.or.jp/${path}`, '_ blank')
        }}
      >
        <Card.Body>
          <Text>{name}<br />{title}</Text>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export type AllPlayersDataType = {
  allPlayersData: {
    players: [Player]
  }
};

export default function Home({ allPlayersData }: AllPlayersDataType) {
  return (
    <>
      <Head>
        <title>Pro Shogi Players</title>
        <meta name="pro shogi players" content="pro shogi players list" />
        <link rel="icon" href="/shogi.svg" />
      </Head>
      <Grid.Container gap={1} justify="center">
        {allPlayersData.players.map(({ name, title, path}: Player) => (
          <div key={name} data-e2e-player-id={`${name}${title}`}>
            <Player name={name} title={title} path={path} />
          </div>
        ))}
      </Grid.Container>
    </>
  );
}
