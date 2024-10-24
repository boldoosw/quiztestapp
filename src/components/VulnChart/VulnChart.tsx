"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  labels: string[];
  data: number[];
};

const VulnChart: React.FC<Props> = ({ labels, data }) => {
  return (
    <div>
      <Bar
        data={{
          labels: labels,
          //   labels: ["Хүн", "Байгаль", "Амьтан", "Техник", "Тэмдэгт"],
          datasets: [
            {
              label: "Хамгийн өндөр үзүүлэлттэй ",
              data: data,
              //   data: [15, 12, 6, 7, 40],
              backgroundColor: [
                "#50d71e",
                "#2596be",
                "#EC407A",
                "#FFEB3B",
                "#F11D0D",
              ],
              borderColor: "gray",
              // borderColor: "rgb(53,162,235)",
              // backgroundColor: "rgb(53,162,235,0.4)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          // indexAxis: "y",
          maintainAspectRatio: false,
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "right",
            },
            title: {
              display: false,
              text: "Chart.js Horizontal Bar Chart",
            },
          },
        }}
      />
    </div>
  );
};
export default VulnChart;
