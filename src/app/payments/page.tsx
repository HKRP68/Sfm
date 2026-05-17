"use client";
import { useState } from "react";
export default function Payments(){
 const [studentId,setStudentId]=useState(''); const [amount,setAmount]=useState(''); const [months,setMonths]=useState('April');
 async function submit(){
  const res=await fetch('/api/payments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({student_id:studentId,amount:Number(amount),months:months.split(',').map(s=>s.trim())})});
  const j=await res.json(); alert(`Receipt: ${j.receipt_no}`);
 }
 return <div className='space-y-3'><h2 className='text-xl font-bold'>Payment Entry</h2><div className='card grid gap-2 md:grid-cols-2'>
 <input className='input' placeholder='Student UUID' value={studentId} onChange={e=>setStudentId(e.target.value)}/>
 <input className='input' placeholder='Amount' value={amount} onChange={e=>setAmount(e.target.value)}/>
 <input className='input md:col-span-2' placeholder='Months comma separated' value={months} onChange={e=>setMonths(e.target.value)}/>
 <button className='btn md:col-span-2 sticky bottom-2' onClick={submit}>Save Payment & Generate Receipt</button>
 </div></div>
}
