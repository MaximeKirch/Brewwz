import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub,  FaTwitter, FaSafari, FaLinkedin} from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg='whiteAlpha.100'
      rounded={'full'}
      w={16}
      h={16}
      pl={5}
      cursor={'pointer'}
      as={'a'}
      href={href}
      color='#fff'
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const date= new Date().getFullYear();

export default function SmallWithSocial() {
  return (
    <Box
      bg='#000'
      color='#fff'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text textAlign='center' >©{date}. Made with ❤️ by Maxime K. </Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} color='#fff' href={'https://twitter.com/KirchMaxime'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/MaximeKirch'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Portfolio'} href={'https://maxime-portfolio.vercel.app'}>
            <FaSafari />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/maxime-kirch-467443135/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
