import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [accountData, setAccountData] = useState(null);

    useEffect(() => {
        // Assuming you have a function to fetch account details
        // Replace 'fetchAccountData' with the actual function to fetch account details
        const fetchAccountData = async () => {
            try {
                // Fetch account details from your backend or API
                const response = await fetch('/api/account'); // Replace with your API endpoint
                const data = await response.json();

                // Update the state with account data
                setAccountData(data);
            } catch (error) {
                console.error('Error fetching account data:', error);
            }
        };

        // Call the fetchAccountData function when the component mounts
        fetchAccountData();
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Banking System Dashboard</h1>
            {accountData ? (
                <div style={styles.accountInfo}>
                    <h2>Account Information</h2>
                    <p>Account Number: {accountData.accountNumber}</p>
                    <p>Balance: ${accountData.balance.toFixed(2)}</p>
                    <p>Account Type: {accountData.accountType}</p>
                    {/* Add more account details as needed */}
                </div>
            ) : (
                <p style={styles.loading}>Loading account data...</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
    },
    accountInfo: {
        marginTop: '20px',
    },
    loading: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#777',
    },
};

export default Dashboard;