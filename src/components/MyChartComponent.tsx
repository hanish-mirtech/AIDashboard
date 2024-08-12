// src/components/MyChartComponent.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Paper, Typography } from '@mui/material';
import exampleImage from '../../public/example-image.png'; // Import the image



interface Data {
  name: string;
  value: number;
}



const MyChartComponent: React.FC = () => {
    const data = [
        { name: 'Page A', value: 4000 },
        { name: 'Page B', value: 3000 },
        { name: 'Page C', value: 2000 },
        { name: 'Page D', value: 2780 },
        { name: 'Page E', value: 1890 },
      ];
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h6">My Chart</Typography>
      <div>
      <img src={exampleImage} alt="Example" style={{ width: '100%', maxWidth: '400px' }} />
    </div>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </Paper>
  );
};

export default MyChartComponent;
