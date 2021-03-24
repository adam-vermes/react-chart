import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { getData } from '../../API/Api';

const Timeline = () => {
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
      getData().then(datas => {
        setRawData(datas);
      });
    }, [rawData]);

    function clickHandler() {
      rawData.map(item => {
        setChartData(prevChartData => 
          [...prevChartData, prevChartData.series.map(
            serie => {
              console.log(serie);
            return serie.data.map(s => {
              s.x = item.date
              console.log(s);
            })
        })])
    })
  }

    const [chartData, setChartData] = useState(
    {
      options: {
        chart: {
          id: "line"
        },
      },

      series: [{
        data: [{ x: '1800/12/21', y: '54' }, { x: '1800/12/22', y: '17' } , { x: '1800/12/23', y: '26' }]
      }],
        xaxis: {
        type: 'category'
      }
    }
  );

    return (
      <div>
        <div>
        </div>
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>

      <button onClick={clickHandler}>Items</button>

      {/* {rawData.map((item)=>{ return <div key={item.id}> { item.date + ' - ' +  item.category } </div>})} */}
      </div>
    )
}

export default Timeline
