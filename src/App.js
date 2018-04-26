import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import './App.css';
import gIT from './img/git.png';
import github from './img/github.png';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import PHP from './img/php2.png';
import Boot from './img/boot.jpeg';
import Materialize from './img/materialize.png';
import Jsreact from './img/react.png';
import Logo from './img/LOUVES.png';
/*import mSQL from './img/mysql.png';
import Lmda from './img/site-lmda.png';
import MLD from './img/casab.png';
import lamaison from './img/imgprojet.png';*/

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
       <ul className="Navbar">
       <li className="Link"><a href="#About">A Propos</a></li>
        <li><img src={Logo} className="Mylogo" alt="Mon logo"/></li>
        
         <li className="Link"><a href="#Project">Projet</a></li>
       </ul>
       </header>
       <div className="MyPresentation">
      
 
       <Animated animationIn="jackInTheBox" animationOut="fadeOut" isVisible={true}>
     <div>
     <h3>Salut</h3> 
     </div>
 </Animated>
      
      <br/>
      <cite>"Tout le monde peut viser au but, celui-là seul est adroit qui l'atteint."</cite>
     <br/>
      <strong>Cécile Fée </strong>
      </div>
       <div>
        
       <a href="#About" className="btn btn-circle js-scroll-trigger" id="backTop">
      <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-angle-down fa-stack-1x fa-inverse"></i></span>
              </a>
              
      </div>
      <div className="Container-Other">
      <section className="Block-About" id="About">
      <h2>A Propos</h2>
      <br/>
      <p>Salut , Je m'appelle Louves Dénys , je suis un développeur Web qui est agé de 18 ans .
          </p>
          <br/>
        <p> J'aime les technologies , les nouveaux challenges.</p>
        <br/>
        <h5>MES COMPÉTENCES ACQUISES:</h5>
        <div>
        <ul className="MySkill">
        <br/>
        <li><img src={html} className="mycompéC"/><b>HTML/CSS</b><img src={css} className="mycompéC"/></li>
        <li><b>JS</b><img src={js} className="mycompéC"/></li>
        <li><b>React Js</b><img className="mycompéR" src={Jsreact}/> </li>
        <li><b>PHP</b><img src={PHP} className="mycompé"/></li>
        <li><img src={gIT} className="mycompéC"/><b>Git/Github</b><img src={github} className="mycompéB"/> </li>
        <li><b>Boostrap</b><img src={Boot} className="mycompéB"/> </li>
        <li><b>Materialize CSS</b><img src={Materialize} className="mycompéR"/> </li>
        </ul>
        </div>
      </section>
      <section className="Block-Project" id="Project">
      <h3>Projet</h3>
      <br/>
       <div className="Container-Card">
       <div className="MyDiv">
       <div className="card">
       <p className="Title-card">La Maison des artistes</p>
               
                    <div className="text-card">
                        <details> <p>La Maison des Artistes est un projet qui a été crée par le lycée H. BASTARAUD Dans le cadre du concours « Entreprendre
                      en Lycée ».<br/>
                      Nous avons utilisé pour ce projet le framework ReactJs et nous l'avons fait en méthode Agile.
                      </p>
                      <a href="https://lamaisondesartistes.github.io/ProjetLMDA/#/">Lien du site de lmda</a>
                       </details>
                       </div>
                </div>

              </div>
              <div className="MyDiv">
              <div className="card">

              <p className="Title-card">La maison des artistes</p>
          <div className="text-card">
          <details>
          <p>Dans la cadre de la formation Simplon,nous étions chargée de faire un projet qui consiste à faire un début de site e-commerce en redux.
            <br/>
            Pour ce projet nous avons travailler par équipe de 3 et ce projet nous l'avons fait en 4 jours.
            <a href="https://github.com/denysl152/Redux-projet">Lien du site "CASABLANCA"</a>
          </p></details>
          </div>
        </div>
      </div>  
      </div>
            
               
             
     </section>
     <div className="TxtCV" style={{color:"black"}} >
    <div className="download"> <a href="img/NewCVdénys.pdf" download>Télécharger mon CV <br/>
   <i class="fa fa-2x fa-download"></i></a>
    </div>
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
