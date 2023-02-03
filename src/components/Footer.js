import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    key: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    key: 2,
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    key: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
];

const Footer = () => {
  return (
    <Box color="black" maxWidth="1280px" margin="0 auto" marginBottom={16} width="100%" alignSelf="flex-end" flexGrow={0}>
      <Flex
        px={16}
        py={4}
        justifyContent="space-between"
        alignItems="left"
      >
        <Box>
          <img src="/assets/Logo.svg" alt="Little lemon Restaurant Logo" />
        </Box>
        <Box alignItems="left">
          <Heading as="h4" size="4xl">Doormat Navigation</Heading>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
        </Box>
        <Box>
          <Heading as="h4" size="md">Contact</Heading>
          <p>Admins</p>
          <p>Phone number</p>
          <p>Email</p>
        </Box>
        <Box>
          <Heading as="h4" size="xs">Social Media links</Heading>
          <ul className="social">
          {
              socials.map( function(social) {
                return <>
                  <li key={social.key}><a href={social.url} ><FontAwesomeIcon icon={social.icon} size="2x" color="black" /></a></li>
                  </>
              })
            }
            </ul> 
        </Box>
      </Flex>
    </Box>
  );
};
export default Footer;