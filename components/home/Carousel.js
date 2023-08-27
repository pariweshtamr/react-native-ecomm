import { View, StyleSheet } from "react-native"
import { SliderBox } from "react-native-image-slider-box"
import { COLORS } from "../../constants"

const Carousel = () => {
  const slides = [
    "https://st4.depositphotos.com/1023934/37752/i/450/depositphotos_377527168-stock-photo-interior-design-modern-living-room.jpg",
    "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg",
    "https://img.freepik.com/premium-photo/wood-sideboard-elegant-living-room-interior-design-ai-generated_878893-690.jpg",
  ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "94%",
          height: 250,
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  )
}
export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
})
