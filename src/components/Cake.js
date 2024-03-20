import "./Cake.css"

const Cake = ({cake, salesValue, onButtonClick}) => {
    
    const incrementSalesValue = () => {
        onButtonClick(salesValue + cake.price);
    }
    
    return (
        <div className={"cakeBox"}>
            <h3>{cake.cakeName}</h3>
            <ul>{cake.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
            <p>Price: £{cake.price}</p>
            <p>Rating: {cake.rating}</p>
            <button onClick={incrementSalesValue}>Sell</button>
        </div>
    );
}
 
export default Cake;