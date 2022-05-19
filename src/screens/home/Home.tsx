import * as React from "react";
import * as Svg from "react-native-svg";

import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import welcomeIMG from "../../assets/welcomeIMG.png";

export function Home() {
  const navigation = useNavigation();
  function openScreen() {
    navigation.navigate("feelingPage");
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Image source={welcomeIMG} />
        <Text style={styles.title}>Olá, seja bem vinda</Text>
        <Text style={styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
      </View>

      <TouchableOpacity onPress={openScreen} style={styles.button}>
        <Text style={styles.textButton}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}
