import { Flex, Heading, Link } from '@radix-ui/themes';

/*
  The example from the docs is super good!!!

  https://react.dev/learn/scaling-up-with-reducer-and-context

  # This is the final version => https://codesandbox.io/p/sandbox/wy7lfd
*/

export default function ContextProviderPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Context/Provider Pattern</Heading>
      <Link href='https://codesandbox.io/p/sandbox/wy7lfd'>Check Example</Link>
    </Flex>
  );
}
