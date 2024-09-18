import { Theme, Container, Heading, Flex } from '@radix-ui/themes';

// import ChildrenPattern from './patterns/children';
// import CompoundPattern from './patterns/compound';
// import HOCPattern from './patterns/hoc';
// import PropsDelegationPattern from './patterns/props-delegation';
// import StyleDelegationPattern from './patterns/style-delegation';
// import SlotsPattern from './patterns/slots';
// import PolymorphismPattern from './patterns/polymorphism';
// import RenderPropsPattern from './patterns/render-props';
import ContainerPresentationalPattern from './patterns/container-presentational';

export default function App() {
  return (
    <Theme accentColor='blue'>
      <Container size='4' p='4'>
        <Flex direction='column' gapY='6'>
          <Heading color='blue'>React Design Patterns</Heading>
          {/* <ChildrenPattern /> */}
          {/* <CompoundPattern /> */}
          {/* <HOCPattern /> */}
          {/* <PropsDelegationPattern /> */}
          {/* <StyleDelegationPattern /> */}
          {/* <SlotsPattern /> */}
          {/* <PolymorphismPattern /> */}
          {/* <RenderPropsPattern /> */}
          <ContainerPresentationalPattern />
        </Flex>
      </Container>
    </Theme>
  );
}
