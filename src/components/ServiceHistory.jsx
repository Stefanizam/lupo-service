import React, { useEffect, useState } from "react";

const ServiceHistory = () => {
  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await fetch("http://127.0.0.1:8000/", { method: "GET", headers: { "Access-Control-Allow-Headers": "*" } });
      const responseJson = await dataResponse.json();

      setServiceData(responseJson)
    }
    getData();
  }, [])

  return (
    <React.Fragment>
      <div style={{ paddingTop: "4rem" }} className="overflow-hidden d-flex justify-content-center w-100">
        <div className="w-50">
          {serviceData && serviceData.map((item, index) => {
            return (<div className="card border-success bg-dark text-white mb-4 service-card" key={`item-${index}`}>
              <div className="card-body">
                {item.shop}
              </div>
            </div>)
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ServiceHistory;