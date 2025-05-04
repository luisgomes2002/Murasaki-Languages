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
import "./overview.scss";

const data = [
  { month: "-18 ", quantity: 1500 },
  { month: "18-25", quantity: 3000 },
  { month: "25-29", quantity: 3000 },
  { month: "30-39", quantity: 4000 },
  { month: "40+", quantity: 2500 },
];

const dataGender = [
  { name: "Man", value: 400 },
  { name: "Woman", value: 300 },
  { name: "Others", value: 100 },
];

const COLORS = ["#6714D3", "#10B981", "#FFF"]; // roxo, verde, amarelo

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-user">
        <div className="overview-card">
          <i className="fa-solid fa-user"></i>
          <div>
            <p>1600</p>
            <h3>Total Users</h3>
          </div>
        </div>

        <div className="overview-card">
          <i className="fa-solid fa-user"></i>
          <div>
            <p>1535</p>
            <h3>Active Users</h3>
          </div>
        </div>

        <div className="overview-card">
          <i className="fa-solid fa-user"></i>
          <div>
            <p>7</p>
            <h3>Banned Users</h3>
          </div>
        </div>

        <div className="overview-card">
          <i className="fa-solid fa-user"></i>
          <div>
            <p>20</p>
            <h3>Deleted Users</h3>
          </div>
        </div>
      </div>

      <div className="overview-more-info">
        <div className="graphic-area">
          <h1>Users by Age</h1>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis dataKey="month" tick={{ fill: "white", fontSize: 12 }} />
              <YAxis tick={{ fill: "white", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                }}
                labelStyle={{ color: "#6B7280" }}
                itemStyle={{ color: "#4B5563" }}
              />

              <Legend />
              <Bar dataKey="quantity" stackId="a" fill="#8B5CF6" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="overview-pie">
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
        </div>
      </div>
      {/* <div>
        <h2>Lessons</h2>
        <h3>Top languages</h3>
        <h3>Total Lesson</h3>
      </div>
      <div>
        <h2>Posts</h2>
        <h3>Total Posts</h3>
        <h3>Posts Last 30 Days</h3>
      </div> */}
    </div>
  );
};

export default Overview;
