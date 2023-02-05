import { useEffect, useState } from "react";
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
import {submitAPI} from "./Api";
import { useNavigate } from "react-router-dom";



const BookingForm = (props) => {
  let currentDate = new Date().toISOString().slice(0,10);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      resDate: currentDate,
      resTime: '',
      guests: 1,
      occasion: ''
    },
    onSubmit: (values) => {
      if (submitAPI(values)) {
        navigate("/confirmation");
      };
    },
    validationSchema: Yup.object({
      resDate: Yup.date().required('Please choose a date'),
      resTime: Yup.string().required('Please choose a booking time'),
      guests: Yup.number()
      .min(1, "Minimum at least 1")
      .max(10, "Allowed maximum is 10")
      .required(),
      occasion: Yup.string().required('Required')
    }),
  });
  return (
    <VStack alignItems="left" maxWidth={300}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.resDate && formik.errors.resDate}>
        <FormLabel htmlFor="res-date" marginTop="4">Choose date</FormLabel>
        <Input type="date" variant="outline" id="res-date" width="full"  {...formik.getFieldProps('resDate') }  onChange={(e) => {
          formik.getFieldProps('resDate').onChange(e);
          props.dispatch({resDate: new Date(e.target.value)});}}/>
        <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.resTime && formik.errors.resTime}>
        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select id="res-time " size="lg" variant="outline" width="full" placeholder="Time" {...formik.getFieldProps('resTime') }>
          {props.availableTimes.map( (time,key) => {
            return <option key={key}>{time}</option>
          })}
        </Select>
        <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps('guests') } width="full" />
        <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" variant="filled" size="lg" placeholder="Select the occasion"  width="full" {...formik.getFieldProps('occasion') } >
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