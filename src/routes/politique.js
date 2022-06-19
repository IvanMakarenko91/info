import React from 'react';
import styled from 'styled-components/macro';

const politique = () => {
  return (
    <>
    <Poli>Politique : les législatives</Poli>
    <div className='container'>
      <div>Publié le 16/06/2022 10:12 <strong className='ml-3'> Mis à jour le 15/06/2022 17:51</strong></div>
      <img src='/img4.jpg' alt='' className='first-photo' />
      <h3 className='my-3'>Législatives 2022 à Paris: Sarkozy reçoit une candidate ensemble et provoque la colère des LR. </h3>
      <p>L'ancien président de la République a rencontré ce mercredi Astrid Panosyan-Bouvet, candidate Ensemble, arrivée en tête dimanche dans la 4e circonscription de Paris. Un sacré coup de pouce contre son parti. Nicolas Sarkozy a rencontré ce mercredi Astrid Panosyan-Bouvet, candidate Ensemble dans le 4e circonscription de Paris, selon l'entourage de cette dernière, arrivée en tête au premier tour avec 41,03% des voix. Pourtant, celle-ci affrontera dimanche, au second tour, la députée LR sortante Brigitte Kuster, soutien de l'ex-chef de l'État lors de la primaire LR en 2016.</p>
      <img src='/manif.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Emmanuel Macron en visite à Kiev, avec Scholz et Draghi, des déclarations mal perçues.</h3>
      <p>L'Ukraine ne comprend pas pourquoi la France continue à parler avec Vladimir Poutine sans obtenir aucun résultat. Sa phrase sur le fait qu'il ne faille pas "humilier" la Russie a également été mal perçue. On ne sait pas si les trois hommes d'État ont des annonces à faire. Emmanuel Macron avait dit qu'il ne ferait pas ce déplacement juste pour les caméras, mais s'il avait quelque chose à annoncer, confie Agnès Vahramian, envoyée spéciale à Kiev (Ukraine).</p>
      <img src='/kiev.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Législatives 2022 : trois questions sur l'abstention record du premier tour.</h3>
      <p>Comme en 2017, plus de la moitié des électeurs ne sont pas allés voter dimanche. La participation a même diminué de plus d'un point en cinq ans, atteignant un niveau jamais vu dans l'histoire de la Ve République. Elle n'avait jamais été aussi élevée. L'abstention a atteint 52,49% lors du premier tour des élections législatives, dimanche 12 juin, selon les résultats définitifs publiés par le ministère de l'Intérieur. Sur les 48 953 984 électeurs appelés aux urnes, 25 696 476 ne s'y sont pas rendus. Le précédent record, établi lors des législatives de 2017 (51,30%), est déjà battu.</p>
      <img src='/half.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Législatives 2022: les écologistes espèrent entre 25 et 30 députés dimanche soir.</h3>
      <p>Dix après avoir réussi à constituer un groupe parlementaire, EELV pourrait renouveler l’expérience dimanche prochain. Arrivée en tête dans la 8e circonscription de Paris avec 41,70 % des voix, l’écologiste Éva Sas devance largement la députée sortante Ensemble! Laetitia Avia (27,94 %). La victoire n’est pas certaine, mais ce score lui permet d’espérer reprendre mardi prochain la route de l’Assemblée nationale.</p>
      <img src='/ecolo.jpg' alt='' className='mb-5'/>
    </div>
    </>
  )
}

const Poli = styled.h2`
display: flex;
justify-content: center;
margin: 20px;
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto+Condensed&display=swap');
font-family: 'Roboto Condensed', sans-serif;
font-size: 40px;
`

export default politique