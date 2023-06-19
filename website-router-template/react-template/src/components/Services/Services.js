import React from 'react';
import palvelu1 from '../../Assets/palvelu1.jpg'
import palvelu2 from '../../Assets/palvelu2.jpg'
import palvelu3 from '../../Assets/palvelu3.jpg'
import ai from '../../Assets/ai.png'
import network from '../../Assets/people_network.png'

import { Container, Box, Typography, Button,
  List, ListItem, ListItemText, TextField } from '@mui/material';

const styles = {
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    '@media (max-width: 442px)': {
    fontSize: '1.5rem',
    },
  }
}

const Services = () => {
  return (
    <Container sx={{ marginTop: '5rem' }}>
      <Box>
        <Typography
          sx={{
            fontSize: '3rem',
            textAlign: 'center',
            '@media (max-width: 442px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          Palvelumme
        </Typography>
      </Box>

      <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
             <Box>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Paljut</Button>
              </Box>

          
              <Box>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Vesijetit</Button>
              </Box>
              
              <Box>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Muut tuotteet</Button>
              </Box>
          </Box>

          <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Paljut</Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
          
              <Box>
                <img src={palvelu1} alt="Pic 1" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem'
               }}/>
                <Typography sx={{width: '15rem'}}>
                 Rankka -palju
                </Typography>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Varaa!</Button>
              </Box>
              
              <Box>
                <img src={palvelu2} alt="Pic 2" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}} >
                "Jorma" -palju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>

              <Box>
                <img src={palvelu3} alt="Pic 3" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}}>
                Jaakko-palaju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
                      transition: 'transform 0.3s',
                      marginTop: '1rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>
          </Box>

          <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Paljun vuokraus</Typography>

      <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
          <Box>
            <List sx={{textAlign: 'center'}}>
              <ListItem>
                <Typography>Paljut vuokrataan pestyinä ja desinfioituina.</Typography>
              </ListItem>
              <ListItem>
                <Typography>Paljut vuokrataan pääsääntöisesti viikonlopuks</Typography>
              </ListItem>
              <ListItem>
                <Typography>Kuljetus onnistuu tarvittaessa</Typography>
              </ListItem>
              <ListItem>
                <Typography>Oheistuotteet lisähintaan; kelluvat mukitelineet, kylmälaatikko ja bluetooth-kaiutin.</Typography>
              </ListItem>
            </List>
          </Box>

          </Box>

          <Box sx={{textAlign: 'center', marginBottom: '2rem', display: 'flex',
              justifyContent: 'center',}}>
            <Button sx={{backgroundColor: 'blue', color: 'white',
                        transition: 'transform 0.3s',
                        marginTop: '1rem',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
          }}>Katso vuokraehdot</Button>
        </Box>

        <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Vesijetit</Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
          
              <Box>
                <img src={palvelu1} alt="Pic 1" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem'
               }}/>
                <Typography sx={{width: '15rem'}}>
                 Rankka -palju
                </Typography>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Varaa!</Button>
              </Box>
              
              <Box>
                <img src={palvelu2} alt="Pic 2" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}} >
                "Jorma" -palju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>

              <Box>
                <img src={palvelu3} alt="Pic 3" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}}>
                Jaakko-palaju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
                      transition: 'transform 0.3s',
                      marginTop: '1rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>
          </Box>

          <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Vesijetin vuokraus</Typography>

      <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
          <Box>
            <List sx={{textAlign: 'center'}}>
              <ListItem>
                <Typography>Paljut vuokrataan pestyinä ja desinfioituina.</Typography>
              </ListItem>
              <ListItem>
                <Typography>Paljut vuokrataan pääsääntöisesti viikonlopuks</Typography>
              </ListItem>
              <ListItem>
                <Typography>Kuljetus onnistuu tarvittaessa</Typography>
              </ListItem>
              <ListItem>
                <Typography>Oheistuotteet lisähintaan; kelluvat mukitelineet, kylmälaatikko ja bluetooth-kaiutin.</Typography>
              </ListItem>
            </List>
          </Box>

          </Box>

          <Box sx={{textAlign: 'center', marginBottom: '2rem', display: 'flex',
              justifyContent: 'center',}}>
            <Button sx={{backgroundColor: 'blue', color: 'white',
                        transition: 'transform 0.3s',
                        marginTop: '1rem',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
          }}>Katso vuokraehdot</Button>
        </Box>

        <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Muut tuotteet</Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
          
              <Box>
                <img src={palvelu1} alt="Pic 1" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem'
               }}/>
                <Typography sx={{width: '15rem'}}>
                 Rankka -palju
                </Typography>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Varaa!</Button>
              </Box>
              
              <Box>
                <img src={palvelu2} alt="Pic 2" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}} >
                "Jorma" -palju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>

              <Box>
                <img src={palvelu3} alt="Pic 3" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}}>
                Jaakko-palaju
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
                      transition: 'transform 0.3s',
                      marginTop: '1rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>
          </Box>

          <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>Muiden tuotteiden vuokraus</Typography>

      <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
          <Box>
            <List sx={{textAlign: 'center'}}>
              <ListItem>
                <Typography>Paljut vuokrataan pestyinä ja desinfioituina.</Typography>
              </ListItem>
              <ListItem>
                <Typography>Paljut vuokrataan pääsääntöisesti viikonlopuks</Typography>
              </ListItem>
              <ListItem>
                <Typography>Kuljetus onnistuu tarvittaessa</Typography>
              </ListItem>
              <ListItem>
                <Typography>Oheistuotteet lisähintaan; kelluvat mukitelineet, kylmälaatikko ja bluetooth-kaiutin.</Typography>
              </ListItem>
            </List>
          </Box>

          </Box>

          <Box sx={{textAlign: 'center', marginBottom: '2rem', display: 'flex',
              justifyContent: 'center',}}>
            <Button sx={{backgroundColor: 'blue', color: 'white',
                        transition: 'transform 0.3s',
                        marginTop: '1rem',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
          }}>Katso vuokraehdot</Button>
        </Box>

</Container>


  );
};

export default Services;