import { HStack, Text, VStack, Heading } from "@gluestack-ui/themed";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/Silva015.png" }}
        alt="Imagem do usuário"
        w="$16"
        h="$16"
      />
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
