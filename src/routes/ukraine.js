import React from 'react';
import styled from 'styled-components/macro';

const Ukraine = () => {
  return (
    <>
    <Ukr>La guerre en ukraine</Ukr>
    <div className='container'>
      <div>Publié le 15/06/2022 13:01 <strong className='ml-3'> Mis à jour le 15/06/2022 18:36</strong></div>
      <img src='/img1.jpg' alt='' className='first-photo' />
      <h3 className='my-3'>Les Russes progressent inexorablement à Severodonetsk. </h3>
      <p>Les forces russes poursuivent leur offensive sur Severodonetsk, la capitale de l'oblast de Louhansk, où elles progressent toujours lentement et inexorablement. En face, les troupes ukrainiennes essuient dans cette bataille décisive des pertes "terrifiantes", selon le terme employé par Volodymyr Zelensky. La semaine dernière, le président ukrainien évoquait entre 80 et 100 soldats tués chaque jour. Acculées par la puissance de feu de l'artillerie russe, les forces ukrainiennes ont reconnu ce lundi avoir abandonné le centre de Severodonetsk.</p>
      <img src='/severodonetsk.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Le désespoir des agriculteurs qui ne peuvent plus travailler à cause du conflit.</h3>
      <p>Dans un monde en pleine crise alimentaire, les céréales ukrainiennes représentent un enjeu capital pour de nombreux pays. Au sud de l'Ukraine, nous sommes en pleine période de récoltes, mais les agriculteurs passent davantage de temps à essayer d'échapper aux bombes russes et réparer leurs installations qu'à faire leur véritable travail.  Parmi eux nous retrouvons Nadia Ivanova. Cette agricultrice ukrainienne possède une exploitation de quatre mille hectares près de la ville de Mykolaïv. Mais les troupes russes ont détruit une partie de ses installations en mars. </p>
      <img src='/agri.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Les combats se poursuivent dans l'est et le sud.</h3>
      <p>Les forces ukrainiennes ont indiqué vendredi avoir bombardé des positions russes dans la région de Kherson (sud) dont la quasi-totalité est occupée depuis les premiers jours de l'invasion. Kiev redoute une annexion rapide par Moscou. Depuis plusieurs jours, les Ukrainiens font état de combats dans cette région. Le commandement opérationnel ukrainien a raconté qu'un groupe de reconnaissance infiltré dans ce territoire occupé avait vaincu des troupes russes, "s'emparant de leurs armements et moyens de communication".</p>
      <img src='/war.jpg' alt=''/>
      <h3 className='mt-5 mb-3'>Deux combattants britanniques et un marocain condamnés à mort. </h3>
      <p>En venant combattre en Ukraine, ces hommes avaient peut-être envisagé la mort, mais surement pas par la main de la justice. Deux Britanniques et un Marocain faits prisonniers en Ukraine, où ils combattaient pour Kyiv, ont été condamnés à mort jeudi pour "mercenariat" par la justice des autorités séparatistes de Donetsk, ont annoncé les agences de presse russes.</p>
      <img src='/damn.jpg' alt='' className='mb-5'/>
    </div>
    </>
  )
}

const Ukr = styled.h2`
display: flex;
justify-content: center;
margin: 20px;
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto+Condensed&display=swap');
font-family: 'Roboto Condensed', sans-serif;
font-size: 40px;
`

export default Ukraine