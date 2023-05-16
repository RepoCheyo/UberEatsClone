import * as React from "react";
import { View, Text, Switch, SafeAreaView, ScrollView, useEffect} from "react-native";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import SafeViewAndroid from "../components/Home/SafeViewAndroid";
import SearchBar from "../components/Home/SearchBar";
import RestaurantItems, {localRestaurants,} from "../components/Home/RestaurantItems";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements"; 



const YELP_API_KEY = "VyrGMtNyO25zift5RL3ovFLZ88dJP53qVv6Hqaem0WWBgcFS-9MeL5czJfJ5xRHt4TRQDFH4sXctgNgkNv8ZQclNxz-mqLeh5jr7kgMVFBqxs55h_1-CPqo_av1hYXYx";

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
    const [city, setCity] = React.useState("San Francisco")
    const [activeTab, setActiveTab] = React.useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=BeverlyHills`;

    

    const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };


        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))));
    };

    React.useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

        return (
        <SafeAreaView style={ SafeViewAndroid.AndroidSafeArea } >
                <View>
                    <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    <SearchBar cityHandler={setCity} /> 
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Categories />
                    <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
                </ScrollView>  
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>

        );
}
