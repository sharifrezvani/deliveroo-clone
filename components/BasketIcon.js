import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);

    const navigation = useNavigation();

    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity className='bg-[#00CC88] mx-5 p-4 flex-row items-center space-x-1 rounded-lg'
                onPress={() => navigation.navigate('Basket')}>
                <View className='rounded-lg overflow-hidden'>
                    <Text className='text-white font-extrabold text-lg bg-[#01A269] py-1 px-2'>
                        {items.length}
                    </Text>
                </View>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>
                    View Basket
                </Text>
                <Text className='text-lg text-white font-extrabold'>
                    £ {basketTotal.toFixed(2)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon