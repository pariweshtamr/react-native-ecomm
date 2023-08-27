import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "../styles/productDetails.styles"
import { COLORS, SIZES } from "../constants"
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons"
import { useState } from "react"
const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    if (count === 1) return
    setCount((prev) => prev - 1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg",
        }}
        style={styles.img}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Sofa</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$500</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Ionicons name="star" size={24} color="gold" key={i} />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            obcaecati, quis reiciendis laborum voluptatibus cum perspiciatis
            quidem, harum consequatur amet libero porro iste quisquam
            recusandae. Maxime explicabo magni similique nobis.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.xSmall }}>
          <View style={styles.location}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons name="location-outline" size={20} />
              <Text>Sydney</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartText}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" color={COLORS.lightWhite} size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default ProductDetails
