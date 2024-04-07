import CustomVulnChart from "@/components/VulnChart/CustomVulnChart";
import React from "react";

const physic_math = "Физик  ба математик";
var physic_math_count = 4;
const chemic_biology = "Хими ба Биолог";
var chemic_biology_count = 3;
const radio_electronic = "Радиотехник ба электроник";
var radio_electronic_count = 5;
const mechanic_const = "Механик ба конструкц";
var mechanic_const_count = 3;
const geography_geology = "Газар зүй ба геолог";
var geography_geology_count = 4;
const literature_culture = "Уран зохион ба урлаг";
var literature_culture_count = 0;
const history_politic = "Түүх ба улс төр";
var history_politic_count = 4;
const educaton_health = "Боловсрол ба Эрүүл мэнд";
var educaton_health_count = 3;
const labour_handcraft = "Хөдөлмөр ба гар урлал";
var labour_handcraft_count = 4;
const sport_military = "Спорт ба цэрэгжилт";
var sport_military_count = 3;

let chartData: number[] = [];

function ChartCustomTest() {
  chartData.push(physic_math_count);
  chartData.push(chemic_biology_count);
  chartData.push(radio_electronic_count);
  chartData.push(mechanic_const_count);
  chartData.push(geography_geology_count);
  chartData.push(literature_culture_count);
  chartData.push(history_politic_count);
  chartData.push(educaton_health_count);
  chartData.push(labour_handcraft_count);
  chartData.push(sport_military_count);

  return (
    <div className="text-black text-center mt-8">
      <CustomVulnChart
        labels={[
          physic_math,
          chemic_biology,
          radio_electronic,
          mechanic_const,
          geography_geology,
          literature_culture,
          history_politic,
          educaton_health,
          labour_handcraft,
          sport_military,
        ]}
        data={chartData}
      />
    </div>
  );
}

export default ChartCustomTest;
