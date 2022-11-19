import { Card, Text} from "@nextui-org/react";

export default function Player ({ name, title, path}) {
  return (
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
  );
}
