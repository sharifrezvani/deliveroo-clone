import {
    Text,
    ScrollView
} from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 1' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 2' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
            <CategoryCard imageUrl='https://img.freepik.com/free-photo/lots-various-types-sushi-rolls-topped-with-sesame-seeds-close-up-view_141793-17519.jpg?w=1380&t=st=1670260419~exp=1670261019~hmac=2ce93596e956b5a94737d1dd9e80d1ce65a9d662a8f3884f2d8ad0ec003537ca' title='Testng 3' />
        </ScrollView>
    )
}

export default Categories;