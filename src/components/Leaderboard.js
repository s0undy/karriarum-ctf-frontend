import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with your actual fetch logic)
    // You can replace this with the actual fetch logic to get your JSON data
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
    <div>
      <h2 className='table-container'>Leaderboard</h2>
      <div className="table-container"> {/* Wrap the table in a div */}
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="center">Flags</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData
              .sort((a, b) => b.Flags - a.Flags)
              .slice(0, 10)
              .map((player, index) => (
                <tr key={player.ID}>
                  <td>{index + 1}</td>
                  <td>{player.Name}</td>
                  <td>{player.Flags}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
