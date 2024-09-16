import React from 'react';
import {
  Heading,
  Flex,
  Grid,
  Text,
  Card as RadixCard,
  Box,
  Inset,
  Strong,
} from '@radix-ui/themes';

export default function ChildrenPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Children Pattern</Heading>
      <CardsList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsList>
    </Flex>
  );
}

function CardsList({ children }: React.PropsWithChildren) {
  return (
    <Grid columns='3' gap='4'>
      {children}
    </Grid>
  );
}

function Card() {
  return (
    <Box maxWidth='240px'>
      <RadixCard size='2'>
        <Inset clip='padding-box' side='top' pb='current'>
          <img
            src='https://imgs.search.brave.com/2LeZClbL6tA8VD_u5JqKsxXwTqLQGCaUcVdEIbSilGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHVk/aW8udXhwaW5jZG4u/Y29tL3N0dWRpby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/Mi9UaGUtQmVzdC1S/ZWFjdC1EZXNpZ24t/UGF0dGVybnMtWW91/LVNob3VsZC1Lbm93/LUFib3V0LTEtMTAy/NHg1MTIucG5n'
            alt='Bold typography'
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Inset>
        <Flex direction='column' gapY='2'>
          <Text as='p' size='3'>
            <Strong>Children Pattern</Strong>
          </Text>
          <Text as='p' size='3'>
            - Improves the readability of component trees
          </Text>
          <Text as='p' size='3'>
            - Improves performance
          </Text>
          <Text as='p' size='3'>
            - Is a form of composition
          </Text>
          <Text as='p' size='3'>
            - This pattern only works when the children's elements do not depend
            on their parent component's internal variables
          </Text>
        </Flex>
      </RadixCard>
    </Box>
  );
}
