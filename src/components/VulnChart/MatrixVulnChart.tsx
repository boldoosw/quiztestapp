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
          datasets: [
            {
              label: "танд нэн тохиромжтой",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(53, 162, 235, 0.5)",
                "rgb(173, 179, 247)",
              ],
              borderColor: "rgb(53, 162, 235)",
              // borderColor: "rgb(53,162,235)",
              // backgroundColor: "rgb(53,162,235,0.4)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,

          elements: {
            bar: {
              borderWidth: 1,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "right",

              labels: {
                usePointStyle: true,
                boxWidth: 9,
              },
            },
            title: {
              display: true,
              text: "Мэргэжил сонголтын матриц үр дүнг графикаар үзүүлэв",
            },
          },
        }}
      />
    </div>
  );
};
export default VulnChart;
