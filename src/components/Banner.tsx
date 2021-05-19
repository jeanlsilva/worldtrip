import { Box, Flex, Text, Image } from "@chakra-ui/react";


export default function Banner() {
    return (
        <Flex h={368.21}>
            <Flex
                bgImage="url('/Background.svg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                justify="center"
                h="335"
                w="100%"
            >
                <Flex w={1160} justify="space-between" align="center">
                    <Box color="gray.50">
                        <Text as="h1" fontSize="4xl" maxWidth={426}>5 Continentes,<br /> infinitas possibilidades.</Text>
                        <Text as="h2" fontSize="lg" maxWidth={524}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                    </Box>
                    <Box>
                        <Image
                        src="/Airplane.svg"
                        alt="Airplane"
                        pos="relative"
                        transform="rotate(3deg)"
                        top="55"
                        />
                    </Box>
                </Flex>            
            </Flex>
        </Flex>        
    );
}