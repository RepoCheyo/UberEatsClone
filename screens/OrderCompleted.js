import React, { useEffect } from 'react'
import { SafeAreaView, SegmentedControlIOSBase } from 'react-native'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems'
import firebase from "../firebase"
import { ScrollView } from 'react-native-gesture-handler'

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Burgir",
                description: "Delicious Burgir",
                price: "$19.99",
                image: "https://cdn7.kiwilimon.com/recetaimagen/229/640x426/th5-640x426-16781.jpg.webp",
            }, 
        ]
    })
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
        
        // '$13.50'
        // '$13.50'
        // Number ('13.50') => 13.5
        // [13.5, 20.5, 19.5]
        // reduce => [13.5, 20.5, 19.5]
        // reduce 13.5 + 20.5 + 19.5 = 43.5

    const total = items 
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

        const totalUSD = total.toLocaleString("en", {
            style: "currency",
            currency: "USD",
        })

        useEffect(() => {
            const db = firebase.firestore()
            const unsubscribe= db.collection("orders")
                .orderBy('createAt', 'desc')
                .limit(1)
                .onSnapshot((snapshot) => {
                    snapshot.docs.map((doc) =>{
                        setLastOrder(doc.data())
                    })
                })

            return () => unsubscribe()
        }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white" }}>
            <View style={{margin: 15, alignItems:"center", height:"100%"}}>
                <LottieView style={{height: 100, alignSelf:'center', marginBottom: 30}} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.5} loop={false} />
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>
                <ScrollView>
                    <MenuItems foods={lastOrder.items} hideCheckbox={true} />
                    <LootieView style={{height: 200, alignSelf: 'center'}} source={require("../assets/animations/cooking.json")} autoPlay speed={0.5} />
                </ScrollView>
            </View>
    </SafeAreaView>
    )
}
