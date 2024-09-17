import { Theme, Container, Heading, Flex } from '@radix-ui/themes';

// import ChildrenPattern from './patterns/children';
import CompoundPattern from './patterns/compound';

export default function App() {
  return (
    <Theme accentColor='blue'>
      <Container size='4' p='4'>
        <Flex direction='column' gapY='6'>
          <Heading color='blue'>React Design Patterns</Heading>
          {/* <ChildrenPattern /> */}
          <CompoundPattern />
        </Flex>
      </Container>
    </Theme>
  );
}
