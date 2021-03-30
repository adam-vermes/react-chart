import { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import { getData } from '../../API/Api';
import './Timeline.css';

  enum Category {
    CLASSA = 1,
    CLASSB,
    CLASSC,
    CLASSD,
    CLASSE,
    CLASSF
  }

  const categoryKey: any = {
    "Class A": Category.CLASSA,
    "Class B": Category.CLASSB,
    "Class C": Category.CLASSC,
    "Class D": Category.CLASSD,
    "Class E": Category.CLASSE,
    "Class F": Category.CLASSF,
    "ECG": '',
    "MMT": '',
    "Echo": '',
    "ASH": '',
    "CT": '',
    "XRay": '',
    "M": '',
    "L": '',
    "H": ''
  }

const Timeline = () => {
  const [rawData, setRawData] = useState<any>([]);
  const [chartData, setChartData] = useState<any>(
    {
      options: {
        chart: {
          toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: false,
              customIcons: []
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (idx: any) => {
              const obj = Object.fromEntries(Object.entries(categoryKey));
              return `${Object.keys(obj).find(key => obj[key] === idx)}`
            }
          },
        },
        xaxis: {
          type: "datetime",
          
        },
        grid: {
          row: {
            colors: ['rgb(43, 45, 46)', 'rgb(29, 31, 32)']
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
    },
      series: [
        {
          name: "Date",
          data: []
        }
      ],
    }
  );

  useEffect(() => {
    getData().then((datas: any) => {
      datas.sort(((a: any, b: any) => {
        return Date.parse(a.date) - Date.parse(b.date);
      }));
      setRawData([...datas, {"id":"96f","date":"9/15/2021","category":"Class A","event":"Echo","level":"L"}])
    });
  }, []);

  useEffect(() => {
    setChartData((prev: any) => ({
      ...prev,
      series: prev.series.map((serie: any) => {
        return {
          ...serie,
          data: rawData.map((item: any) => {
            return {x: item.date, y: categoryKey[item.category]}})
        }
      })
    }));
  }, [rawData]);

  function filterData(e: any) {
    let selectedCategoryList = Array.from(e.target.selectedOptions, (option: any) => option.value); 

    let filteredData = rawData.filter((item: any) => {
      return selectedCategoryList.includes(item.category) || selectedCategoryList.includes(item.level) || selectedCategoryList.includes(item.event);
    })

    setChartData((prev: any) => ({
    ...prev,
    series: prev.series.map((serie: any) => {
      return {
        ...serie,
        data: filteredData.map((item: any) => {
          return {x: item.date, y: categoryKey[item.category]}})
      }
    })
    }));
  }

  function clearFilter() {
    setChartData((prev: any) => ({
      ...prev,
      series: prev.series.map((serie: any) => {
        return {
          ...serie,
          data: rawData.map((item: any) => {
            return {x: item.date, y: categoryKey[item.category]}})
        }
      })
    }));
  }

  return (
    <div className="container">
      <div>
        <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          width="1000"/>
      </div>

      <div className="container-item">

      <label>Select Filter:</label>
      <select onChange={(e) => filterData(e)} multiple>
        {
          Object.keys(categoryKey).map((option: any, idx: number) => {
            return <option key={idx} value={option.value}>{option}</option>
          })
        }
      </select>

      <button onClick={clearFilter}>Clear Filter</button>
      </div>
    </div>
    </div>
  )
}

export default Timeline
