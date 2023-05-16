import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const food = [
    {
        title: "Burgir",
        description: "Delicious Burgir",
        price: "$19.99",
        image: "https://cdn7.kiwilimon.com/recetaimagen/229/640x426/th5-640x426-16781.jpg.webp",
    },    
    {
        title: "Tacos",
        description: "Mexican",
        price: "$29.99",
        image: "https://foodandtravel.mx/wp-content/uploads/2017/02/Tacos-tradicionales.jpg",
    },    
    {
        title: "Chilaquiles",
        description: "Buenos Buenos",
        price: "$14.99",
        image: "https://www.superama.com.mx/views/micrositio/recetas/images/masbuscadas/chilaquiles/Web_fotoreceta.jpg",
    },    
    {
        title: "Burritos",
        description: "Big and hot",
        price: "$29.99",
        image: "https://www.maricruzavalos.com/wp-content/uploads/2010/09/chicken_and_rice_burrito_recipe.jpg",
    },    
    {
        title: "Pizza",
        description: "American and fat",
        price: "$29.99",
        image: "https://www.dondeir.com/wp-content/uploads/2019/08/pizza-hut-cadenas-de-pizza-cdmx.jpg",
    },
    {
        title: "Pasta",
        description: "A lot of kinds",
        price: "$19.99",
        image: "https://gourmetdemexico.com.mx/wp-content/uploads/2017/09/comida-italiana.jpg",
    },   
]

export default function RestaurantDetail({route, navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1.8}  style={{marginVertical: 10}} />
            <MenuItems restaurantName={route.params.name} foods={food} />
            <ViewCart navigation={navigation} />
        </View>
    )
}
