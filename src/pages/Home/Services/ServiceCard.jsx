const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-110 duration-200 ">
            <figure>
                <img
                    src={img}
                     />
            </figure>
            <div className="p-5">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between text-[#FF3811] font-bold">
                    <p> Price: $ {price}</p>
                    <p className="justify-end">></p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard