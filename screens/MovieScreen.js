import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import styles from "../styles";
import { RatingTile } from "../components/Tile";

const MovieScreen = ({ route }) => {
  return (
    <SafeAreaView style={styles.movieScreenRoot}>
      <RatingTile item={route.params} />
    </SafeAreaView>
  );
};

export default MovieScreen;