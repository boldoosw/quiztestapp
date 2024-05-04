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
              label: "Холландын тестийн үр дүнг графикаар үзүүлэв.",
              data: data,
              //   data: [15, 12, 6, 7, 40],
              backgroundColor: [
                "#B71C1C",
                "#F5E83B",
                "#F06292",
                "#78787D",
                "#388E3C",
                "#462CF2",
              ],
              borderColor: "gray",
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
export default VulnChart;
