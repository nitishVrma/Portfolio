import React from 'react'
import "./works.scss"
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Works() {
    const data = [
        {
          id: "1",
          icon: "hotelL.png",
          linkSite: "https://hotelsclone.netlify.app",
          linkGithub: "https://github.com/abhishekmah/Project-Hotels.com",
          linkBlog: "comingsoon",
          title: "Hotels.com",
          desc:
            "Hotels.com is a leading provider of hotel accommodation worldwide, offering booking services through localized websites.",
          img:
            "hotel.png",
        },
        {
          id: "2",
          icon: "angelL.png",
          linkSite: "https://projectangel.netlify.app",
          linkGithub: "https://github.com/vshubhams/project-angel",
          linkBlog: "comingsoon",
          title: "AngelList",
          desc:
            "AngelList is a U.S. website for startups, angel investors, and job-seekers looking to work at startups.",
          img:
            "angel.png",
        },
        {
          id: "3",
          icon: "myglamm-logo.png",
          linkSite: "https://myglammclone.netlify.app",
          linkGithub: "https://github.com/tauseef-stack/myGlamm",
          linkBlog: "comingsoon",
          title: "My Glamm",
          desc:
            "MyGlamm is a direct-to-consumer beauty brand that offers an online beauty products marketplace.",
          img:
            "glamm.png",
        },
        {
          id: "1",
          icon: "hotelL.png",
          linkSite: "https://hotelsclone.netlify.app",
          linkGithub: "https://github.com/abhishekmah/Project-Hotels.com",
          linkBlog: "comingsoon",
          title: "Hotels.com",
          desc:
            "Hotels.com is a leading provider of hotel accommodation worldwide, offering booking services through localized websites.",
          img:
            "hotel.png",
        },
        {
          id: "2",
          icon: "angelL.png",
          linkSite: "https://projectangel.netlify.app",
          linkGithub: "https://github.com/vshubhams/project-angel",
          linkBlog: "comingsoon",
          title: "AngelList",
          desc:
            "AngelList is a U.S. website for startups, angel investors, and job-seekers looking to work at startups.",
          img:
            "angel.png",
        },
        {
          id: "3",
          icon: "myglamm-logo.png",
          linkSite: "https://myglammclone.netlify.app",
          linkGithub: "https://github.com/tauseef-stack/myGlamm",
          linkBlog: "comingsoon",
          title: "My Glamm",
          desc:
            "MyGlamm is a direct-to-consumer beauty brand that offers an online beauty products marketplace.",
          img:
            "glamm.png",
        },
        {
          id: "1",
          icon: "hotelL.png",
          linkSite: "https://hotelsclone.netlify.app",
          linkGithub: "https://github.com/abhishekmah/Project-Hotels.com",
          linkBlog: "comingsoon",
          title: "Hotels.com",
          desc:
            "Hotels.com is a leading provider of hotel accommodation worldwide, offering booking services through localized websites.",
          img:
            "hotel.png",
        },
        {
          id: "2",
          icon: "angelL.png",
          linkSite: "https://projectangel.netlify.app",
          linkGithub: "https://github.com/vshubhams/project-angel",
          linkBlog: "comingsoon",
          title: "AngelList",
          desc:
            "AngelList is a U.S. website for startups, angel investors, and job-seekers looking to work at startups.",
          img:
            "angel.png",
        },
        {
          id: "3",
          icon: "myglamm-logo.png",
          linkSite: "https://myglammclone.netlify.app",
          linkGithub: "https://github.com/tauseef-stack/myGlamm",
          linkBlog: "comingsoon",
          title: "My Glamm",
          desc:
            "MyGlamm is a direct-to-consumer beauty brand that offers an online beauty products marketplace.",
          img:
            "glamm.png",
        },
    
        
      ];
    
      return (
        <div className="works" id="works">
          <br />
          
          <h1>My Projects</h1>
          <br />
          <Slider autoplay={true} slidesToShow={2} centerMode={true} autoplayScroll={1} centerPadding={-60} arrows={true}>
            {data.map((d) => (
              <div key={uuidv4()} className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt="" />
                      </div>
                      <h2 style={{color: "crimson"}}>{d.title}</h2>
                      <p>{d.desc}</p>
                      <div className="button">
                      <a href= {d.linkBlog} target="blank" style=
                      {{textDecoration: "none", color: "white"}}><button>Blog</button></a>
                      <a href= {d.linkGithub} target="blank" style=
                      {{textDecoration: "none", color: "white"}}><button style={{marginLeft: 10}}>Github</button></a>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <a href={d.linkSite} target="blank"><div><img src={d.img} alt=""/></div></a>
                  </div>
                </div>
              </div>
               ))}
            </Slider>
        </div>   
      );
}
