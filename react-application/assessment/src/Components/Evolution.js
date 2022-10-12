import React, { Component } from "react";

class Evolution extends Component {
    render() {
        return (
         <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>

        <h2 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Humble Beginnings</h2>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>In early 2012, Tanmay Bunkar (Co-founder @ BotLab Dynamics) took his first UAV flight and by 2014, he and his team were asked to deliver 8 drones that would join the Delhi Police.
            This reaffirmed the faith in drone technology and its future in India. In 2016, BotLab Dynamics was incorporated at the Technology Business Incubator Unit at IIT Delhi.
            In the same year, BotLab Dynamics sold heavy-lift systems to IARI (Indian Agriculture Research Institute)
        </p>

        <h2>First Funding</h2>
        <p>In 2017, BotLab Dynamics was awarded Nidhi - SSS (DST, Govt of India) of 50 Lakh Rupees. This paved the way for future research and development.
            In 2018, BotLab Dynamics got selected by Army Design Beuro (ADB) to demo the heavy lift drone in Tawang Arunachal Pradesh.
        </p>

        <h2>Swarm Development</h2>
        <p>In 2019, BotLab Dynamics demonstrated a swarm of ten drones to the Army Chief in AirTech
            sAlso got selected in M-prize by Indian Air Force for swarming of 10 drones with 1 Kg payload / 5km range/auto-detection of the target.
            Also demonstrated a swarm of 10 drones with obstacle avoidance capability to Army at NorTech, Udhampur, Were awarded the Prime Minister’s award & iDEX grant of Rs. 1.5 crore for R&D.
        </p>
        </div>
        );
    }
}

export default Evolution;
