import { Theme, Container, Heading } from '@radix-ui/themes';

export default function App() {
  return (
    <Theme accentColor='blue'>
      <Container size='4' p='4'>
        <Heading color='blue'>React Design Patterns</Heading>
      </Container>
    </Theme>
  );
}
