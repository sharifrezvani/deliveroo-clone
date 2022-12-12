import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {

    const navigation = useNavigation();

    const restaurant = useSelector(selectRestaurant);
    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <XMarkIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Need help?</Text>
                </View>
                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className='flex-row justify-between'>
                        <View className='space-y-1'>
                            <Text className='text-md text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-3xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image
                            source={require("../assets/biker.gif")}
                            className='w-16 h-16'
                        />
                    </View>

                    <Progress.Bar
                        size={25}
                        color='#00CCBB'
                        indeterminate={true}
                    />
                    <Text className='mt-3 text-gray-500 text-xs'>
                        Your order at {restaurant.title} is being prepared...
                    </Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.shortDescription}
                    identifier='origin'
                    pinColor='#00CCBB'
                />
            </MapView>
            <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
                <Image
                    source={{
                        uri: "https://img.freepik.com/free-photo/close-up-happy-redhead-man-face-smiling-with-white-teeth-camera-wearing-glasses-better-sig_1258-77602.jpg?w=900&t=st=1670876334~exp=1670876934~hmac=9ed55ad3d119f873c45771343e651fc2ed1f0c2003eadbb39d24cf0477f0807f"
                    }}
                    className='h-12 aspect-square bg-gray-300 p-4 rounded-full ml-5'
                />
                <View className='flex-1'>
                    <Text className='text-gray-400'>Your Rider</Text>
                    <Text className='text-lg font-bold'>John Doe</Text>
                </View>
                <Text className='text-[#00CCBB] tex-lg mr-5 font-semibold'>Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen