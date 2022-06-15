import React from 'react';
import styled from 'styled-components/macro';

const politique = () => {
  return (
    <>
    <Poli>Politique : les législatives</Poli>
    <div className='container'>
      <div>Publié le 15/06/2022 13:01 <strong className='ml-3'> Mis à jour le 15/06/2022 18:36</strong></div>
      <img src='/img4.jpg' alt='' />
      <h3 className='my-3'>Avec la hausse des prix, les consommateurs se tournent vers le marché de l'occasion. Par exemple, Leboncoin a vu son nombre de publications augmenter. </h3>
      <p>Sur les sites de ventes d'occasion, il est possible de trouver plusieurs objets : jouets, meubles, vêtements. En période d'inflation, ils intéressent particulièrement les personnes souhaitant traquer les bonnes affaires. "Il y a beaucoup d'avantages, ça me permet de comparer en étant chez moi", indique un homme. La plateforme Leboncoin est l'un des principaux bénéficiaires de ces nouvelles transactions. Au premier trimestre 2022, les publications d'annonces ont augmenté de 16 %.</p>
      <h3 className='mt-5 mb-3'>La Cristaline, l'eau la plus vendue en France, augmente.</h3>
      <p>La Cristaline est l'eau la moins chère du marché, mais aussi la plus vendue en France. Chaque année des centaines de millions de bouteilles passent à la caisse des supermarchés. Son prix est stable depuis 20 ans, mais à cause de l'inflation, qui s'élève à +5,2% en mai dernier selon l'INSEE, le pack de 6 bouteilles d'1 litre et demi va augmenter de 10%.</p>
      <h3 className='mt-5 mb-3'>Le cours du blé s’est envolé à cause de la guerre en Ukraine. Les meuniers doivent donc adapter leurs prix au surcoût de la matière première.</h3>
      <p>Le blé est l'un des produits qui a le plus augmenté suite à la guerre en Ukraine. Son prix atteint 438 euros la tonne, il a plus que doublé en un an. Cela impacte évidemment les meuniers indépendants qui subissent la hausse des coûts. Les équipes de France Télévisions ont suivi l'un d'entre eux à Anneyron, dans la Drôme. Olivier Jouve se fournit à 30 kilomètres de chez lui. "Qu’on achète le blé près ou loin, comme le prix du blé est indexé en bourse, eh bien c’est le cours mondial. De mémoire de meunier, on n’avait jamais connu ça", explique-t-il.</p>
      <h3 className='mt-5 mb-3'>Le chèque alimentaire, mainte fois évoqué depuis deux ans et proposé lors de la Convention citoyenne sur le climat, n'est toujours pas sur la table. Pourquoi le dispositif est-il si long à mettre en place ? Éléments de réponse.</h3>
      <p>C'était l'une des propositions phares de la Convention citoyenne pour le climat : verser chaque mois une aide aux foyers les plus modestes, pour les encourager à consommer des produits alimentaires durables, français et bio. La proposition a été validée en juin 2020 par le chef de l'État, Emmanuel Macron. Deux ans plus ans, elle peine encore à voir le jour. Selon le ministre de l'Économie, Bruno Le Maire, faire une liste de produits français éligibles au coup de pouce serait une opération trop complexe. </p>
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