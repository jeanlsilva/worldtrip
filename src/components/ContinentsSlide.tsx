import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetStaticProps } from 'next';

interface Continent {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    countries: number;
    languages: number;
    cidades100: string[];
    image: string;
  }

interface ContinentsSlideProps {
    continents: Continent[];
}

SwiperCore.use([Navigation, Pagination]);

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
    return (
        <Swiper 
            style={{ width:1240, height:450, marginTop:58, marginBottom:40 }} 
            navigation
            pagination={{ clickable: true }}
        >
            {continents.map(continent => {
                return (
                    <SwiperSlide style={{
                        background: `url(${continent.image}) no-repeat`, 
                        backgroundSize: 'cover',
                    }}>
                        <Flex flexDir="column" align="center" justify="center" h="100%">
                            <Heading fontSize="5xl" fontWeight="700" color="#dadada">{continent.title}</Heading>
                            <Text fontSize="2xl" fontWeigth="700" color="#dadada" mt="1rem">
                                {continent.subtitle}
                            </Text>
                        </Flex>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}