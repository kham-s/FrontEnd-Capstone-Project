import { ChakraBaseProvider, Flex, Box } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import BookingPage from './components/BookingPage';
import OrderPage from './components/OrderPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import './App.css';
import theme  from  "./components/CustomTheme";
import ConfirmedBooking from "./components/ConfirmedBooking";

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <AlertProvider>
        <Flex
          height="100%"
          flexDirection="column"
          top={0}
          left={0}
          right={0}
          backgroundColor="white"
          alignItems="left"
        >
          <Header />
          <Hero />
          <Box backgroundColor="white" color="black" margin="0 auto" paddingTop={120} className="main" width="100%" flexGrow="1">
            <Box color="black" maxWidth="1280px" margin="0 auto" px={16} alignItems="flex-start">
              <Routes>
                <Route path="/" element={<Highlights />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/menu" element={<MenuPage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/order" element={<OrderPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
              </Routes>
            </Box>
          </Box>
          <Footer />
          <Alert />
        </Flex>
      </AlertProvider>
    </ChakraBaseProvider>
  );
}

export default App;
