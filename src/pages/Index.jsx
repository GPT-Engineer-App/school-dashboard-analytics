import React from "react";
import { Box, Heading, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Grid, GridItem, useColorModeValue, chakra } from "@chakra-ui/react";
import { FaChartBar, FaMale, FaFemale, FaUsers } from "react-icons/fa";

// Mock function to return graph component (As we cannot implement a real graph in this environment)
const Graph = ({ title }) => (
  <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
    <Heading fontSize="xl">{title}</Heading>
    {/* This should be replaced with an actual graph component */}
    <chakra.div h="200px" mt={4} bg={useColorModeValue("gray.100", "gray.700")} borderRadius="md">
      Graph for {title}
    </chakra.div>
  </Box>
);

const Index = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Principal's Dashboard</Heading>
      <VStack spacing={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%">
            <Stat p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <HStack>
                <FaUsers size="3em" />
                <Box>
                  <StatLabel>Students Enrolled</StatLabel>
                  <StatNumber>320</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    12% since last year
                  </StatHelpText>
                </Box>
              </HStack>
            </Stat>
          </GridItem>
          <GridItem w="100%">
            <Stat p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <HStack>
                <FaMale size="3em" />
                <Box>
                  <StatLabel>Male Students</StatLabel>
                  <StatNumber>175</StatNumber>
                </Box>
              </HStack>
            </Stat>
          </GridItem>
          <GridItem w="100%">
            <Stat p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <HStack>
                <FaFemale size="3em" />
                <Box>
                  <StatLabel>Female Students</StatLabel>
                  <StatNumber>145</StatNumber>
                </Box>
              </HStack>
            </Stat>
          </GridItem>
        </Grid>
        <VStack spacing={4} align="stretch">
          <Graph title="Students Attendance" />
          <Graph title="Students Marks" />
          <Graph title="Enrolment Based on Gender" />
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
