import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import
React, {
    useEffect,
    useLayoutEffect
}
    from 'react'
import {
    useNavigation,
    useRoute
} from '@react-navigation/native'
import { urlFor } from '../sanity'
import {
    ChevronRightIcon,
    MapPinIcon,
    StarIcon,
    ArrowLeftIcon
} from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch();

    const { params: {
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
    } } = useRoute()

    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <>
            <StatusBar style='light' />
            <BasketIcon />
            <ScrollView>
                <View className='relative'>
                    <Image
                        source={{
                            uri: urlFor(imageUrl).url()
                        }}
                        className='w-full h-56 bg-gray-300 p4'
                    />
                    <TouchableOpacity
                        className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <ArrowLeftIcon
                            size={20}
                            color="#00CCBB"
                        />
                    </TouchableOpacity>
                </View>
                <View
                    className='bg-white'
                >
                    <View
                        className='px-4 pt-4'
                    >
                        <Text
                            className='text-3xl font-bold'
                        >
                            {title}
                        </Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color='green' opacity={0.5} size={15} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>{rating}</Text> | {genre}
                                </Text>
                                <View className='flex-row items-center space-x-1'>
                                    <MapPinIcon color='green' opacity={0.4} size={15} />
                                    <Text className='text-xs text-gray-500'>
                                        Nearby | {address}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-2 pb-4'>
                            {shortDescription}
                        </Text>
                    </View>
                    <TouchableOpacity className='flex-row items-center space-x-2 p-3 border-y border-gray-300'>
                        <QuestionMarkCircleIcon
                            size={15}
                            opacity={0.5}
                            color='gray'
                        />
                        <Text
                            className='pl-2 flex-1 text-md font-semibold text-gray-600'
                        >
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon
                            color='#00CCBB'
                            size={15}
                        />
                    </TouchableOpacity>
                </View>
                <View className='p36'>
                    <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
                        Menu
                    </Text>
                    {/* Dish Rows */}
                    {
                        dishes.map((dish) => {
                            return (
                                <DishRow
                                    key={dish._id}
                                    id={dish._id}
                                    name={dish.name}
                                    description={dish.shortDescription}
                                    price={dish.price}
                                    image={dish.image}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen