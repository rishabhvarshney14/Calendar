import dayjs from 'dayjs';
import React, {useState, useEffect} from 'react' 
import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {getMonths} from './utilities'

function App() {
  const [months, setMonths] = useState([])
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = () => {
      const body = {
        "requestobjects": [
          {
            "posts": {
              "operationtype": "read",        
              "id": {
                "return": true
              },
              "userid": {
                  "searchvalues": ["adbef521-7cf6-4344-af48-a9480df46549"],
                  "return": true
              },
              "iscalendarentry": {
                  "searchvalues" : ["true"],
                "return": true
              },        
              "media": {
                "return": true
              },
              "rating": {
                "return": true
              },
              "text": {
                "return": true
              },
              "privacy": {
                "searchvalues": [
                  18
                ],
                "return": true
              },
              "typeofday": {
                "return": true
              },
              "calendardatetime": { 
                "return": true  ,
                "sort" : "descending" 
              },
              "maxitemcount": "20",   
              "continuationtoken": null
            }
          }
        ]
      }

      const requestObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };

      fetch('https://api.quinn.care/graph', requestObj)
      .then(res => res.json())
      .then(res => {
        let tempData = {}
        res.responseobjects[0].posts.map(item => {
          const newDate = dayjs(item.calendardatetime);
          tempData[`${newDate.format('D')}-${newDate.format('M')}-${newDate.format('YY')}`] = item;
        })
        setData(tempData)
      }).catch(error => {
        console.log(error)
      })
    }

    fetchData()
  }, [])

  useEffect(() => {
    const computeMonths = () => {
      setMonths(getMonths(2015, 2025, data));
    } 
    
    computeMonths()
  }, [data])

  return (
    <div className="App">
      <Header />
      <Calendar months={months} data={data} />
    </div>
  );
}

export default App;
