import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { CartContext } from "../../providers/cart";
import LogoImg from "../../assets/Captura de tela de 2021-11-25 13-31-28.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Container } from "./style";
import { useHistory } from "react-router";

const Home = () => {
    const { products } = useContext(ProductsContext);
    const { addToCart } = useContext(CartContext);

    const history = useHistory();

    function addCart(item) {
        addToCart(item)
    }

    return (
        <Container>
            <header>
                <img src={LogoImg} alt="Logo" />
                <AiOutlineShoppingCart size={50} onClick={() => history.push("/cart")} />
            </header>
            <main>
                <ul>
                    {products.map((item, index) =>
                        <li key={index}>
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                            <p>R$: {item.price}</p>
                            <button onClick={() => addCart(item)}>Adicionar ao carrinho</button>
                        </li>)
                    }
                </ul>
            </main>
        </Container>
    )
}
export default Home;