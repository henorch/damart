import { Button, Image, Pressable, View } from "react-native";
import image_1 from '../../mainImages/main1.webp'
import image_2 from '../../mainImages/main2.webp'
import image_3 from '../../mainImages/main3.webp'
import { useState, useEffect } from "react";

const images = [ image_1, image_2, image_3]

export default function Carousel({ autoplayInterval = 5000}){
    const [ currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex(prevState => 
        prevState === images.length -1 ? 0 : prevState + 1
        )
    }

    const prevSlide = () => {
        setCurrentImageIndex(prevState => 
        prevState === images.length -1 ? 0 : prevState - 1
        )
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, autoplayInterval);
        return () => clearInterval(intervalId);
      }, [autoplayInterval]);
    

    return(
        <View style={{
            height:350,
            width:'100%',
            margin:10,
            flex:1,
            }}>
        
        <Image source={images[currentImageIndex]} alt='image loading'
        style={{
            height:350,
            width:'95%',
        }}
        />
        <View style={{
            width: 10,
            height:10,
            borderRadius:50,
            margin:5
        }}>
        {images.map((_, index) => (
          <Pressable
            key={index}
            className={index === currentImageIndex ? "indicator active" : "indicator"}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        </View>
        </View>
    )
}