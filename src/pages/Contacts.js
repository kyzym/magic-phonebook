import { Flex, Heading } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { ContactsList, Filter, Form } from 'components';
import { Loader } from 'components/Loader/Loader';
import { FcContacts, FcList } from 'react-icons/fc';

export default function Contacts() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Flex
      minH={{ base: '75vh', md: '83.7vh', lg: '81vh' }}
      name="flex"
      direction="column"
      align="center"
      pt={10}
      px={10}
      bg={bgColor}
    >
      <Heading
        as={'h1'}
        fontSize={'2xl'}
        display="flex"
        alignItems="flex-end"
        mb={2}
      >
        Phonebook <FcContacts />
      </Heading>

      <Form />
      <Heading
        as={'h2'}
        fontSize={'xl'}
        display="flex"
        alignItems="flex-end"
        mb={2}
      >
        Contacts <FcList />
      </Heading>

      <Filter />
      <Loader />
      <ContactsList />
    </Flex>
  );
}
