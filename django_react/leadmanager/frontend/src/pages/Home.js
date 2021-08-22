import React from 'react'
import LeadForm from '../components/LeadForm'
import Leads from '../components/Leads'


const Home = (props) => {
    return(
        <div>
          <LeadForm/>
          <Leads/>
        </div>
    )
}

export default Home