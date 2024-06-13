import "./services.css"
import ServicesData from './../../Data/ServicesData';

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="services-texts">
                <div className="services-title">
                    <h2>My <br /> Services</h2>
                </div>

                <div className="services-container">
                    {ServicesData.map((service,index)=>{
                        return <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_Desc}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <i class="bi bi-caret-right-fill readMoreImg"></i>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services;

