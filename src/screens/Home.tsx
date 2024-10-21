import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Ombro",
    "Tríceps",
    "Bíceps",
    "Peito",
    "Perna",
    "Abdômen",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item as string}
        renderItem={({ item }) => (
          <Group
            name={item as string}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item as string)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px="$8">
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercícios
          </Heading>

          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            4
          </Text>
        </HStack>

        <ExerciseCard />
      </VStack>
    </VStack>
  );
}
