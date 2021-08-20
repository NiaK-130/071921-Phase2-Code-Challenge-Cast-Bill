import React from 'react';
import BillCard from "./BillCard";

export default function BillCollection({bills, handleClick, fireBill}) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map((bill) => (
          <BillCard
          key = {bill.id}
          bill = {bill}
          handleClick = {handleClick}
          fireBill = {fireBill}

          
          
          />
        ))}
      </div>
    </div>
  );
}
