import React, { useEffect, useState } from "react";

const ServiceHistory = () => {
  const [serviceData, setServiceData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await fetch("http://127.0.0.1:8000/", { method: "GET", headers: { "Access-Control-Allow-Headers": "*" } });
      if (dataResponse.status === 200) {
        const responseJson = await dataResponse.json();
        setServiceData(responseJson)
      } else if (dataResponse.status === 404) {
        setErrorMessage("No data registered for this vehicle")
      } else {
        setServiceData([])
      }
    }

    getData();
  }, [])

  return (
    <React.Fragment>
      <div style={{ paddingTop: "4rem" }} className="overfdlow-hidden d-flex justify-content-center w-100">
        <div className="w-50">
          {serviceData && serviceData.length > 0 ?
            serviceData.map((item, index) => {
              return (<div className="card border-success text-white mb-4 service-card bg-tertiary" key={`item-${index}`}>
                <div className="card-body p-0">
                  <h3 className="card-title mb-1 px-4 pt-4"><strong>{item.shop}</strong></h3>
                  <div className="d-flex flex-wrap">
                    <span className="card-text px-4 text-success text-nowrap">{item.date}</span>
                    <span className="card-text px-4 text-success text-nowrap">{item.odometer} km</span>
                  </div>
                  <ul className="list-group list-group-flush pt-4 overflow-hidden">
                    {item.services.map((service, index) => {
                      return <div className="service-item" key={`service-${index}`}>{service}</div>
                    })}
                  </ul>
                </div>
              </div>
              )
            })
            :
            <h5 className="text-center w-100">
              <strong>No service data registered for this vehicle</strong>
            </h5>
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default ServiceHistory;