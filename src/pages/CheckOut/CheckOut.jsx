import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { title, price, img } = service;

    const handleForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const price = e.target.price.value;

        const orderList = {
            customerName: name,
            email,
            date,
            price,
            title,
            img
        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderList)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire('Successfully Added The Service!');
            }
        })
    }

    return (
        <div>
            <div className="text-4xl text-center font-semibold">{title}</div>
            <form className="w-3/5 mx-auto bg-gray-300 p-10 space-y-5" onSubmit={handleForm}>
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <span>Name: </span>
                        <input
                            required
                            defaultValue={user?.displayName}
                            className="w-2/3 border-2 border-black" type="text" name="name" id="" />
                    </div>
                    <div className="w-1/2">
                        <span>Date: </span>
                        <input

                            required
                            className="w-2/3 border-2 border-black" type="date" name="date" id="" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <span>Email: </span>
                        <input required
                            defaultValue={user?.email}
                            className="w-2/3 border-2 border-black" type="email" name="email" id="" />
                    </div>
                    <div className="w-1/2">
                        <span>Price: </span>
                        <input required
                            defaultValue={`$ ${price}`}
                            className="w-2/3 border-2 border-black" type="text" name="price" id="" />
                    </div>
                </div>
                <div>
                    <input
                        className="btn btn-block"
                        type="submit" value="Order Now" />

                </div>
            </form>
        </div>

    )
}

export default CheckOut