import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://karriarum-ctf-backend:4000/api/v1/list`);
      const data = await response.json();
      setLeaderboardData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch when component mounts

    // Set up an interval to fetch data every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); // 10 seconds in milliseconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

    return (
      <div className="container">
        <div className="circle-div">
          <p className="circle-text">Den hållbara kommunen för hela livet</p>
        </div>
        <div className="table-container">
          <h1 className="leaderboard-heading">Habo kommun CTF Leaderboard</h1>
          <div className='rounded-table-container'>
            <table className="bordered-table rounded-table bg-colored-table">
              <thead>
                <tr>
                  <th className="tight-header">Rank</th>
                  <th className="tight-header">Name</th>
                  <th className="tight-header center">Flags</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData
                  .sort((a, b) => b.Flags - a.Flags)
                  .slice(0, 20)
                  .map((player, index) => (
                  <tr key={player.ID} className="table-row table-row-spacing">
                    <td className="tight-cell">{index + 1}</td>
                    <td className="tight-cell">{player.Name}</td>
                    <td className="tight-cell">{player.Flags}</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="logo-container">
        <img src="/Logo_Liggande_Habo_Kommun.png" alt="Logo" className="logo" />
        </div>
        <div className="horizontal-div">
          <p className="horizontal-text">habokommun.se/karriarum</p>
      </div>
      </div>
    );
  };
  
  export default Leaderboard;
  
  