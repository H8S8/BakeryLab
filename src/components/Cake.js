const Cake = ({cake}) => {
    return (
        <>
            <h3>{cake.cakeName}</h3>
            <ul>{cake.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
        </>
    );
}
 
export default Cake;