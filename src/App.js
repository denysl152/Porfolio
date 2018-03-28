import React, { Component } from 'react';
import './App.css';
import Logo from './img/Logo.png';
import Lmda from './img/site-lmda.png';
import MLD from './img/casab.png';
import lamaison from './img/imgprojet.png';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
       <ul className="Navbar">
        <li><img src={Logo} className="Mylogo" alt="Mon logo"/></li>
         <li className="Link"><a href="#About">A Propos</a></li>
         <li className="Link"><a href="#Project">Projet</a></li>
       </ul>
       </header>
       <div className="MyPresentation">
      
      <h3>Salut</h3>
      <br/>
      <cite>"Tout le monde peut viser au but, celui-là seul est adroit qui l'atteint."</cite>
     <br/>
      <strong>Cécile Fée </strong>
      </div>
       <div>
        
       <a href="#About" className="btn btn-circle js-scroll-trigger">
      <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-angle-down fa-stack-1x fa-inverse"></i></span>
              </a>
              
      </div>
      <div className="Container-Other">
      <h2>A Propos</h2>
      <br/>
      <section className="Block-About" id="About">
      <p>Salut , Je m'appelle Louves Dénys , je suis un dévellopeur Web qui est agée de 18 ans .
          </p>
          <br/>
        <p> J'aime la technologie les nouveaux challenges.</p>
        <br/>
        <h5>MES COMPÉTENCES ACQUISES:</h5>
        <ul className="MySkill">
        <li><b>HTML/CSS</b></li>
        <li><b>JS</b></li>
        <li><b>ReactJs</b></li>
        <li><b>PHP/SQL</b></li>
        <li><b>Git/Github</b></li>
        <li><b>Boostrap</b></li>
        <li><b>Materialize CSS</b></li>
        </ul>
      </section>
      <h3>Projet</h3>
      <br/>
      <section className="Block-Project" id="Project">
       <div className="Container-Card">
       <div className="card">
                <img className="card-img-top-center" src={Lmda} alt="Mon projet"/>
                <div className="card-body">
                     <p>La Maison des Artistes est un projet qui a été crée par le lycée H. BASTARAUD Dans le cadre du concours « Entreprendre
                      en Lycée ».<br/>
                      </p>
                      <a href="https://lamaisondesartistes.github.io/ProjetLMDA/#/">Lien du site de lmda</a>
                        <details>Nous avons utilisé pour ce projet le framework ReactJs et nous l'avons fait en méthode Agile.</details>
                </div>
              </div>
              <div className="card">
        <img className="card-img-top-center" src={MLD} alt="Mon projet"/>
        <div className="card-body">
          <p>Dans la cadre de la formation Simplon,nous étions chargée de faire un projet qui consiste à faire un début de site e-commerce en redux.
            <br/><a href="#">Lien du site "CASABLANCA"</a>
          </p>
          <details>Pour ce projet nous avons travailler par équipe de 3 et ce projet nous l'avons fait en 4 jours</details>
        </div>
      </div>
    
      <div className="card">
                <img className="card-img-top-center" src={lamaison} alt="Mon projet"/>
                <div className="card-body">
                     <p>La Maison des Auto est un projet fictif qui a été par moi durant mon temps libre.
                       Ce projet est un site ecommerce. <br/>
                      </p>
                      <a href="https://denysl152.github.io/Website-HTML/dossier/site/">Lien vers la Maison des Auto</a>
                        <details>Ce projet est un projet qui m'a pris 2 jours fait en HTML/CSS/JS</details>
                </div>
                </div>
                </div>
               
             
     </section>
     <div className="TxtCV" >
     <br/>
    <p>Vous pouvez jetter un coup d'oeil à Mon <a className="LinkCV" href="./img/NewCVdénys.pdf" download> CV</a>  😄😄 Si sa vous intéresse.
      </p>
     </div>
     <footer>
     <div>
        <ul className="LinkNetwork">
          <li className="iconSocial">
          <a href="https://twitter.com/denys_louves"><i className="fa fa-2x fa-twitter"></i></a><p className="TextNetwork">Twitter</p>
          </li>

          <li className="iconSocial">
          <a href="https://github.com/denysl152"><i className="fa fa-2x fa-github"></i></a><p className="TextNetwork">Github</p>
          </li>

          <li className="iconSocial">
          <a href="https://www.linkedin.com/in/d%C3%A9nys-louves-50830a157/"><i className="fa fa-2x fa-linkedin"></i></a><p className="TextNetwork">Linkedin</p>
          </li>
        </ul>
        <div className="TxtFooter">
        Made with ❤ by Dénys
        </div>
        </div>
     </footer>
     </div>
      </div>
    );
  }
}

export default App;
