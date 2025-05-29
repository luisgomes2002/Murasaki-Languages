import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  GraphicArea,
  MoreInfo,
  PieArea,
  UserOverview,
  Wrapper,
} from "./overview-styled";
import { useEffect, useState } from "react";
import {
  getMetricsService,
  getMetricsByDateService,
} from "../../services/metrics.service";
import { Metrics, MetricsDates } from "../../util/interfaces";

const Overview = () => {
  const [dates, setDates] = useState<MetricsDates[]>([]);
  const [metrics, setMetrics] = useState<Metrics>();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const metricsDate = async () => {
    try {
      const response = await getMetricsService();
      setDates(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const metricsByDates = async (date: string) => {
    try {
      const response = await getMetricsByDateService(date);
      setMetrics(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const data = [
    { month: "-18", quantity: metrics?.userAgeDistribution.under18 },
    { month: "18-25", quantity: metrics?.userAgeDistribution["18-25"] },
    { month: "25-29", quantity: metrics?.userAgeDistribution["25-29"] },
    { month: "30-39", quantity: metrics?.userAgeDistribution["30-39"] },
    { month: "40+", quantity: metrics?.userAgeDistribution["40plus"] },
  ];

  const dataGender = [
    { name: "Man", value: metrics?.topGender.MALE },
    { name: "Woman", value: metrics?.topGender.FEMALE },
    { name: "Others", value: metrics?.topGender.OTHER },
    { name: "None", value: metrics?.topGender.NONE },
  ];

  const COLORS = ["#260452", "#229abe", "#FFF", "#86769c"];

  useEffect(() => {
    metricsDate();
    if (selectedDate) metricsByDates(selectedDate);
  }, [selectedDate]);

  return (
    <Wrapper>
      <UserOverview>
        {[
          { value: metrics?.totalUsers, label: "Total Users" },
          { value: metrics?.activeUsers, label: "Active Users" },
          { value: metrics?.bannedUsers, label: "Banned Users" },
          { value: metrics?.deletedUsers, label: "Deleted Users" },
        ].map((item, idx) => (
          <Card key={idx}>
            <i className="fa-solid fa-user"></i>
            <div>
              <p>{item.value}</p>
              <h3>{item.label}</h3>
            </div>
          </Card>
        ))}
      </UserOverview>

      <MoreInfo>
        <GraphicArea>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Users by Age</h1>

            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ color: "#fff", marginRight: "10px" }}>
                Selecione uma data:
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #0a0a0a",
                  fontSize: "16px",
                  backgroundColor: "#0a0a0a",
                  color: "#fff",
                }}
              >
                <option value="" disabled>
                  Selecione uma data
                </option>
                {dates.map((item) =>
                  item.dateTimes.map((d, idx) => (
                    <option key={`${item.id}-${idx}`} value={d}>
                      {new Date(d).toLocaleDateString("pt-BR")}
                    </option>
                  )),
                )}
              </select>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="month" tick={{ fill: "white", fontSize: 12 }} />
              <YAxis tick={{ fill: "white", fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff" }}
                labelStyle={{ color: "#6B7280" }}
                itemStyle={{ color: "#4B5563" }}
              />
              <Legend />
              <Bar dataKey="quantity" stackId="a" fill="#8B5CF6" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </GraphicArea>

        <PieArea>
          <h1>Users by Gender</h1>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataGender}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                fill="#6714D3"
                dataKey="value"
              >
                {dataGender.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  border: "none",
                }}
                itemStyle={{ color: "#4B5563" }}
              />
              <Legend wrapperStyle={{ fontSize: 15 }} />
            </PieChart>
          </ResponsiveContainer>
        </PieArea>
      </MoreInfo>
    </Wrapper>
  );
};

export default Overview;
