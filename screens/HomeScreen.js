import { useNavigation } from "@react-navigation/native"
import {
    useEffect,
    useLayoutEffect,
    useState
} from "react";
import {
    Text,
    SafeAreaView,
    View,
    Image,
    TextInput,
    ScrollView
} from "react-native"

import {
    AdjustmentsHorizontalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from 'react-native-heroicons/outline'
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerShown: false
            }
        )
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
        }`).then((data) => {
            setFeaturedCategories(data);
        })
    }, [])

    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <View>
                    <Image
                        source={{ uri: 'https://links.papareact.com/wru' }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                </View>
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-lg'>
                        Current Location
                        <ChevronDownIcon
                            size={18}
                            color='#00CC88'
                        />
                    </Text>
                </View>
                <UserIcon size={30} color='#00CC88' />
            </View>
            {/* SearchBox */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row space-x-2 flex-1 flex-1 bg-gray-200 p-3 rounded-md'>
                    <MagnifyingGlassIcon color='gray' size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <AdjustmentsHorizontalIcon color='#00CC88' />
            </View>
            {/* Body */}
            <ScrollView
                className='bg-gray-100'
                contentContainerStyle
            >
                {/* Categories */}
                <Categories />
                {/* Featured */}
                {featuredCategories?.map((category) => {
                    return (
                        <FeaturedRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.shortDescription}
                        />
                    )
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen