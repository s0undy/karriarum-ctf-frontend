import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/list');
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className="container">
        <div className="circle-div">
          <p className="circle-text">Den hållbara kommunen för hela livet</p>
        </div>
        <div className="table-container">
          <h2 className="leaderboard-heading bordered-heading">Habo kommun CTF Leaderboard</h2>
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
                  <tr key={player.ID}>
                    <td className="tight-cell">{index + 1}</td>
                    <td className="tight-cell">{player.Name}</td>
                    <td className="tight-cell center">{player.Flags}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="logo-container">
        <img src="/Logo_Liggande_Habo_Kommun.png" alt="Logo" className="logo" />
        </div>
      </div>
    );
  };
  
  export default Leaderboard;
  
  