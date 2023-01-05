 
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS=[
 {
    id:'m1',
    name:'himesh',
    description:'finest fish and vaggies',
    price:22.99
 },
 {
    id:'m2',
    name:'Anchal',
    description:'A german speciality!',
    price:16.5
 },
 {
    id:'m3',
    name:'kajal',
    description:'American raw meaty',
    price:12.99
 },
 {
    id:'m4',
    name:'ritesh',
    description:'finest fish and vaggies',
    price:22.99
 }
]


const AvailableMeals=()=>{
   const mealList=DUMMY_MEALS.map(meal=>(
       <MealItem
        key={meal.id}
       name={meal.name} 
       description={meal.description}
       price={meal.price}
       />
       ));
    return <section className={classes.meals}>
        
        <Card>
        <ul>{mealList}</ul>
        </Card>
    </section>

}
export default AvailableMeals;