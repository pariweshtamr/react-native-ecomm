import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import styles from "../styles/newArrivals.styles"
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../constants"
import { ProductList } from "../components"
const NewArrivals = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>

          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  )
}
export default NewArrivals
