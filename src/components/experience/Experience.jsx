import React from 'react'
import './experience.css'
import {FiCheck} from 'react-icons/fi'
import {BsHourglassTop, BsHourglassSplit} from 'react-icons/bs'
import {MdOutlineSchool} from 'react-icons/md'
import {CiHeadphones} from 'react-icons/ci'
import {MdHardware} from 'react-icons/md'
import {SiMcdonalds} from 'react-icons/si'
import {FaHouseUser} from 'react-icons/fa'
import {GiStoneCrafting} from 'react-icons/gi'

const Experience = ({language, setLanguage}) => {
  return (
    <section id='experience'>
      <h5>{language === 'fr' ? "Mes competences":"What skills i have"} </h5>
      <h2>{language === 'fr' ? "Mon experience":"My experience"}</h2>

      <div className='container experience__container'>
        {/* FRONT END */}
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>BOOTSTRAP/TAILWIND</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsHourglassTop  className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>{language === 'fr' ? "En cours":"Still learning"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* BACK END */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>NODEJS/EXPRESS</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>POSTGRES</h4>
                <small className='text-light'>{language === 'fr' ? "validé":"Learned"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FiCheck className='experience__details-icon' />
              <div>
                <h4>SWAGGER</h4>
                <small className='text-light'>{language === 'fr' ? "Besoin d'entrainement":"Need more practice"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsHourglassSplit className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>{language === 'fr' ? "En cours":"Still learning"}</small>
              </div>
            </article>
          
          </div>
        </div>
        {/* JOBS  */}
        <div className='experience__backend'>
          <h3>{language === 'fr' ? "Travail":"Professional Experience"}</h3>
          {/* TODO:mettre les jobs */}
          <div className="experience__content">
            <article className='experience__details'>
              <CiHeadphones className='experience__details-icon' />
              <div>
                <h4>Certicall(Free)</h4>
                <small className='text-light'>{language === 'fr' ? "Conseiller multimedia":"Media advisor"}</small>
              </div>
            </article>
            <article className='experience__details'>
             <MdHardware className='experience__details-icon' />
              <div>
                <h4>Leroy Merlin</h4>
                <small className='text-light'>{language === 'fr' ? "Vendeur rayon bricolage":"Seller hardware store"}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <SiMcdonalds className='experience__details-icon' />
              <div>
                <h4>Mc Donald's</h4>
                <small className='text-light'>{language === 'fr' ? "Employé polyvalent":"Versatile employee"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaHouseUser className='experience__details-icon' />
              <div>
                <h4>Chronodrive</h4>
                <small className='text-light'>{language === 'fr' ? "Accueil":"Reception"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiStoneCrafting className='experience__details-icon' />
              <div>
                <h4>Auto-entrepreneur</h4>
                <small className='text-light'>{language === 'fr' ? "Maçonnerie":"Mason"}</small>
              </div>
            </article>
          
          </div>
        </div>
        {/* STUDY */}
        <div className='experience__backend'>
          <h3>{language === 'fr' ? "Etude":"Education"}</h3>
        {/* TODO:mettre les etudes */}
        <div className="experience__content">
            <article className='experience__details'>
              <MdOutlineSchool className='experience__details-icon'/>
              <div>
                <h4>BEP Electronique</h4>
                <small className='text-light'>{language === 'fr' ? "Obtenu":"Obtained"}</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineSchool className='experience__details-icon'/>
              <div>
                <h4>BAC pro MRIM</h4>
                <small className='text-light'>{language === 'fr' ? "Obtenu":"Obtained"}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <MdOutlineSchool className='experience__details-icon'/>
              <div>
                <h4>Formation O'clock JS</h4>
                <small className='text-light'>{language === 'fr' ? "Terminé":"Finished"}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience