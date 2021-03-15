import React, { useEffect } from 'react'
import { observer } from "mobx-react";
import { useHistory, useParams } from 'react-router';
import Store from '../Store';
const Detail = observer((props) => {
    const { Details, count, addToCart } = props.store
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        Store.showDetails(id)
    }, [id])
    const back = () => {
        history.push('/')
    }
    const handeleSubmit = () => {
        addToCart(Details, count)
    }
    return (
        <div className="container mt-100">
            <div className="row" key={Details.id}>
                <div className="col-6">
                    <div className="detail_image">
                        <img src={Details.img} alt="Image_name" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="detail_name">
                        {Details.name}
                    </div>
                    <div className="detail_price">
                        {Details.price} Rs
                    </div>
                    <div className="detail_info">
                        <button className="btn-default" onClick={handeleSubmit} >Add To Cart</button>
                    </div>
                    <div className="detail_p">
                        <h4>Details: </h4>
                        {Details.desc}
                    </div>
                    <div>
                        <button onClick={back} className="btn btn-danger btn2" >Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Detail;
