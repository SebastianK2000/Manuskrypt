import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../style/shop.css';
import { AudiobookData } from '../data/AudiobookData';
import { Product } from '../components/Product';
import classNames from 'classnames';


export const AudioBook = () => {


    return (
        <Container>

            <main className="content">
                <div className="contentStyle">
                    <div className="shop">
                        <div className={classNames('bookElement', 'bookComponent', 'products')}>
                            {AudiobookData.map((product) => (
                                <Product data={product} />
                            ))}
                        </div>
                        </div>
                </div>

            </main>

        </Container>
    )
}

export default AudioBook;