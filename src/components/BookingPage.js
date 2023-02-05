import { useReducer, useEffect } from "react";
import { Box, Heading, HStack } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import {fetchAPI} from "./Api";

const BookingPage = () => {
  let currentDate = new Date();
  const fetchData = (date) => {
    return fetchAPI(date)
  }

  useEffect(() => {
    fetchData(currentDate);
  }, []);

  const initializeTimes = fetchData(currentDate);

  function updateTimes(state, action) {
    console.log(action);
    let results = fetchData(action.resDate)
    console.log(results)
    return results;
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Heading as="h4">Booking page</Heading>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};
export default BookingPage;