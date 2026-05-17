"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Students(){
 const [rows,setRows]=useState<any[]>([]); const [form,setForm]=useState<any>({student_name:'',father_name:'',admission_no:'',class_id:'',section:'A',mobile_no:''});
 async function load(){ const {data}=await supabase.from('students').select('id,student_name,father_name,admission_no,section,mobile_no,classes(class_name)').order('created_at',{ascending:false}); setRows(data||[]);} useEffect(()=>{load()},[]);
 async function save(){ await supabase.from('students').insert(form); setForm({student_name:'',father_name:'',admission_no:'',class_id:'',section:'A',mobile_no:''}); load(); }
 return <div className='space-y-3'><h2 className='text-xl font-bold'>Students</h2><div className='card grid md:grid-cols-3 gap-2'>
 <input className='input' placeholder='Student Name' value={form.student_name} onChange={e=>setForm({...form,student_name:e.target.value})}/>
 <input className='input' placeholder='Father Name' value={form.father_name} onChange={e=>setForm({...form,father_name:e.target.value})}/>
 <input className='input' placeholder='Admission No' value={form.admission_no} onChange={e=>setForm({...form,admission_no:e.target.value})}/>
 <input className='input' placeholder='Class UUID' value={form.class_id} onChange={e=>setForm({...form,class_id:e.target.value})}/>
 <input className='input' placeholder='Section' value={form.section} onChange={e=>setForm({...form,section:e.target.value})}/>
 <input className='input' placeholder='Mobile' value={form.mobile_no} onChange={e=>setForm({...form,mobile_no:e.target.value})}/>
 <button className='btn md:col-span-3 sticky bottom-2' onClick={save}>Save Student</button></div>
 <div className='grid gap-2'>{rows.map(s=><div key={s.id} className='card text-sm'><b>{s.student_name}</b> ({s.admission_no})<div>{s.father_name} | {s.classes?.class_name}-{s.section} | {s.mobile_no}</div></div>)}</div></div>
}
