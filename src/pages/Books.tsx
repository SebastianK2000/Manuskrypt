import { Container } from 'react-bootstrap';
import '../style/shop.css';
import { BookData } from '../data/BookData';
import { Product } from '../components/Product';
import classNames from 'classnames';

export const Books = () => {
    return (
        <Container style={{ width: '100%', height: '100%' }}>

            <main className="content">
                <div className="contentStyle">
                    <div className="shop">
                        <div className={classNames('bookElement', 'bookComponent', 'products')}>
                            {BookData.map((product) => (
                                <Product data={product} />
                            ))}
                        </div>
                    </div>
                </div>

            </main>



        </Container>



    )
}

export default Books;