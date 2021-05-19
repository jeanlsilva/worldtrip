import { Grid, Center, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
    return (
        <Grid templateColumns="repeat(5, 1fr)" mt={114}>
            <Center flexDir="column">
              <Image src="/Cocktail.svg" alt="Cocktail" />
              <Text fontSize="lg" fontWeight="600" mt={6}>vida noturna</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Surf.svg" alt="Surf" />
              <Text fontSize="lg" fontWeight="600" mt={6}>praia</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Building.svg" alt="Building" />
              <Text fontSize="lg" fontWeight="600" mt={6}>moderno</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Museum.svg" alt="Museum" />
              <Text fontSize="lg" fontWeight="600" mt={6}>clássico</Text>
            </Center>
            <Center flexDir="column">
              <Image src="/Earth.svg" alt="Earth" />
              <Text fontSize="lg" fontWeight="600" mt={6}>e mais...</Text>
            </Center>
          </Grid>
    );
}