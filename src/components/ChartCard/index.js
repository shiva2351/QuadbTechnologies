import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const data = 
[
    { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
    { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
    { "timestamp": "2023-01-03T00:00:00Z", "value": 5 }
  
  ]

const ChartCard = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="value"
        >
          {data.map(each=>(<Cell name={each.value} fill={"random"} />))}
         
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ChartCard