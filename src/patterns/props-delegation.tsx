import { Flex, Heading, Text, Button, ButtonProps } from '@radix-ui/themes';
import React from 'react';

export default function PropsDelegationPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Props Delegation Pattern</Heading>
      <SuperButton variant='outline'>This is a button</SuperButton>
    </Flex>
  );
}

/*
  Good Pattern when =>
    - We need to create a "Supercharged HTML Tag"
    - We have a component that accepts a lot of props (and maybe a couple are optional)
*/

/*
  https://www.totaltypescript.com/react-component-props-type-helper
  https://mortenbarklund.com/blog/react-typescript-props-spread/
*/

interface SuperButtonProps extends ButtonProps {
  children: React.ReactNode;
}

function SuperButton({ children, ...rest }: SuperButtonProps) {
  return (
    <Flex direction='column' gapY='3'>
      <Text weight='bold'>I am a Super Button!!!</Text>
      <Button {...rest}>{children}</Button>
    </Flex>
  );
}
