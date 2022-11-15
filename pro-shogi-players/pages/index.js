import Head from 'next/head';
import { getSortedPostsData } from '../lib/players';

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
      <ul>
        {allPostsData.players.map(({ name, title, path}) => (
          <li key={name}>
            <a href={`https://www.shogi.or.jp/${path}`}>{name} {title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
