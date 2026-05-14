import React from 'react'

import Card from './components/Card';
import User from './components/User';

const App = () => {

  const jobOpenings = [
  {
    "brandlogo": "https://logo.clearbit.com/google.com",
    "company": "Google",
    "posted": "5 days ago",
    "post": "Senior UI/UX Designer",
    "tag1": "Part-Time / Hourly",
    "tag2": "Senior Level",
    "pay": "$120/hr",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/apple.com",
    "company": "Apple",
    "posted": "2 weeks ago",
    "post": "Frontend Engineer",
    "tag1": "Full-Time",
    "tag2": "Mid Level",
    "pay": "$95/hr",
    "location": "Bangalore, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/meta.com",
    "company": "Meta",
    "posted": "1 week ago",
    "post": "React Developer",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$110/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/amazon.com",
    "company": "Amazon",
    "posted": "3 days ago",
    "post": "Backend Engineer",
    "tag1": "Full-Time",
    "tag2": "Senior Level",
    "pay": "$105/hr",
    "location": "Pune, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/netflix.com",
    "company": "Netflix",
    "posted": "10 days ago",
    "post": "Product Designer",
    "tag1": "Part-Time",
    "tag2": "Senior Level",
    "pay": "$130/hr",
    "location": "Remote, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/microsoft.com",
    "company": "Microsoft",
    "posted": "4 days ago",
    "post": "Full Stack Developer",
    "tag1": "Full-Time",
    "tag2": "Mid Level",
    "pay": "$100/hr",
    "location": "Noida, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/tesla.com",
    "company": "Tesla",
    "posted": "2 days ago",
    "post": "Software Engineer",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$125/hr",
    "location": "Bangalore, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/adobe.com",
    "company": "Adobe",
    "posted": "1 week ago",
    "post": "UI Developer",
    "tag1": "Full-Time",
    "tag2": "Junior Level",
    "pay": "$80/hr",
    "location": "Delhi, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/uber.com",
    "company": "Uber",
    "posted": "6 days ago",
    "post": "Mobile App Developer",
    "tag1": "Part-Time",
    "tag2": "Mid Level",
    "pay": "$90/hr",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/airbnb.com",
    "company": "Airbnb",
    "posted": "2 weeks ago",
    "post": "UX Researcher",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$115/hr",
    "location": "Remote, India"
  }
]

  return (
    <div className='parent'>
      {jobOpenings.map(
        function(ele , idx) {
          return <div key={idx}>
              <Card company={ele.company} brandlogo={ele.brandlogo} posted={ele.posted} tag1={ele.tag1}
                        tag2={ele.tag2} pay={ele.pay} location={ele.location}/>
          </div>
        }
      )}
    </div>
  )
}

export default App
