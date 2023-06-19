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

const About = () => {
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
          Paljuvuokraus yrityksenä
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '20rem'
        }}>
          <Typography>Olemme Pirkanmaalla jo yli 30 vuoden ajan toimitut paljualan perheyritys.</Typography>
          <Typography>Meihin luottaa jo yli 5000 suomalaista paljukeisaria</Typography>
        </Box>
        <Box>
          <img src={ai} alt="Pic of ui"  style={{ width: '20rem', height: 'auto' }}/>
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
          }}>Perinteinen palju</Typography>

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
              </Box>
              
              <Box>
                <img src={palvelu2} alt="Pic 2" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}} >
                "Jorma" -palju
                </Typography>
              </Box>

              <Box>
                <img src={palvelu3} alt="Pic 3" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}}>
                Jaakko-palaju
                </Typography>
              </Box>
          </Box>

          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        backgroundImage: 'linear-gradient(to bottom, white, lightgray)',
        borderRadius: '2rem',
        boxShadow: '.5rem 0.5rem 0.5rem black'
      }}
    >
      <Typography sx={{ marginTop: '1rem'}}>
        Viikonloppuvuokraus
      </Typography>
      <Typography sx={{ marginTop: '1rem', backgroundColor: 'lightblue', padding: '1rem',
    borderRadius: '1rem',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
      boxShadow: '.5rem 0.5rem 0.5rem blue'
    },
    }}>
        250€
      </Typography>

      <Typography sx={{ marginTop: '1rem'}}>
        Tähän sisältyy:
      </Typography>
      <List>
        <ListItem>
          <Typography>Poreet</Typography>
        </ListItem>
        <ListItem>
          <Typography>Valot</Typography>
        </ListItem>
        <ListItem>
          <Typography>Niskatuet</Typography>
        </ListItem>
      </List>


      <Button
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '2rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
          },
        }}
      >
        Varaa!
      </Button>
    </Box>


          <Typography sx={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '2rem',
                '@media (max-width: 442px)': {
                  fontSize: '1.5rem',
                },
          }}>8 kulmainen palaju</Typography>

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
              </Box>
              
              <Box>
                <img src={palvelu2} alt="Pic 2" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}} >
                "Jorma" -palju
                </Typography>
            
              </Box>

              <Box>
                <img src={palvelu3} alt="Pic 3" style={{ width: '15rem', height: 'auto',
              borderRadius: '2rem' }}/>
                <Typography sx={{width: '15rem'}}>
                Jaakko-palaju
                </Typography>
              </Box>
          </Box>

          <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        backgroundImage: 'linear-gradient(to bottom, white, lightgray)',
        borderRadius: '2rem',
        boxShadow: '.5rem 0.5rem 0.5rem black'
      }}
    >
      <Typography sx={{ marginTop: '1rem'}}>
        Viikonloppuvuokraus
      </Typography>
      <Typography sx={{ marginTop: '1rem'}}>
        200€
      </Typography>
      <Button
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '2rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
          },
        }}
      >
        Varaa!
      </Button>
    </Box>

    <Typography sx={styles.title}>
          Meillä on myös paljon muutakin vuokrattavaa!
        </Typography>
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

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '3rem',
            marginBottom: '2rem'
        }}>
          
          <Box sx={{backgroundColor: 'white', borderRadius: '1rem'}}>
                <img src={palvelu1} alt="Pic 1" style={{ width: '20rem', height: 'auto',
              borderRadius: '2rem', margin: '1rem'
               }}/>
                <Typography>
                Vesijetti
                </Typography>
                <Typography>
                20€/vrk tai 3€/h
                </Typography>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Varaa!</Button>
              </Box>
              
              <Box sx={{backgroundColor: 'white', borderRadius: '1rem'}}>
                <img src={palvelu2} alt="Pic 2" style={{ width: '20rem', height: 'auto',
              borderRadius: '2rem', margin: '1rem' }}/>
                <Typography>
                Lehtipuhallin
                </Typography>
                <Typography>
                20€/vrk
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>

              <Box sx={{backgroundColor: 'white', borderRadius: '1rem'}}>
                <img src={palvelu3} alt="Pic 3" style={{ width: '20rem', height: 'auto',
              borderRadius: '2rem', margin: '1rem' }}/>
                <Typography>
                Moottorisaha
                </Typography>
                <Typography>
                20€/vrk
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
                      transition: 'transform 0.3s',
                      marginTop: '1rem',
                      marginBottom: '1rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>
              
              <Box sx={{backgroundColor: 'white', borderRadius: '1rem'}}>
                <img src={palvelu3} alt="Pic 3" style={{ width: '20rem', height: 'auto',
              borderRadius: '2rem', margin: '1rem' }}/>
                <Typography>
                Moottorivene
                </Typography>
                <Typography>
                50€/vrk
                </Typography>
                <Button sx={{backgroundColor: 'blue', color: 'white',
                      transition: 'transform 0.3s',
                      marginTop: '1rem',
                      marginBottom: '1rem',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Varaa!</Button>
              </Box>

          </Box>

</Container>


  );
};

export default About;