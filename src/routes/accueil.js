import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import './accueil.css';
import {useState, useEffect} from 'react';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'En savoir plus...' : 'En savoir plus'}
    </Button>
  );
}

const Accueil = () => {
  return (
    <div className='container'>
      <img src='/info.png' alt=''/>
      <h2>Toute une équipe</h2>
      <div className='mb-5'>INFO vous propose de découvrir les principales actualités du jour grâce aux rédactions de 72 journalistes professionnels en permanences sur le terrain. Actualités en direct 7J/7 et 24/24, ne manquez plus les événements en cours. Actualités locales, en France et à l'international.</div>
      
      <h2 className='text-center mb-5'>Informations quotidiennes</h2>

      <Card className='mb-5 w-75 gauche'>
        <Card.Img variant="top" src="./guerre.jpg" className='card-img' />
          <Card.Body>
            <Card.Title>Guerre en Ukraine</Card.Title>
            <Card.Text>
              33 Milliards d'euros d'aide venant des Etats-Unis à l'Ukraine. Quel moyen sont mis-à disposition pour defendre l'Ukraine ? 
            </Card.Text>
            <LoadingButton className='boutton'></LoadingButton>
          </Card.Body>
      </Card>

      <Card className='mb-5 w-75 gauche'>
        <Card.Img variant="top" src="./canicule.jpg" className='card-img'  />
          <Card.Body>
            <Card.Title>Canicule</Card.Title>
            <Card.Text>
              Record en Inde, avec une canicule durant plus de 2 mois, comment les indiens survivent ?
            </Card.Text>
            <LoadingButton className='boutton'></LoadingButton>
          </Card.Body>
      </Card>

      <Card className='mb-5 w-75 gauche'>
        <Card.Img variant="top" src="./sport.jpg" className='card-img'  />
          <Card.Body>
            <Card.Title>Sport</Card.Title>
            <Card.Text>
              Après le chaos du stade de France, Paris sera prêt pour les JO de 2024 ?
            </Card.Text>
            <LoadingButton className='boutton'></LoadingButton>
          </Card.Body>
      </Card>

      <Card className='mb-5 w-75 gauche'>
        <Card.Img variant="top" src="./inflation.jpg" className='card-img'  />
          <Card.Body>
            <Card.Title>Inflation</Card.Title>
            <Card.Text>
              + 5,2% depuis le début de l'année. Comment les Français change leur habitudes ?
            </Card.Text>
            <LoadingButton className='boutton'></LoadingButton>
          </Card.Body>
      </Card>
      
    </div>
    
  )
}

export default Accueil