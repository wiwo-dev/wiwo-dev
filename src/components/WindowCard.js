import { Badge, Box, Center, Heading, HStack, Text, VStack, Link } from "@chakra-ui/react";

export default function WindowCard({ children, ...rest }) {
  return (
    <>
      <VStack
        spacing="0"
        shadow="16px 16px 0px #C4C4C4"
        _hover={{ shadow: "20px 20px 0px #C4C4C4", transform: "translate(-2px, -2px)" }}
        _active={{ shadow: "8px 8px 0px #C4C4C4", transform: "translate(10px, 10px)" }}
        minWidth={["280px", "300px"]}
        {...rest}>
        <Box
          w="full"
          h="33"
          border="4px"
          borderColor="black"
          display="flex"
          justifyContent="space-between"
          alignItems="center">
          <HStack marginLeft="10px" spacing="7px">
            <Box rounded="full" bgColor="#61C454" h="12px" w="12px"></Box>
            <Box rounded="full" bgColor="#EE6A5E" h="12px" w="12px"></Box>
            <Box rounded="full" bgColor="#F5BD4F" h="12px" w="12px"></Box>
          </HStack>
          <Box borderLeft="4px" borderColor="black" h="100%" w="33px"></Box>
        </Box>
        <Box
          w="100%"
          minH={"185px"}
          paddingX="36px"
          paddingTop="52px"
          paddingBottom="62px"
          borderWidth="0px 4px 4px 4px"
          borderColor="black"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          {children}
        </Box>
      </VStack>
    </>
  );
}
