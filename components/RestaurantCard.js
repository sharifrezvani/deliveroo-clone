import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import {
    MapPinIcon,
    StarIcon
} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat
}) => {
    const navigation = useNavigation();

    return (
        <View className="shadow">
            <TouchableOpacity
                className='bg-white mr-3 shadow rounded-lg overflow-hidden'
                onPress={() => {
                    navigation.navigate('Restaurant', {
                        id,
                        imageUrl,
                        title,
                        rating,
                        genre,
                        address,
                        shortDescription,
                        dishes,
                        long,
                        lat
                    })
                }}
            >
                <Image
                    source={{
                        uri: urlFor(imageUrl).url()
                    }}
                    className='h-36 w-64'
                />
                <View className='px-3 pb-4'>
                    <Text className='font-bold text-lg pt-2'>{title}</Text>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon
                            color='green'
                            opacity={0.5}
                            size={15}
                        />
                        <Text className='text-xs text-gray-500'>
                            <Text className='text-green-500'>{rating}</Text> | {genre}
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <MapPinIcon
                            color='gray'
                            opacity={0.4}
                            size={15}
                        />
                        <Text className='text-xs text-gray-500'>Nearby | {address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RestaurantCard