import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
       // console.log(data);
        axios.post('https://peaceful-forest-98151.herokuapp.com/products',data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className=" container w-50 mt-5 p-2 mb-4 mx-auto shadow">
            <h1 className="pt-3">Add a <span style={{color:'#CC2052'}}>Product</span></h1>
 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" className="p-2 m-2 w-75"/>
                <br />
                <input {...register("description")} placeholder="Description" className="p-2 m-2 w-75"/>
                <br />
                <input  {...register("price")} placeholder="Price" className="p-2 m-2 w-75"/>
                <br />
                <input  {...register("star")}  placeholder="Rating" className="p-2 m-2 w-75"/>
                <br />
                <input {...register("img")} type="url" placeholder="Image url"  className="p-2 m-2 w-75"/>
                <br />
                <input type="submit" value="Add Product" className="btn text-white  fw-bold w-50 mb-3" style={{backgroundColor:'#CC2052'}}/>
            </form>
        </div>
    );
};

export default AddProduct;