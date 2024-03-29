import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  carousel: {
    height: 350,
    marginHorizontal: 5,
  },

  carouselHeaders: {
    alignItems: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    margin: 15
  },

  tile: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
    justifyContent: "flex-start",
    width: 220,
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  title: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  movieScreenRoot: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  movieScreenInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  movieScreenImageView: {
    backgroundColor: '#1c1c1c',
    height: 300,
    width: 428,
    alignItems: 'center',
  },

  movieScreenImage: {
    height: 300, 
    width: 200, 
    alignItems: 'center'
  },

  fullTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    margin: 7,
  },

  imdbRating: {
    fontSize: 18,
    fontStyle: 'italic'
  }

});

export default styles;
