import React, { useMemo, useState } from "react";

const ServiceHistory = () => {
  const [serviceData, setServiceData] = useState([])

  const getData = () => {
    try {
      fetch("http://127.0.0.1:8000/", {
        headers: {
          "Access-Control-Allow-Headers": "*"
        }
      })
        .then(res => res.json())
        .then(data => setServiceData(data))
        .catch(error => console.log(error))
    } catch (error) {
      console.log("An error has occured fetching data")
    }
  }

  useMemo(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <div style={{ paddingTop: "4rem" }}>
        {serviceData.map((item, index) => {
          return (<div className="text-white" key={`item-${index}`}>
            <span>Date: {item.date}</span>
          </div>)
        })}
      </div>
    </React.Fragment>
  )
}

export default ServiceHistory;