import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name:"Beachside Bar",
        image_url:"https://resizer.otstatic.com/v2/photos/wide-huge/1/25085057.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name:"Benihana",
        image_url:"https://cdn.vox-cdn.com/thumbor/ECBsMMHko448azarCjdm6HN-GCs=/0x0:2000x1335/1200x900/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2017_08_28_broken_shaker_012.6.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name:"Yupo Yupo",
        image_url:"https://cdn.vox-cdn.com/thumbor/ECBsMMHko448azarCjdm6HN-GCs=/0x0:2000x1335/1200x900/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/59732085/2017_08_28_broken_shaker_012.6.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$$",
        reviews: 1244,
        rating: 5.0,
    }
];

export default function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={0.75} style={{ marginBottom: 30 }} onPress= {
                    () => navigation.navigate("RestaurantDetail", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}>
                    <View style={{ marginTop: 10, padding: 15 }}>
                        <RestaurantImage image={restaurant.image_url}/>
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}


const RestaurantImage = (props) => (
    <>
    <Image 
        source={{
            uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
        
    />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}>
            <View>
                <Text style={{ fontSize:15, fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>30 - 45 min</Text>
            </View>
            <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", borderRadius: 15, justifyContent:"center" }}>
                <Text>{props.rating}</Text>
            </View>
    </View>
)