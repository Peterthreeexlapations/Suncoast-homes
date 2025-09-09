import ContactForm from "../components/ContactForm";
export const metadata = { title: "Contact — Suncoast" };
export default function Contact(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1" style={{fontSize:"clamp(28px,5vw,40px)"}}>Contact Us</h1>
        <div className="grid grid-2" style={{marginTop:16}}>
          <ContactForm/>
          <div className="card" style={{padding:16}}>
            <div className="h2">Our office</div>
            <p>Suncoast Home Lists<br/>, </>, </p>
            <p style={{color:'#9fb0c9'}}>Open Mon–Sun • (954) 770-2500</p>
            <img src={""} alt="Office" style={{width:"100%", borderRadius:14, marginTop:8}}/>
          </div>
        </div>
      </div>
    </main>
  );
}
