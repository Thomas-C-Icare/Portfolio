import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpg'
import { HashLink } from 'react-router-hash-link';


const About = ({language, setLanguage}) => {
  return (
    <section id='about' >
     <h5 className={ language === 'en' ? "" : "hidden"}> Get to know</h5>
     <h2 className={ language === 'en' ? "" : "hidden"}> About me</h2>
     <h5 className={ language === 'fr' ? "" : "hidden"}> Faisons connaissance</h5>
     <h2 className={ language === 'fr' ? "" : "hidden"}> A propos de moi</h2>

     <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='of me again' />
          </div>
        </div>
        <div className='about__content'>
        <div className={ language === 'en' ? "" : "hidden"}>
            <p>
              Hello, my name is Thomas and I'm a web developer.
            </p>
            <p >
              I graduated in computer science and started my professional career as a hotline technician at Free. At the same time, I also learned C# as an autodidact, and discovered a passion for programming.
            </p>
            <p>
              In order to deepen my knowledge in web development, I wanted to follow a training course in JavaScript. I am now proficient in front-end and back-end web development, and I like to practice my skills to create useful (or not) applications.
            </p>
            <p>
              On my portfolio, you can discover some of my personal projects, which illustrate my skills in web development. I am also open to collaboration and work opportunities. Do not hesitate to contact me !
            </p>
            <p>
              Thank you for your visit !
            </p>
          </div>
          <div className={ language === 'fr' ? "" : "hidden"}>
            <p>
              Salut, je m'appelle Thomas et je suis développeur web.
            </p>
            <p >
               J'ai obtenu mon diplôme en informatique et j'ai commencé ma carrière professionnelle en tant que technicien en hotline chez Free. En parallèle, j'ai appris le C# en autodidacte, et me suis découvert une passion pour la progammation.
            </p>
            <p>
              Afin d'approfondir mes connaissances en développement web, j'ai souhaité suivre une formation en JavaScript. Je suis maintenant compétent en développement web front-end et back-end, et j'aime mettre en pratique mes compétences pour créer des applications utiles(ou pas).
            </p>
            <p>
            Sur mon portfolio, vous pourrez découvrir certains de mes projets personnels, qui illustrent mes compétences en matière de développement web. Je suis également ouvert aux opportunités de collaboration et de travail, n'hésitez pas à me contacter !
            </p>
            <p>
            Merci de votre visite!
            </p>
          </div>
          <span><HashLink className="btn btn-primary" to="#contact">{ language === 'fr' ? "Discutons" : "Let's talk"}</HashLink> </span>
        </div>
     </div>
    </section>
    
  )
}

export default About