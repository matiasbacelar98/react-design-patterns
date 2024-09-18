import { Heading, Flex, AspectRatio, Text } from '@radix-ui/themes';
import React from 'react';

export default function SlotsPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Slots Pattern</Heading>
      <CaptionedImage
        src='https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80'
        alt='A house in a forest'
        caption={
          <Text color='amber' weight='medium' size='1'>
            Photo by <a href=''>Manuel Capellari</a>, shot in August 2019 and
            published on <strong>Unsplash</strong>.
          </Text>
        }
      />
    </Flex>
  );
}

/*
  Creates a "slot" where we can pass whatever we want
*/
interface CaptionedImageProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
}

function CaptionedImage({ src, alt, caption }: CaptionedImageProps) {
  return (
    <Flex direction='column' gapY='2'>
      <AspectRatio ratio={16 / 8}>
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: 2,
          }}
        />
      </AspectRatio>
      {caption}
    </Flex>
  );
}
