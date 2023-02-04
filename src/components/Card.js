import { Box, HStack, VStack, Flex } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Box
      flex='1'
      color="black"
      className="card"
      maxWidth="300px"
      minWidth="300px"
    >
      <Flex paddingBottom={10} spacing="0" flexDirection="column">
        <Box marginBottom="0" className="illustration">
        <img src={props.item.image} alt={props.item.name} />
        </Box>
        <VStack
          backgroundColor="#edefee"
          marginTop="0"
          padding="16px"
          className="details"
          alignItems="left">
          <HStack>
            <Box>
            <h3>{props.item.name}</h3>
            </Box>
            <Box align="right">
              <span className="price">${props.item.price}</span>
            </Box>
          </HStack>
          <Box>
          <p>
            {props.item.description}
          </p>
          </Box>
        </VStack>
        <Box
          backgroundColor="#edefee"
          marginTop="0"
          padding="16px">
            Order a delivery
          </Box>
      </Flex>
    </Box>
  );
};
export default Card;