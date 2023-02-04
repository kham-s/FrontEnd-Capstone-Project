import { Box, HStack, Flex } from "@chakra-ui/react";
import Card from './Card';

const items = [
  {
    key: 1,
    name: "Greek salad",
    image: "assets/greek salad.jpg",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
  },
  {
    key: 2,
    name: "Bruschetta",
    image: "assets/bruchetta.svg",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 5.99,
  },
  {
    key: 3,
    name: "Lemon dessert",
    image: "assets/lemon dessert.jpg",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 5.00,
  }
];

const Highlights = () => {
  return (
    <>
        <HStack
          justifyContent="space-between"
          alignItems="left"
          py={30}
        >
          <Box>
          <h1>This weeks specials!</h1>
          </Box>
          <Box alignItems="right">
          <button>Online Menu</button>
          </Box>
        </HStack>
        <Flex justifyContent="space-between" align="top"  minHeight="500px" flexWrap="wrap">
          {items.map(item => (
            <Card key={item.key} item={item} />
          ))}
        </Flex>
    </>
  );
};
export default Highlights;