import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  // scales: {
  //   x: {
  //     ticks: {
  //       display: true,
  //     },
  //     grid: {
  //       display: false,
  //       drawBorder: false,
  //       drawOnChartArea: false,
  //       drawTicks: true,
  //     },
  //   },
  //   y: {
  //     ticks: {
  //       display: false,
  //     },
  //     grid: {
  //       display: false,
  //       drawBorder: false,
  //       drawOnChartArea: false,
  //       drawTicks: false,
  //     },
  //   },
  // },
  tooltips: {
    enabled: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const CoinChart = () => {
  return (
    <div className="bg-amp-card border-2 border-amp-border p-5 rounded-lg m-3">
      <Line
        // options={options}
        data={{
          labels: [10, 20, 34, 4, 55, 67, 7, 88, 9, 91, 20, 91, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              label: "test",
              data: [10, 20, 34, 4, 55, 67, 7, 88, 9, 91, 20, 91, 4, 5, 6, 7, 8, 9],
              pointRadius: 0,
              pointHitRadius: 2,
              borderWidth: 2,
              borderColor: "#ffc300", //coin.peso_price_change_percentage_24h > 0 ? "#22c55e" : "#ef4444",
              // borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
};

export default CoinChart;
