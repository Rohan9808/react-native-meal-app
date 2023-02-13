import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useNavigation } from '@react-navigation/native';
import MealsList from '../components/MealsList/MealsList';


function MealsOverviewScreen({route}) {
    const navigation = useNavigation();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId)
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [navigation, catId])

    return <MealsList items={displayedMeals} />
    
}

export default MealsOverviewScreen;

