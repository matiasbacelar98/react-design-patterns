import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';

/*
  https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
*/

export default function PolymorphismPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Polymorphism Pattern</Heading>
      <PolymorphicText as='a' href='/'>
        This is link
      </PolymorphicText>
      <PolymorphicText as='div' color='blue'>
        This is a div
      </PolymorphicText>
      <PolymorphicText as='p' color='red'>
        This is a parragraph
      </PolymorphicText>
    </Flex>
  );
}

type Colors =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet';

type PolymorphicTextProps<C extends React.ElementType> = {
  as?: C;
  color?: Colors | 'black';
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  PolymorphicTextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof PolymorphicTextProps<C>>;

function PolymorphicText<C extends React.ElementType>({
  as,
  color,
  children,
  ...rest
}: Props<C>) {
  const Component = as || 'span';

  const style = color ? { style: { color } } : {};

  return (
    <Component {...rest} {...style}>
      {children}
    </Component>
  );
}
