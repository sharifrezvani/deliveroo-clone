import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
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
                className='pt-4'
            >

                {/* RestaurantCards */}

                <RestaurantCard
                    id='123'
                    imageUrl='https://img.freepik.com/free-photo/restaurant-setting-with-wooden-chairs-tables-beautiful-view_181624-9887.jpg?w=1380&t=st=1670261786~exp=1670262386~hmac=e4ed9939014bf9abe237c589129ae711ab667fb3a9d1bcdece1cdb472921a4ec'
                    title='Marys'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main St.'
                    shortDescription='A very short text restaurant description'
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow