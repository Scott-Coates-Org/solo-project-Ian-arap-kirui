import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/client";
import moment from "moment/moment";
import { useState } from "react";

const Chart = ({ aspect, title }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchChartData = async () => {
      const teaDocs = onSnapshot(collection(db, "tea"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        //calculate total per month

        const monthData = list.map((x) => ({
          ...x,
          total: Number(x.amount),
        }));

        const mapDayToMonth = monthData.map((x) => ({
          ...x,
          month: moment.months(new Date(x.datePicked).getMonth()),
        }));

        const sumPerMonth = mapDayToMonth.reduce((acc, cur) => {
          acc[cur.month] = acc[cur.month] + cur.total || cur.total;

          return acc;
        }, {});
        const result = Object.keys(sumPerMonth).map((e) => ({
          month: e,
          total: sumPerMonth[e],
        }));

        setData(result);
        console.log(result);
        return () => {
          teaDocs();
        };
      });
    };
    fetchChartData();
  }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c8ee44" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#c8ee44" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#c8ee44"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
