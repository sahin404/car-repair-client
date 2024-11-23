import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../authProvider/AuthProvider"

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/bookings?email=${user?.email}`;
            fetch(url, {credentials:'include'})
                .then(res => res.json())
                .then(data => setBookings(data));
           console.log(bookings);
        }

    }, [user])
    return (
        <div>

            {
                bookings.length
            }
        </div>
    )
}

export default MyBookings