import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import colors from "../styles/colors";
import { Header } from "../components/Header";
import fonts from "../styles/fonts";
import { EnvironmentButton } from "../components/EnvironmentButton";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load";
import { DarkTheme } from "@react-navigation/native";

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantCardProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plantCards, setPlantCards] = useState<PlantCardProps[]>([]);
  const [filteredPlantCards, setFilteredPlantCards] = useState<
    PlantCardProps[]
  >([]);
  const [environmentSelected, setEnvironmentSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === "all") return setFilteredPlantCards(plantCards);

    const filtered = plantCards.filter((plant) => {
      return plant.environments.includes(environment);
    });

    setFilteredPlantCards(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    if (!data) return setLoadedAll(true);

    if (page > 1) {
      setPlantCards((oldValue) => [...oldValue, ...data]);
      setFilteredPlantCards((oldValue) => [...oldValue, ...data]);
    } else {
      setPlantCards(data);
      setFilteredPlantCards(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  //useEffect -> é carregado antes da tela ser exibida
  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <Load />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual Ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              onPress={() => handleEnvironmentSelected(item.key)}
              active={item.key === environmentSelected}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          //ListFooterComponent={<View />}
          ListHeaderComponentStyle={{ marginRight: 32 }}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          data={filteredPlantCards}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <PlantCardPrimary
                data={item}
                //onPress={() => setIsActive(true)}
                //active={isActive}
              />
            );
          }}
          numColumns={2}
          // contentContainerStyle={styles.plantCardsFlatList}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1} //10% do final da tela
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          //loading novas páginas
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginVertical: 28,
    marginLeft: 25,
    paddingRight: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 22,
    justifyContent: "space-between",
    //paddingBottom: 400,
  },
});
