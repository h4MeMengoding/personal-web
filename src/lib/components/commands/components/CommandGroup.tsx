import { Box, Heading } from '@chakra-ui/react';
import { Command } from 'cmdk';

import type { CommandCollection } from '~/lib/components/commands/types';

type CommandGroupProps = {
  children: React.ReactNode;
  data: CommandCollection;
};

const CommandGroup = ({ children, data }: CommandGroupProps) => {
  return (
    <Box
      as={Command.Group}
      marginBottom={4}
      heading={
        <Heading
          fontSize="xs"
          letterSpacing={2}
          textTransform="uppercase"
          paddingX={2}
          userSelect="none"
        >
          {data.heading}
        </Heading>
      }
    >
      {children}
    </Box>
  );
};

export default CommandGroup;
