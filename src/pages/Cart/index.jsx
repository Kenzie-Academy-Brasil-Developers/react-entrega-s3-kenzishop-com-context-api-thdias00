import LogoImg from "../../assets/Captura de tela de 2021-11-25 13-31-28.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Container } from "./style";

const Cart = () => {
    const history = useHistory();
    const { cart, removeFromCart } = useContext(CartContext);

    function removeItem(item) {
        removeFromCart(item);
    }
    const total = cart.reduce((a, item) => {
        return a + parseFloat(item.price)
    }, 0)
    return (
        <Container>
            <header>
                <img src={LogoImg} alt="Logo" onClick={() => history.push("/")} />
                <IoArrowBackCircleOutline size={50} onClick={() => history.push("/")} />
            </header>
            <main>
                <div>
                    <h1>Carrinho de compras</h1>
                    <ul>
                        {cart.length > 0 ? cart.map((item, index) =>
                            <li key={index}>
                                <div>
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                    <p>R$: {item.price}</p>
                                </div>
                                <RiDeleteBin5Line size={40} onClick={() => removeItem(item)} />
                            </li>
                        ) :
                            <div>
                                <h2>Seu Carrinho está vazio</h2>
                                <button onClick={() => history.push("/")}>Ir às compras</button>
                            </div>
                        }
                    </ul>
                </div>
                <section>
                    <h2>Total: R$ {total}</h2>
                </section>
            </main>
        </Container>
    )
}
export default Cart;