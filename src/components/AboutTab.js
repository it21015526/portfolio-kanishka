import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Button} from 'react-bootstrap'

function AboutTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Education">
        {/* <Sonnet /> */}
        <>
        <div style={{display:'flex'}}>
            <div >
            <img src={require('../Assests/Images/SLIIT.png')} alt ='sliit logo' width={40}/>
            </div>

            <div style={{display:'block',marginLeft:20}}>
            <div style={{fontWeight:'bold'}}>Sri Lanka Institute of Information Technology</div>
            <div>2021-2024</div>
            <div>B.Sc. Information Technology Specialize in Data Science </div>
            </div>
        
        </div>
        </>
      </Tab>
      <Tab eventKey="profile" title="Technologies">
        {/* <Sonnet /> */}
        MERN Stack
      </Tab>
      <Tab eventKey="contact" title="Contact">
        {/* <Sonnet /> */}
        <>
        For any Inquiries<br></br>
        Email : kanishkaprabasara@gmail.com
        <div style={{display:'flex',justifyContent:'left'}}>
                <Button variant="outline-primary">Get Resume</Button>
                </div>
        </>
      </Tab>
    </Tabs>
  )
}

export default AboutTab