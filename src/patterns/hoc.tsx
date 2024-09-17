import { Flex, Heading, Button, ButtonProps } from '@radix-ui/themes';

export default function HOCPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>HOC Pattern</Heading>
      <StyledButtonOne>Button One</StyledButtonOne>
      <StyledButtonTwo>Button Two</StyledButtonTwo>
    </Flex>
  );
}

/*
  Is useful when we need to reuse the same logic in multiple components (a hook my be a better option).
  The logic maybe is applying some styling or requiring authorization etc.
*/
function withStyles(Component: React.ElementType) {
  return (props: ButtonProps) => {
    const clr = 'cyan';

    return (
      <Component color={clr} {...props}>
        {props.children}
      </Component>
    );
  };
}

const StyledButtonOne = withStyles(Button);
const StyledButtonTwo = withStyles(Button);
