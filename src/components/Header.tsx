import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex h={100} align="center" justify="center" >
            <Image src="/Worldtrip.svg" alt="Worldtrip" />
        </Flex>
    );
}