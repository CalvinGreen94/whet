import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from '@components/animations/motion'
import products from '@components/data/products/'
import ProductCard from '@components/cards/ProductCard'
import ProductModal from '@components/cards/ProductModal'
import { Box, Button,Flex, Spacer, Center, Grid, HStack, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
// import Title, { LU } from '@components/animations/AnimatedTitles'
import { useInView } from 'react-intersection-observer'
import MBC from '@components/mint/MintButtonCircles'
import { Textarea } from '@nextui-org/react';

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function Home() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
  });

  const buttonVariants = {
    initial: {
      scale: 1
    },
    whileInView: {
      scale: [1.5, 1],
      transition: {repeat: Infinity, type: "spring", duration: 2}
    },
    hover: {
      color: "#008080"
    },
    tap: {
      scale: 2
    }
  }

  const getResponseFromOpenAI = async () => {
    setResponse("");
    console.log("Getting response from OpenAI...");
    setIsLoading(true);
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });

    const data = await response.json();
    setIsLoading(false);
    console.log(data.text);
    setResponse(data.text);
  };

  return (
    <Box>
        <Head>
            <title>
                Bored Circles | Dashboard
            </title>
        </Head>

        {/* <Center><Heading>Welcome To Bored Circles</Heading></Center> */}
        <Box alignContent="center">

            <Box textStyle="landingPageContent" mb={10} pb={0}>
              
                     <Text textStyle="content"><font color="#010332"> 
                       
                        Circles spinning all around, Reaching out, never bound Spinning faster and faster, Rising higher, never ending. Circles all around us, Moving us and astound us, The spinning never stops, Oh, the wonderful circles, Circles in the sky and sea, In the wind, and in between, The beauty and the mystery, The splendor of the circles.  Circles all around us, Moving us and astound us, The spinning never stops, Oh, the wonderful circles. Circles, spinning in the night, Circles, leading us to the light, Circles, guiding us through the night, Circles, never ending in sight Circles all around us, Moving us and astound us, The spinning never stops, Oh, the wonderful circles!
                       
                       </font> </Text>
              
            <Text textStyle="content"><font color="#010332">
            <span style={{fontWeight: "400"}}><Center><Heading><Link href="https://bored-circles-club.gitbook.io/product-docs/">Welcome To Bored Circles Club</Link></Heading></Center> <Spacer />

            If you are here then you share a common love for circles and utility. This collection consists of 5555 Bored Circles NFTs currently minting at 0.008ETH. With every 1111 Bored Circles minted the mint price rises +0.01Ξ until mint has sold out.
            
            <Spacer /> Bored Circles is paired with 55,555,555 $CIR (Bounce Tokens) to be shared among holders for each deployed Circle. </span> <Spacer /> 30,858,025 $CIR from the total circulating supply will be minted out in total to OG Bored Circle Club holders throughout the Bored Circles minting process(For Each "Bored Circles" NFT owned you will receive 5555 $CIR . You can use these tokens to stake $CIR in the Bounce contract to gain interest on $CIR). Non $CIR holders will be able to swap ETH for $CIR via UniSwap or metamask to stake and compound $CIR tokens.
            <Spacer /> 
            Initially, you will automatically start gaining 0.005 $CIR/hr via <span style={{fontWeight: "400"}}><Link href='about'> Staking </Link>...</span>
             </font>
            
            <Center>
          <MBC />
          </Center>

          <Center>



<video 
          // className={styles.aboutTrailer}
          src="videos/demo.mp4" 
          alt="generations"
          controls
          objectfit="cover"
          layout="fill"
      /> 



</Center> 
          <Link href="https://bored-circles-club.gitbook.io/product-docs/">See more ...</Link>
            </Text>


            <Text textStyle="content">
            <span style={{fontWeight: "400"}}>
            {/* <Heading pt={20}></Heading> */}
            <Heading pt={20}><Link href="https://bored-circles-club.gitbook.io/product-docs/">Please Read Whitepaper</Link> </Heading>

            <Spacer />
           <Center>
            <Text>After Reading Whitepaper feel free to ask ChatGPT any questions about blockchain operations.</Text>
            <Spacer />
            <div className={styles.center}>
            <Textarea status="secondary" 
            placeholder="Enter a prompt"
            onChange={(e) => setPrompt(e.target.value)}
            row="5"
            cols="50"
            
          />
          <Button onClick={getResponseFromOpenAI}>
            Get Response
          </Button>

          <div className={styles.response}>
            {isLoading ? (
              <div>Waiting for response ...</div>
            ) : (
              <div>{response}</div>
            )}
          </div>
          </div>
          </Center> 
</span>
</Text>
      
            </Box>
        </Box>
        
        {/* <Box p={20} align="center" overflowX="scroll"
          css={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-track': {
              height: '5px',
              background: "white",
            },
            '&::-webkit-scrollbar-thumb': {
              background: "teal",
              borderRadius: '16px',
            },
          }}
          > */}

          {/* <MotionSimpleGrid 
            display="flex"
            mt="4"
            minWidth={{ base: "1500px", md: "2000px" }}
            spacing="10em"
            minH="full"
            variants={parentVariant}
            animate={inView ? "animate" : "initial"}
            ref={ref}
          >
            {products.map((product, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <ProductCard product={product} setModalData={setModalData} />
              </MotionBox>
            ))}
            // </MotionSimpleGrid> */}
            {/* <ProductModal
              isOpen={modalData ? true : false}
              onClose={() => setModalData(null)}
              modalData={modalData}
            /> */}
        {/* </Box> */}

  

    </Box>
  );
}
