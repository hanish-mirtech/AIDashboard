import React, {  useEffect } from 'react';
import Dashboard from './dashboard/Dashboard';
import NotAuthorised from './NotAuthorised';

interface AiDashboardProps {
  userDetails: string;
}

const AiDashboard: React.FC<AiDashboardProps> = ({ userDetails }) => {

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log(response)
      } catch (error) {
      console.log(error)
      } 
    };

    // Call the async function
    fetchData();
  }, []); 

  return (
    <div>
      {userDetails==='admin123' ? <Dashboard /> : <NotAuthorised /> }
      
    </div>
  );
};

export default AiDashboard;
