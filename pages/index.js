import Head from 'next/head';
import { Grid, Card, Text } from "@nextui-org/react";
import { getSortedPlayersData } from '../lib/players';

export function getStaticProps() {
  const allPlayersData = getSortedPlayersData();
  return {
    props: {
      allPlayersData,
    },
  };
}

export function Player ({ name, title, path}) {
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
