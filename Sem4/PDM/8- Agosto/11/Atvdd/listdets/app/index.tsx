import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { lanches } from "../assets/mockups/posts";
import { router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    fontSize: 14,
    marginBottom:16,
    color: "#fff",
    lineHeight: 1.6,
    padding: 8,

  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    margin: 6,
    borderRadius: 8,
    backgroundColor: "rgba(196, 126, 5, 1)",
  },
  title: {
    width:"33%",
    marginRight:100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    fontSize: 18,
  },
});

export default function Index() {

  function abreDetalhes(id: number) {
    router.push(`./dets?id=${id}`);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={lanches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => abreDetalhes(item.id)}
          >
            <Text style={styles.title}>{item.nome}</Text>

          </TouchableOpacity>
        )}
      />
    </View>
  );
}

