import { useEffect } from "react";
import { 
  Box, 
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button
 } from "@chakra-ui/react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const BookingForm = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      resDate: '',
      resTime: '',
      guests: 1,
      occasion: ''
    },
    onSubmit: (values) => {
      submit(null, values);
    },
    validationSchema: Yup.object({
      resDate: Yup.date().required('Required'),
      resTime: Yup.string().required('Required'),
      guests: Yup.number(),
      occasion: Yup.string().required('Required')
    }),
  });
  return (
    <VStack alignItems="left" maxWidth={300}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
        <FormLabel htmlFor="res-date" marginTop="4">Choose date</FormLabel>
        <Input type="date" variant="outline" id="res-date" width="full" {...formik.getFieldProps('resDate') }/>
        </FormControl>

        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select id="res-time " size="lg" variant="outline" width="full" components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} placeholder="Time" {...formik.getFieldProps('resTime') }>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </Select>

        <FormControl>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps('guests') } width="full" />
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" variant="filled" size="lg" placeholder="Select the occasion"  width="full" {...formik.getFieldProps('occasion') }>
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
        </FormControl>
        <Button type="submit">Make Your reservation</Button>
      </form>
    </VStack>
  );
};
export default BookingForm;