import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>About BotLab Dynamics</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
        BotLab Dynamics has built technologies that allows many drones to fly simultaneously and autonomously in interesting spatial and temporal formations. BotLab is a startup incubated at IIT Delhi incubation facility, TBIU ( Technology Business Incubator). Two focus areas for commercialization of the technology are Media & Entrainment for drone lights shows and in defence. The technology is built from scratch by BotLab. The goal of the BotLab is to fly thousands of drones simultaneously operated by a single user. Our mission is to be part of the ecosystem that makes building hardware easy in India.
        We are building drone technology solutions by designing both hardware and software in-house. Our team has developed full stack of solutions for drone light shows. Current fleet size is 100 drones capable of any custom formation.
        Building a complete system as is hard and making several copies with identical performance is even harder. Making all the drones position themselves precisely so that a viewer can identify a form is a huge challenge. What we have developed is capable of scaling it to thousand of drones flying in detailed vivid imagery.
        </p>
      </div>
    );
  }
}

export default About;
