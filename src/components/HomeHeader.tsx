import { HStack, Text, VStack, Heading, Icon } from "@gluestack-ui/themed";

import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/Silva015.png" }}
        alt="Imagem do usuário"
        w="$16"
        h="$16"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Rodrigo Gonçalves
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
