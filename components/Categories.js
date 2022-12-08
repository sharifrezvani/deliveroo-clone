import
React,
{
    useState,
    useEffect
}
    from 'react'
import {
    Text,
    ScrollView
} from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]
        `).then((data) => {
            setCategories(data);
        })
    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
        >
            {/* CategoryCard */}
            {categories.map((category) => {
                return (
                    <CategoryCard
                        key={category._id}
                        imageUrl={urlFor(category.image).width(200).url()}
                        title={category.name}
                    />
                )
            })}
        </ScrollView>
    )
}

export default Categories;