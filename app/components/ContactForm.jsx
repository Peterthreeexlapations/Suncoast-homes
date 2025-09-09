"use client";
import { useRouter } from "next/navigation";
export default function ContactForm(){
  const router = useRouter();
  function onSubmit(e){ e.preventDefault(); router.push('/thank-you'); }
  return (
    <form onSubmit={onSubmit} className="card" style={{padding:16}}>
      <div style={{fontWeight:800, fontSize:18, marginBottom:8}}>Send a message</div>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:12}}>
        <div><label>Name</label><input className="input" required name="name"/></div>
        <div><label>Email</label><input className="input" type="email" required name="email"/></div>
      </div>
      <div style={{marginTop:12}}><label>Message</label><textarea className="input" rows={5} placeholder="How can we help?" name="message"/></div>
      <button className="btn btn-primary" style={{marginTop:12}}>Send</button>
    </form>
  );
}