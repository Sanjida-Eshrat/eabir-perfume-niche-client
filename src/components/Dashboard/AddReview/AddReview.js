import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
       // console.log(data);
        axios.post('https://peaceful-forest-98151.herokuapp.com/reviews',data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Review Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className=" container w-50 mt-5 p-2 mb-4 mx-auto shadow">
            <h1 className="pt-3">Add a <span style={{color:'#cc2052'}}>Review</span></h1>
 
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    user?.email && <input
                    {...register("name")}
                    defaultValue={user.displayName}
                    placeholder="Name"
                    className="p-2 m-2 w-75 border border-secondary rounded"
                    />
                }
                <br />
                <input
                {...register("comment", { required: true })}
                placeholder="Comment"
                className="p-2 m-2 w-75 border border-secondary rounded"
                 />
                <br/>
                <input
                {...register("rating")}
                type="number"
                placeholder="Rate out of 5"
                className="p-2 m-2 w-75 border border-secondary rounded"
                />
                <br />
                <br />
                <input type="submit" value="Add Review" className="btn text-white fw-bold w-50 mb-5" style={{backgroundColor:'#cc2052'}}/>
            </form>
        </div>
    );
};

export default AddReview;