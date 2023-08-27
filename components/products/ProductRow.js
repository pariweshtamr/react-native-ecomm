import { FlatList, View } from "react-native"
import styles from "./productRow.styles"
import { SIZES } from "../../constants"
import ProductCard from "./ProductCard"

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5]

  const renderItem = ({ item }) => {
    return <ProductCard item={item} />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  )
}
export default ProductRow
