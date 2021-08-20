import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const billsAPI = "http://localhost:8002/bills";

export default function App() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(billsAPI)
    .then((res) => res.json())
    .then((json) => setBills(json));
  }, []);

function enlistBill(id){
  setBills(bills.map(bill => bill.id === id? {...bill, enlisted:true} : bill));
}

function releaseBill(id){
  setBills(bills.map(bill => bill.id === id? {...bill, enlisted:false} : bill));
}

function fireBill(id){
  setBills(bills.filter((bill) => bill.id !==id ));
}

  return (
    <div>
      <BillsCast bills = {bills.filter(bill => bill.enlisted)} handleClick = {releaseBill} fireBill = {fireBill}/>
      <BillCollection bills = {bills} handleClick = {enlistBill} fireBill = {fireBill} />
    </div>
  );
}
