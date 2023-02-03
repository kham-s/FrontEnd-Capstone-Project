import { Box, Heading, HStack } from "@chakra-ui/react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <Heading as="h4">Booking page</Heading>
      <BookingForm />
    </>
  );
};
export default BookingPage;