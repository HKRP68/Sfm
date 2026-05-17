import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req:Request){
 const body = await req.json();
 const year = new Date().getFullYear();
 const {count} = await supabase.from('payments').select('*',{count:'exact',head:true});
 const receipt_no = `STAF-${year}-${String((count||0)+1).padStart(4,'0')}`;
 const {data:payment,error} = await supabase.from('payments').insert({student_id:body.student_id,amount:body.amount,months:body.months,receipt_no,payment_mode:'Cash',payment_date:new Date().toISOString().slice(0,10)}).select('*').single();
 if(error) return NextResponse.json({error:error.message},{status:400});
 await supabase.from('receipts').insert({student_id:body.student_id,payment_id:payment.id,receipt_no,amount:body.amount});
 return NextResponse.json({ok:true,receipt_no});
}
