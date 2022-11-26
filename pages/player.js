import { Card, Text} from "@nextui-org/react";
import { Grid } from "@nextui-org/react";

export default function Player ({ name, title, path}) {
  return (
    <Grid key={name}>
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
