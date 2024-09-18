import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';

export default function StyleDelegationPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Style Delegation Pattern</Heading>

      <SliderOne
        label='Slider One'
        handleSize={12}
        handleColor='green'
        handleActiveColor='blue'
      />

      <SliderTwo label='Slider Two' className='some-class' />
    </Flex>
  );
}

/* Styling with specific props */
/*
  - Limit control (useful in Design systems)
  - Not very flexible
*/
interface SliderOneProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  handleSize: number;
  handleColor: string;
  handleActiveColor: string;
}

function SliderOne({
  label,
  handleSize,
  handleColor,
  handleActiveColor,
  ...rest
}: SliderOneProps) {
  const id = React.useId();

  return (
    <div className='wrapper-class'>
      <label htmlFor={id} className='label-class'>
        {label}
      </label>
      <input
        {...rest}
        type='range'
        id={id}
        className='slider-class'
        // CSS Variables used to changed styling
        style={
          {
            '--handle-size': handleSize,
            '--handle-color': handleColor,
            '--handle-active-color': handleActiveColor,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

/* Styling with clasname props */
/*
  - Full control (the consumer can change all the css)
  - A lot of flexibility (it can be a problem)
*/
interface SliderTwoProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  className?: string;
}

function SliderTwo({ label, className = '', ...rest }: SliderTwoProps) {
  const id = React.useId();

  const sliderClassName = `'slider-class' ${className}`;

  return (
    <div className='wrapper-class'>
      <label htmlFor={id} className='label-class'>
        {label}
      </label>
      <input {...rest} type='range' id={id} className={sliderClassName} />
    </div>
  );
}
