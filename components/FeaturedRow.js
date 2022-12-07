import {
    View,
    Text,
    ScrollView
} from 'react-native'
import
React,
{ useEffect, useState }
    from 'react'
import sanityClient from '../sanity'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
        `, { id: id }).then((data) => {
            setRestaurants(data?.restaurants)
        })
    }, [id])
    // could just say {id} too
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon
                    color='#00CC88'
                />
            </View>
            <Text className='text-sx text-gray-500 px-4'>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className='py-4 '
            >

                {/* RestaurantCards */}
                {restaurants?.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imageUrl={restaurant.image}
                            address={restaurant.address}
                            title={restaurant.name}
                            dishes={restaurant.dishes}
                            rating={restaurant.rating}
                            shortDescription={restaurant.shortDescription}
                            genre={restaurant.type?.name}
                            long={restaurant.long}
                            lat={restaurant.lat}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow