import { HStack, Text, VStack, Heading } from "@gluestack-ui/themed";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center">
      <VStack>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Rodrigo Gonçalves
        </Heading>
      </VStack>
    </HStack>
  );
}
