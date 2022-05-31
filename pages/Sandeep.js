import Cards from "../Components/Cards";
import Sidenav from "../Components/Sidenav";

export default function Sandeep() {
  return (
    <>
    <style>{
 `.container {
  padding: 0 2rem;
  
}
.bttt{
    margin-top:50px;
    color:#eaeaea;
}

.main {
  min-height: 90vh;
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
 
  
}

.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`   
}</style>
<Sidenav/>
<main className="main" >

        <Cards name='sandeep' code="1234"/>
        <Cards name="prithivi" code="2345"/>
        <Cards name="sanjeet" code="3456"/>
  
</main>
   
</>
  )
}
 