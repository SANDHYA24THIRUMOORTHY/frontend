// LoanList.js

import React from 'react';
import Loan from './Loan';
//import ProductList from './ProductList';

const Product = () => {
  const loans = [
    {
      type: 'Personal',
      loanAmount: 5000,
      pendingAmount: 2000,
      status: 'active',
      bankName: 'Example Bank',
    },
    {
      type: 'Home',
      loanAmount: 100000,
      pendingAmount: 0,
      status: 'completed',
      bankName: 'Another Bank',
    },
    // Add more loan objects as needed
  ];

  return (
    <div>
      <h2 >Loan List</h2>
      <table className='lo'>
        <thead>
          <tr>
            <th className='r'>Type</th>
            <th className='r'>Loan Amount</th>
            <th className='r'>Pending Amount</th>
            <th className='r'>Status</th>
            <th className='r'>Bank</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <Loan key={index} loan={loan} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
