// Loan.js

import React from 'react';
import './Loan.css'; // Import the CSS file

const Loan = ({ loan }) => {
  const { type, loanAmount, pendingAmount, status, bankName } = loan;

  return (
    <tr className={`loan-row ${status}`}>
      <td className='r'>{type}</td>
      <td className='r'>${loanAmount}</td>
      <td className='r'>${pendingAmount}</td>
      <td className='r'>{status === 'active' ? 'Active' : 'Completed'}</td>
      <td className='r'>{bankName}</td>
    </tr>
  );
};

export default Loan;
