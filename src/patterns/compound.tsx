import { Flex, Heading, Box, Card as RadixCard, Text } from '@radix-ui/themes';
import React from 'react';

export default function CompoundPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Compound Pattern</Heading>

      <Card>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card>
    </Flex>
  );
}

/*
  GOOD PATTERN FOR =>
    # For complex UI structures, reusable UI elements that involve multiple components working together
    # Provide flexibility and customization options for the component’s structure and styling
    # Share state and logic implicitly between components without explicit prop drilling
*/
function Card({ children }: React.PropsWithChildren) {
  return (
    <Box maxWidth='240px'>
      <RadixCard>{children}</RadixCard>
    </Box>
  );
}

function CardBody({ children }: React.PropsWithChildren) {
  return (
    <Text as='div' size='1' weight='bold'>
      {children}
    </Text>
  );
}

function CardFooter({ children }: React.PropsWithChildren) {
  return (
    <Text as='div' size='2' color='gray'>
      {children}
    </Text>
  );
}

Card.Body = CardBody;
Card.Footer = CardFooter;
