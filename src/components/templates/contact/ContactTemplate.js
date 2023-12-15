/* eslint-disable react/no-unescaped-entities */
import Title from '@/components/atoms/title/Title'
import React from 'react'

export default function ContactTemplate() {
  return (
    <main className='contact'> 
        <section className='contact__text'>
        <Title label='alibeniris' className='contact__style_text'/>
        <p className='contact__style_text'>Ces 7  dernières année, j'ai consacré beaucoup de temps à développer mes compétences
dans en tant qu'autodidacte. 
J'ai également eu l'occasion de suivre une année d'études à l'école de cinéma CLCF.
Cependant, j'ai finalement décidé de me lancer en tant que freelance,
afin de pouvoir travailler sur divers projets en tant que prestataire.
J’ai eu l’occasion de travailler avec différentes marques tels que : DEEZER, LE COQ SPORTIF, NOTORIOUS BRAND...
différent labels et maison de production  tels que : BELIEVE, SONY MUSIC, FEUILLE BLANCHE, DIGIZIK, CAPANTA...

Ma passion pour le cinéma s'est particulièrement tournée vers le format court.
J'apprécie sa diversité d'applications, que ce soit à travers la publicités, le clip musical ou
les capsules vidéo créatives. Mais aussi le développement de courts et long métrage de fiction.

Je me sens particulièrement à l'aise dans la réalisation et le cadrage,
mais je reste ouvert aux opportunités qui se présentent.

Je suis passionné par mon métier et j'ai hâte de collaborer avec de nouvelles personnes et
de participer à des projets passionnants.
En tant que professionnel de l'image, je m'efforce toujours de fournir un travail de qualité,
en accordant une attention particulière aux détails et à la satisfaction de mes clients.
</p>
        <div className='contact__rs'>

        </div>
        </section>
        <section className='contact__form'>
        <form className='contact__form_container'>
        <Title label='demande de projet' className='contact__title'/>
            <div className='contact__form_input'>
            <input type='text' className='contact__input' placeholder='NOM'/>
            <input type='email' className='contact__input' placeholder='EMAIL'/>
            </div>
            <textarea rows="5" cols="33" className='contact__textarea' placeholder='Votre message...'/>
        </form>
        </section>
    </main>
  )
}
