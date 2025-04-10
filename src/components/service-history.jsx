import React, { useEffect, useMemo, useState } from "react";
import ErrorModal from "./error-modal";
import serviceData from "./services-temp-db.json"

const ServiceHistory = ({ debouncedSearch }) => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useMemo(() => {
    if (debouncedSearch === "") {
      setFilteredData(originalData);
    } else {
      const updatedData = originalData.filter((item) => item.shop.toLowerCase().includes(debouncedSearch.toLowerCase()));
      setFilteredData(updatedData);
    }
  }, [debouncedSearch, originalData])

  useEffect(() => {
    const getData = async () => {
      // const dataResponse = await fetch("http://192.168.126.105:5000/", { method: "GET", headers: { "Access-Control-Allow-Headers": "*" } });
      // if (dataResponse.status === 200) {
        // const responseJson = await dataResponse.json();
        setOriginalData(serviceData);
        setFilteredData(serviceData);
      // } else if (dataResponse.status === 404) {
        // setErrorMessage("There's been an error fetching data for this vehicle");
      // } else {
        // setFilteredData([]);
      // }
    }

    getData();
  }, [])

  return (
    <React.Fragment>
      <div style={{ paddingTop: "4rem" }} className="overfdlow-hidden d-flex justify-content-center w-100">
        <div className="px-3">
          {filteredData && filteredData.length > 0 ?
            filteredData.map((item, index) => {
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
          {errorMessage && <ErrorModal errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ServiceHistory;