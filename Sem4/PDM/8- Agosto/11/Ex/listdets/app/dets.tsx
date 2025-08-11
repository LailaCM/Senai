import { View, Text, Image, StyleSheet } from "react-native";
import { posts } from "../assets/mockups/posts";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f07",
        borderRadius: 8,
        margin: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#fff",
    },
    content: {
        fontSize: 16,
        marginBottom: 16,
        color: "#fff",
    },
    image: {
        width: "100%",
        height: "50%",
    },
});

export default function Detalhes() {
    const { id } = useLocalSearchParams();
    let index = posts.findIndex(
        (post) => post.id === Number(id));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{posts[index].title}</Text>
            <Text style={styles.content}>{posts[index].content}</Text>
            <Image
                source={{ uri: posts[index].image }}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}
