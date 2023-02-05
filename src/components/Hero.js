import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box backgroundColor="#495e57" color="black" width="100%" height={[null,null,null,400]}>
    <Box color="black" maxWidth="1280px" margin="0 auto"  flexGrow="0" justifyContent="flex-start" className="hero">
      <HStack
        px={16}
        py={8}
        justifyContent="space-between"
        alignItems="left"
      >
        <VStack
          alignItems="left"
          maxWidth="250px"
          color="white">
          <Heading as="h1" size="2xl" lineHeight="none">Little Lemon</Heading>
          <Heading as="h2">Chicago</Heading>
          <Text>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </Text>
          <Link to="/booking"><button>Reserve a Table</button></Link>
        </VStack>
        <VStack>
          <Image src="assets/restauranfood.jpg" id="hero-img" display={["none","none","none","block"]}/>
        </VStack>
      </HStack>
    </Box>
    </Box>
  );
};
export default Hero;