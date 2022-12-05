import { Image, Text, TouchableOpacity } from 'react-native'

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image
                source={{ uri: imageUrl }}
                className='h-20 w-20 rounded'
            />
            <Text className='absoulte bottom-5 left-1 text-white font-bold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard