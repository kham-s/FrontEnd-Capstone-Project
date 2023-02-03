import { Box, HStack } from "@chakra-ui/react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Box color="black"maxWidth="1280px" margin="0 auto" width="100%" flexGrow={0}>
      <HStack
        px={16}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <img src="/assets/Logo.svg" alt="Little lemon Restaurant Logo" />
        <Nav />
      </HStack>
    </Box>
  );
};
export default Header;