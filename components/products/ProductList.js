import useFetch from "../../hook/useFetch"
import styles from "./productList.styles"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { COLORS, SIZES } from "../../constants"
import ProductCard from "./ProductCard"
const ProductList = () => {
  const { data, isLoading, error } = useFetch()

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}
export default ProductList
