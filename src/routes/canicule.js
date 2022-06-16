import React from "react";
import styled from 'styled-components/macro';

const canicule = () => {
  return (
    <>
    <Cani>Canicule : alerte météo</Cani>
    <div className='container'>
      <div>Publié le 16/06/2022 8:59 <strong className='ml-3'> Mis à jour le 16/06/2022 11:45</strong></div>
      <img src='/img3.jpg' alt='' className="first-photo" />
      <h3 className='my-3'>Canicule : Météo-France place 23 départements en vigilance orange. </h3>
      <p>Une vague de chaleur arrivée d’Espagne se met en place par le sud du pays. Vingt-trois départements d’un grand quart sud-ouest ont été placés en vigilance orange canicule, a annoncé Météo-France mercredi 15 juin. Les maximales ont dépassé les 30 °C, dans l’après-midi, dans la plupart des régions, excepté du nord de la Bretagne au Pas-de-Calais. D’ici le week-end, cette vague de chaleur va encore s’intensifier. « A partir de vendredi, on a un affolement du mercure avec 40 °C régulièrement atteint sur le Sud-Ouest et possible jusqu’à la Loire, comme en vallée du Rhône », prévient Olivier Proust, prévisionniste à Météo-France.</p>
      <img src='/img3.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Canicule record en Inde : "On a du mal à descendre en dessous de 36° la nuit".</h3>
      <p>Les mois de mars et d'avril, exceptionnellement chauds, ont fait grimper la consommation d'électricité, notamment pour alimenter les climatiseurs gourmands en énergie. Les centrales électriques manquent à présent de charbon pour répondre à la demande. D'après l'Organisation météorologique mondiale des Nations unies (OMM), cette vague de chaleur record est "cohérente" avec le changement climatique. Conséquence de cette canicule sans précédent, l'Inde, deuxième producteur au monde, a décidé d’interdire les exportations de blé face à la baisse de sa production, due notamment à des vagues extrêmes de chaleur, ce qui va "aggraver la crise" d'approvisionnement en céréales avec la guerre en Ukraine, selon le G7.</p>
      <h3 className='mt-5 mb-3'>Vague de chaleur : Angers, première ville verte de France.</h3>
      <p>Face à ces canicules qui s'annoncent de plus en plus fréquentes, les pouvoirs publics sont mis au défi de trouver des solutions. Le gouvernement a annoncé la mise en place d'un fond de 500 millions d'euros pour rafraîchir les grandes villes, avec un programme de revégétalisation, comme à Angers (Maine-et-Loire), pionnière en la matière. Autre réalisation proche des habitations : des arbres hauts de plus de 10 mètres ont été plantés. Selon la couverture végétale, la température peut baisser de 2 à 4 degrés. "On profite de planter un arbre pour désimperméabiliser le sol au pied de cet arbre", explique Jacques-Olivier Martin, adjoint aux espaces verts.</p>
    </div>
    </>
  )
}

const Cani = styled.h2`
display: flex;
justify-content: center;
margin: 20px;
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto+Condensed&display=swap');
font-family: 'Roboto Condensed', sans-serif;
font-size: 40px;
`

export default canicule