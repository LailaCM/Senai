import { View, Text, Image, StyleSheet } from "react-native";
import { lanches } from "../assets/mockups/posts";
import { useLocalSearchParams } from "expo-router";

type Lanche = {
    id: number;
    nome: string;
    ingredientes: string[] | string;
    preco: number;
    image: string;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "rgba(196, 126, 5, 1)",
        borderRadius: 12,
        margin: 16,
        alignItems: "center",
        justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#fff",
        textAlign: "center",
    },
    image: {
        width: 240,
        height: 240,
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#fff",
    },
    ingredientesContainer: {
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },
    ingrediente: {
        fontSize: 22,
        marginBottom: 6,
        color: "#fff",
    },
    content: {
        fontSize: 32,
        fontWeight: "600",
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.2)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
});

export default function Detalhes() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const index = lanches.findIndex((l: Lanche) => l.id === Number(id));
    const lanche = lanches[index] as Lanche;

    // Transforma em array se vier string
    const ingredientesArray = Array.isArray(lanche.ingredientes)
        ? lanche.ingredientes
        : lanche.ingredientes.split(",").map((item) => item.trim());

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{lanche.nome}</Text>

            {ingredientesArray.map((ingrediente, idx) => (
                <Text key={idx} style={styles.ingrediente}>
                    • {ingrediente}
                </Text>
            ))}

            <Text style={styles.content}>R$ {lanche.preco}</Text>
            <Image
                source={{ uri: lanche.image }}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
}
