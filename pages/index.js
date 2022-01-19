import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Text, Button } from '@chakra-ui/react'

import { urlBase, fetchApiData } from '../utils/FetchAPI'

const Banner = ({ imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => {
  return <>
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image src={imageUrl} width={500} height={300} alt='image alt'></Image>
      <Box ml={5}>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
        <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
        <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
        <Button fontSize='xl' bg="blue" color="white">
          <Link href={linkName}><a>{buttonText}</a></Link>
        </Button>
      </Box>
    </Flex>
  </>
}

const Home = ( {propertiesForSale, propertiesForRent} ) => {
  console.log(propertiesForSale)
  console.log(propertiesForRent)
  return <>
    <Box>
          <Banner
            purpose='RENT A HOME'
            title1='Rental Homes for'
            title2='Everyone'
            desc1=' Explore from Apartments, builder floors, villas'
            desc2='and more'
            buttonText='Explore Renting'
            linkName='/search?purpose=for-rent'
            imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
          />

          <Banner
            purpose='BUY A HOME'
            title1=' Find, Buy & Own Your'
            title2='Dream Home'
            desc1=' Explore from Apartments, land, builder floors,'
            desc2=' villas and more'
            buttonText='Explore Buying'
            linkName='/search?purpose=for-sale'
            imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
          />
    </Box>
  </>
}

// Read more about the documentation how this function will get called in the component props, `next.js Docs`
export async function getStaticProps() {
  const propertyForSale = await fetchApiData(`${urlBase}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`);
  const propertyForRent = await fetchApiData(`${urlBase}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}


export default Home;
