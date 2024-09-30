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
              label: "",
              data: data,
              backgroundColor: [
                "rgb(8, 189, 74)",
                "rgba(252, 241, 23)",
                "rgb(250, 62, 52)",
              ],
              borderColor: "rgb(53, 162, 235)",
              // borderColor: "rgb(53,162,235)",
              // backgroundColor: "rgb(53,162,235,0.4)",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={400}
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
              position: "top",
              labels: {
                usePointStyle: true,
                boxWidth: 9,
                textAlign: "left",
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
