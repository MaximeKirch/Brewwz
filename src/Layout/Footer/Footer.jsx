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
      w={24}
      h={24}
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
      position="absolute"
      bottom='0'
      width='100%'
      height='50px'
      display='flex'
      justifyContent='center'
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={'column'}
        spacing={4}
        justify={'center'}
        align={{ base: 'center', md: 'center' }}
        display='flex'
        flexDir={{base:'column', md:'row'}}
        >

        <Box
          display={['none', 'none', 'block']}
        >
          <Text>©{date} Maxime K</Text>
        </Box>

      <Box>
        <Stack direction={'row'}>
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
        </Box>
      </Container>
    </Box>
  );
}
