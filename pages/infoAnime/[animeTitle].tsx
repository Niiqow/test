import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimeInfo } from '../interface/info'
import { Container, Row, Col, Image, ListGroup, Card, Spinner, Badge } from 'react-bootstrap';

import Navbar_ from '../navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

const InfoAnime = () => {
  const [anime, setAnime] = useState<AnimeInfo>({
    animeTitle: '',
    type: '',
    releasedDate: '',
    status: '',
    genres: [],
    otherNames: '',
    synopsis: '',
    animeImg: '',
    totalEpisodes: '',
    episodesList: []
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { animeTitle } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<AnimeInfo>(`https://gogoanime.consumet.stream/anime-details/${animeTitle}`);
      setAnime(result.data);
      setLoading(false);
    };

    fetchData();
  }, [animeTitle]);

  return (
    <>
      <Navbar_ />
      <Container style={{ backgroundColor: 'white', padding: '30px' }}>
  {loading ? (
    <div className="loading">
      <Spinner animation="border" variant="primary"/> 
      <p style={{ textAlign: 'center', marginTop: '10px', marginLeft: '20px' }}>Cargando...</p>
    </div>
  ) : (
    <>
      <Row>
      <Col xs={12} sm={6}>
    <Image src={anime.animeImg} alt={anime.animeTitle} fluid className="anime-image" />
  </Col>
  <Col xs={12} sm={6}>
  <h1 className="text-center mt-3 mb-3 font-weight-bold display-4">{anime.animeTitle}</h1>

    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Tipo</Card.Title>
        <Card.Text>{anime.type}</Card.Text>
      </Card.Body>
    </Card>
    <Card className="mb-3">
  <Card.Body>
    <Card.Title>Estado</Card.Title>
    <Card.Text>
    <Badge>
  {anime.status === "Ongoing" ? "En emisión" : anime.status === "Completed" ? "Finalizado" : anime.status}
</Badge>

    </Card.Text>
  </Card.Body>
</Card>

    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Géneros</Card.Title>
        <Card.Text>{anime.genres ? anime.genres.join(', ') : ''}</Card.Text>
      </Card.Body>
    </Card>
 
  {anime.otherNames ? (
       <Card className="mb-3">
    <Card.Body>
      <Card.Title>Otros nombres</Card.Title>
      <Card.Text>{anime.otherNames}</Card.Text>
    </Card.Body>
    </Card> 
  ) : null}


    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Descripción</Card.Title>
        <Card.Text>{anime.synopsis}</Card.Text>
      </Card.Body>
    </Card>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Fecha de lanzamiento</Card.Title>
        <Card.Text>{anime.releasedDate}</Card.Text>
      </Card.Body>
    </Card>
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Episodios totales</Card.Title>
        <Card.Text>{anime.totalEpisodes}</Card.Text>
      </Card.Body>
    </Card>

    {anime.episodesList && (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Lista de episodios</Card.Title>
          <ListGroup>
            {anime.episodesList.map(episode => (
              <ListGroup.Item key={episode.episodeId}>
                <a target="_blank" href={episode.episodeUrl} rel="noreferrer noopener">Episodio {episode.episodeNum}</a>

              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    )}
        </Col>
      </Row>
    </>
  )}
</Container>



    </>
  );
};
export default InfoAnime;
