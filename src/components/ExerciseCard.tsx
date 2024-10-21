import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray600"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://www.smartfit.com.br/news/wp-content/uploads/2019/12/ser-fitness.jpg",
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          mr="$4"
          rounded="$md"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Puxada frontal
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
