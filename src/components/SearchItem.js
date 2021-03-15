import React from 'react'
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';
const Searchitem = observer((props) => {
    const { searchProduct } = props.store;
    return (
        <div>
            {searchProduct ? <div className="container">
                {searchProduct.map((product) => {
                    return (
                        <div className="row">
                            <div className="col-3">
                                <div className="product">
                                    <div className="product_img">
                                        <Link to={`/Detail/${product.id}`}><img src={product.img} alt="image_name" /></Link>
                                    </div>
                                    <div className="product_name">
                                        {product.name}
                                    </div>
                                    <div className="row">
                                        <div className="col-7 product_price">
                                            {product.price} Rs
                                    </div>
                                        <div className="col-1 product_edit">
                                            <Link to={`/Edit/${product.id}`}><Button><EditIcon /></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}

            </div> : "not found"}
        </div>
    )
})

export default Searchitem;
