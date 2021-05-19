import Head from 'next/head'
import { GetStaticProps } from 'next';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { api } from '../../services/api';

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

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Flex flexDir="column">
          <Header />
          <Banner />          
          <TravelTypes />
          <Flex justify="center" mt={30}>
            <Box h="0.5" mt={30} bg="#47585B" w="90px" d="block"></Box>
          </Flex>
          <Flex textAlign="center" justify="center" mt="52px">
            <Text fontSize="4xl" fontWeight="500">Vamos nessa?<br/>Então escolha seu continente</Text>
          </Flex>
          <ContinentsSlide continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async( context: any ) => {
  const response = await api.get('continents');

  const continents = response.data.map(continent => {
    return {
      id: continent.id,
      title: continent.title,
      subtitle: continent.subtitle,
      description: continent.description,
      countries: continent.countries,
      languages: continent.languages,
      cidades100: continent.cidades100,
      image: continent.image
    }
  });

  return {
      props: {
        continents,
      },
  }
}