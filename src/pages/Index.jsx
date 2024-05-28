import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="#333333" color="#ffffff" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#cccccc" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "#cccccc" }}>
              Markets
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "#cccccc" }}>
              World
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "#cccccc" }}>
              Opinion
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Top News Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>
            Top News
          </Heading>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="/images/news1.jpg" alt="News 1" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>
                Headline for Top News Article 1
              </Heading>
              <Text mt={2}>
                Brief description or summary of the top news article. This should give readers an idea of what the article is about.
              </Text>
            </Box>
            <Box>
              <Image src="/images/news2.jpg" alt="News 2" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>
                Headline for Top News Article 2
              </Heading>
              <Text mt={2}>
                Brief description or summary of the top news article. This should give readers an idea of what the article is about.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <Box bg="#f0f0f0" p={4} borderRadius="md" mb={8}>
            <Text>Market data and financial information will be displayed here.</Text>
          </Box>
          <Heading as="h2" size="lg" mb={4}>
            Trending Topics
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="#f0f0f0" p={4} borderRadius="md">
              <Text>Trending Topic 1</Text>
            </Box>
            <Box bg="#f0f0f0" p={4} borderRadius="md">
              <Text>Trending Topic 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;