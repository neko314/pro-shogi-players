export default function Player ({ name, title, path}) {
  return (
    <>
      <li key={name}>
        <a href={`https://www.shogi.or.jp/${path}`}>{name} {title}</a>
      </li>
    </>
  );
}
