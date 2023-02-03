import { 
  Box, 
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select
 } from "@chakra-ui/react";

const BookingForm = () => {
  return (
    <VStack alignItems="left">
      <form>
        <FormLabel for="res-date" marginTop="4">Choose date</FormLabel>
        <Input type="date" id="res-date" />
        <FormLabel for="res-time">Choose time</FormLabel>
        <Select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </Select>
        <FormLabel for="guests">Number of guests</FormLabel>
        <Input type="number" placeholder="1" min="1" max="10" id="guests" />
        <FormLabel for="occasion">Occasion</FormLabel>
        <Select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
        <Input type="submit" value="Make Your reservation" />
      </form>
    </VStack>
  );
};
export default BookingForm;