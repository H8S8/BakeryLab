import Cake from "../components/Cake"

const BakeryContainer = () => {

    const cakes = [
        // Victora Sponge
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                      "self-raising flour",
                  "baking powder",
                  "milk"
            ],
            price: 5,
            rating: 5
        },
    
        // Tea Loaf
        {
            cakeName: "Tea Loaf",
            ingredients: [
                   "eggs",
                  "oil",
                  "dried fruit",
                      "sugar",
                  "self-raising flour",
                  "strong tea",
            ],
            price: 2,
            rating: 3
        },
    
        // Carrot Cake
        {
            cakeName: "Carrot Cake",
            ingredients: [
                    "carrots",
                      "walnuts",
                  "oil",
                      "cream cheese",
                      "flour",
                  "sugar",
            ],
            price: 8,
            rating: 5
        }
    ]

    const calculateAverageRating = () => {
        return (cakes.reduce((ratingsSum, cake) => {return ratingsSum + cake.rating}, 0)/cakes.length).toFixed(2);
    }

    return(
        <>
            <h2>Cakes</h2>
            {cakes.map(cakeToDisplay => 
                <Cake cake={cakeToDisplay}/>)}
            <p>Average Rating: {calculateAverageRating()}</p>
        </>
    )
}

export default BakeryContainer;