import { ActivityIndicator, FlatList, Text, View } from "react-native"
import styles from "./productRow.styles"
import { COLORS, SIZES } from "../../constants"
import ProductCard from "./ProductCard"
import useFetch from "../../hook/useFetch"

const ProductRow = () => {
  const { data, isLoading, error } = useFetch()

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong!</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      )}
    </View>
  )
}
export default ProductRow
