import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Sevices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(data => data.json())
            .then(result => setServices(result))
    }, [])

    return (
        <div>
            <div className="text-center w-3/5 mx-auto space-y-3">
                <h1 className="text-xl text-[#FF3811] font-bold">Service</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] text-md">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
        </div>
    )
}

export default Sevices