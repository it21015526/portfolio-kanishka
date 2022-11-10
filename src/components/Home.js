import React from 'react'
import Container from 'react-bootstrap/Container';
import {Button} from 'react-bootstrap'
import { AiFillFacebook, AiFillGitlab, AiFillLinkedin, AiFillYoutube, AiOutlineApartment } from 'react-icons/ai';
import AboutTab from './AboutTab';

function Home() {
  return (
    <Container style={{height : '100%'}}>
        <div style={{display:'block',justifyContent:'space-around'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={require('../Assests/Images/dp.jpg')} alt='' style={{width :300,borderRadius:20,boxShadow :'0 3px 10px rgb(0 0 0 / 0.2)'}} draggable = {false}/>
            </div>
            <div style={{display:"block"}}>
                <div style={{display:'flex',justifyContent:'center',fontWeight:'bold',fontSize:20}}>
                    Kanishka Prabasara Kumarasiri
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Button variant="outline-primary">
                    <a href={require('../Assests/CV/cv.pdf')} download style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                    Get Resume
                    </a>
                </Button>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <AiFillYoutube size={45} onClick = {() =>alert("Youtube")}/>
                <AiFillLinkedin size={35} onClick = {() =>alert("LinkedIn")}/>
                <AiFillFacebook size={35} onClick = {() =>alert("Facebook")}/>
            </div>
            <div>
                <span style={{textAlign:'center',fontSize:16,margin:10}}>
                    <p>

                    I am Kanishka Prabasara Kumarasiri. Sri Lankan based freelace software developer. Following B.Sc. (Hon's) Information Technology Sp. Data Science at Sri Lanka Institute of Information Technology
                    </p>
                </span>
            </div>

            <div id='about'>
                <h1 style={{alignItems:'center'}}> <AiFillGitlab color='purple'/>About Me</h1>
                <AboutTab/>
            </div>

            <div id='Projects' style={{marginTop:100}}>
                <h1 style={{alignItems:'center'}}> <AiOutlineApartment color='purple'/>Projects</h1>
                <AboutTab/>
            </div>

        </div>
    </Container>
  )
}

export default Home