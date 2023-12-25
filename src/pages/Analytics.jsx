import { useState, useEffect } from 'react';
import Data from '../data1.csv';
import Papa from 'papaparse';
import './Analytics.css';

function Analytics() {

  const [data, setData] = useState([]);

  // parse CSV data & store it in the component state

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (results) => {
  //       setData(results.data);
  //     },
  //   });
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, { 
        header: true, 
        skipEmptyLines: true 
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">

      {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}

      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Name</th>
              <th>Transaction detail</th>
              <th>Value Date</th>
              <th>Withdrawal amt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.AccountNo}</td>
                <td>{row.DATE}</td>
                <td>{row.TRANSACTIONDETAILS}</td>
                <td>{row.VALUEDATE }</td>
                <td>{row.WITHDRAWALAMT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <br /><br />
      ~ webstylepress ~

    </div>
  );
}

export default Analytics;