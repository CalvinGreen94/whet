import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from '@components/animations/motion'
import products from '@components/data/products/'
import ProductCard from '@components/cards/ProductCard'
import ProductModal from '@components/cards/ProductModal'
import { Box, Flex, Spacer, Center, Grid, HStack, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
// import Title, { LU } from '@components/animations/AnimatedTitles'
import { useInView } from 'react-intersection-observer'
import MBC from '@components/mint/MintButtonCircles'

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function Home() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()

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
            <span style={{fontWeight: "400"}}><Center><Heading><Link href="https://bored-circles-club.gitbook.io/product-docs/">Welcome To Bored Circles Club</Link></Heading></Center> <Spacer />

            If you are here then you share a common love for circles and utility. This collection consists of 5555 Bored Circles NFTs currently minting at 0.008ETH. With every 1111 Bored Circles minted the mint price rises +0.01Ξ until mint has sold out.
            
            <Spacer /> Bored Circles is paired with 55,555,555 $CIR (Bounce Tokens) to be shared among holders for each deployed Circle. </span> <Spacer /> 30,858,025 $CIR from the total circulating supply will be minted out in total to OG Bored Circle Club holders throughout the Bored Circles minting process(For Each "Bored Circles" NFT owned you will receive 5555 $CIR . You can use these tokens to stake $CIR in the Bounce contract to gain interest on $CIR). Non $CIR holders will be able to swap ETH for $CIR via UniSwap or metamask to stake and compound $CIR tokens.
            <Spacer /> 
            Initially, you will automatically start gaining 0.005 $CIR/hr via <span style={{fontWeight: "400"}}><Link href='about'> Staking </Link>...</span>
             </font>
            
            <Center>
          <MBC />
          </Center>
            
          <Link href="https://bored-circles-club.gitbook.io/product-docs/">See more ...</Link>
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
           <Center>

{/* 

          <video 
                    className={styles.aboutTrailer}
                    src="videos/demo.gif" 
                    alt="generations"
                    controls
                    objectfit="cover"
                    layout="fill"
                /> */}



          </Center> 
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

        <Heading pt={20}>
          {/* <LU /> */}
        </Heading>

        <Text textStyle="content">
            <span style={{fontWeight: "400"}}>
            {/* <Heading pt={20}></Heading> */}
            <Heading pt={20}><Link href="https://bored-circles-club.gitbook.io/product-docs/">Please Read Whitepaper</Link> </Heading>
            

            
            </span>
        </Text>
    </Box>
  );
}
