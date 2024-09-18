import { Heading, Flex, AspectRatio, Grid } from '@radix-ui/themes';
import React from 'react';

export default function ContainerPresentationalPattern() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading>Container Presentational Pattern</Heading>
      <ImagesContainer />
    </Flex>
  );
}

/* With this pattern, we can separate the view from the application logic */
interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// With hooks we dont really need this pattern anymore
function ImagesContainer() {
  // I am using hooks but the idea is the same
  const [images, setImages] = React.useState<Image[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return <Images images={images} />;
}

function Images({ images }: { images: Image[] }) {
  return (
    <Grid columns='3' gap='3' width='auto'>
      {images.map(item => (
        <AspectRatio ratio={16 / 8}>
          <img
            src={item.url}
            alt='A house in a forest'
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </AspectRatio>
      ))}
    </Grid>
  );
}
