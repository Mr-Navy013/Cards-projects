import Cards from './components04/cards'


const App = () => {
    // Job opening Information
const jobs = [
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Menlo Park, USA"
  },
  {
    brandlogo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Background-PNG-Image.png",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.GV0EZNCnTznPm0vPLPe5pgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Cupertino, USA"
  },
  {
    brandlogo: "https://tse3.mm.bing.net/th/id/OIP.-M_GY7Ris6IBZ7dDqjvAWQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Los Gatos, USA"
  },
  {
    brandlogo: "https://tse1.mm.bing.net/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Google",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://www.freepnglogos.com/uploads/microsoft-logo-4.png",
    company: "Microsoft",
    datePosted: "4 weeks ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Redmond, USA"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.hqK0YGNArG2f65HQ3sM38wHaEK?w=288&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Alibaba",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Hangzhou, China"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.8j9Ov--3Fis5SB0WYdUx9gHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "Graphics Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Santa Clara, USA"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?w=150&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Tesla",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://th.bing.com/th/id/OIP.KzqtSdlVAA7RuzWOiW3bpgHaEK?w=306&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "OpenAI",
    datePosted: "3 weeks ago",
    post: "Prompt Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "San Francisco, USA"
  }
];

  return (
    <div className='parent'>
     {jobs.map(function(elem,idx){
      // console.log(idx)
      return  <div key = {idx}>
        <Cards brandlogo = {elem.brandlogo}  company= {elem.company} dateposted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay ={elem.pay} location = {elem.location} />
      </div>
     })}
 

    </div>
  )
}

export default App
