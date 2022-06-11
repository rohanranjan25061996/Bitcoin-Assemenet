import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Duration from "./Duration"

export default function Chart(props : any) {

    const {data : myData, onClickDuration} = props

    return (
        <>
        <div style={{ width: '100%', height: 300, marginTop: '5%' }}>
          <ResponsiveContainer>
            <AreaChart
              data={myData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis dataKey={"amt"} />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Duration onClickDuration = {onClickDuration} />
        </>
      );
}
