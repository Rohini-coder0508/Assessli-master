import { useState } from 'react';
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
  Textarea,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { apiUrl } from './config';

function App() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: '',
  });
// Handling Change of Inputs
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
// Handling Submit Button
  const handleSubmit = async () => {
    try {
      if (Object.values(inputs).some((value) => value.trim() === '')) {
        toast({
          title: 'Fill all the fields',
          status: 'error',
          position: 'bottom',
        });
        return;
      }

      setLoading(true);
      const response = await axios.post(apiUrl, inputs, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast({
          title: 'Form submitted successfully',
          status: 'success',
          position: 'top-right',
        });
        setInputs({
          Name: '',
          Email: '',
          Phone: '',
          Message: '',
        });
      } else {
        throw new Error(`Please try again later`);
      }
    } catch (error) {
      toast({
        title: 'Error submitting form',
        description: `An unexpected error occurred: ${error.message}`,
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p={2}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      overflow="hidden"
      bgGradient="linear-gradient(to bottom, rgba(216, 25, 36, 1), rgba(0, 57, 117, 1))"
    >
      <Container maxW="xl">
        <Box
          p={6}
          bg="white"
          borderRadius="lg"
          borderWidth="1px"
          textAlign="center"
          minH="35rem"
        >
          <Heading textTransform="uppercase" fontSize="2rem">
            Contact Assessli
          </Heading>
          <VStack spacing={4} color="black" mt={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Assessli"
                type="text"
                value={inputs.Name}
                onChange={handleChange}
                name="Name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="assessli@gmail.com"
                type="email"
                value={inputs.Email}
                onChange={handleChange}
                name="Email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="9876543210"
                type="tel"
                value={inputs.Phone}
                onChange={handleChange}
                name="Phone"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Type Your Message Here"
                value={inputs.Message}
                onChange={handleChange}
                name="Message"
              />
            </FormControl>
          </VStack>
          <Button
            mt={4}
            bg="#0052a8"
            color="white"
            _hover={{ bg: '#0360c1' }}
            onClick={handleSubmit}
            isLoading={loading}
            loadingText="Submitting..."
          >
            {loading ? <Spinner /> : 'Submit'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
