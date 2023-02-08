import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Anime } from './interface/anime'
import { Navbar, Nav, Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_ from './navbar';
import Link from 'next/link';


const Recientes = () => {
  const [Animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
   
    const fetchData = async () => {
      const result = await axios.get<Anime[]>('https://gogoanime.consumet.stream/recent-release');
      setAnimes(result.data);
      setLoading(false);
    };
  
    fetchData();
  }, []);

  return (
    <>
 <Navbar_ />
   <Container style={{ backgroundColor: 'white' }}>
<h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}>Episodios Recientes</h1>
{loading ? (
<div className="loading">Cargando...</div>
) : (
<Row>
{Animes.map(anime => (
<Col key={anime.animeId} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>


<Link href="/infoAnime/[animeTitle]" as={`/infoAnime/${anime.animeId}`} legacyBehavior>
  <a>
    <Image src={anime.animeImg} alt={anime.animeTitle} fluid className="anime-image"/>
  </a>
</Link>



<h4 style={{ textAlign: 'center', marginTop: '10px' }}>{anime.animeTitle}</h4>
<p style={{ textAlign: 'center', marginTop: '5px' }}>{anime.releasedDate}</p>
</Col>
))}
</Row>
)}
</Container>
    </>
  );
};

export default Recientes;
