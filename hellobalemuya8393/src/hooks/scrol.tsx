import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';

export default function Scroll() {

  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            scroll
          </Text>
        </Box>
      </Box>
    </>
  );
}