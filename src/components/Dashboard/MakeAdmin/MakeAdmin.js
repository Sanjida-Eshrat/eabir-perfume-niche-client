import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
//import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
   // const { register, handleSubmit, reset } = useForm();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://peaceful-forest-98151.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className=" container w-50  mt-5 p-2 mb-4 mx-auto shadow ">
            <div className="border-0  justify-content-center align-items-center">
                <h1 className="pt-3">Make an <span style={{color:'#cc2052'}}>Admin</span></h1> 
                <div className="mx-auto">
                    <Form onSubmit={handleAdminSubmit} className="m-5 text-center">
                
                        <input  onBlur={handleOnBlur} type="email" placeholder="User Email" 
                        name="email"
                        className="form-control p-2 my-4 ms-5 w-75" id="inputEmail3" required />
                        {/* <br /> */}
                        <button
                        type="submit"
                        className="btn ms-2  text-white mb-1 mt-1 "
                        style={{backgroundColor:'#cc2052'}}
                        > Make Admin</button>

                    </Form>
                    {success && <Alert variant="success">Made Admin successfully!</Alert>}  
                </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;