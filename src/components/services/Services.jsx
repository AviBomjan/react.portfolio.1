import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Gather and evaluate user requirements in collaboration with product managers and engineers.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Illustrate design ideas using storyboards, process flows and sitemaps.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Build page navigation buttons and search fields.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Create original graphic designs (e.g. images, sketches and tables).</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Prepare and present rough drafts to internal teams and key stakeholders.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Identify and troubleshoot UX problems (e.g. responsiveness).</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Website and software application designing, building, or maintaining.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Write well designed, testable, efficient code by using best software development practices.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Integrate data from various back-end services and databases.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Gather and refine specifications and requirements based on technical needs</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Perform regular file backups to local directories for recovery.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Research industry-related topics.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Prepare well-structured drafts using digital publishing platforms.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Edit and proofread written pieces before publication.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Identify customers’ needs and recommend new topics.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Coordinate with marketing and design teams to illustrate articles.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Create and distribute marketing copy to advertise our company and products.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Conduct keyword research and use SEO guidelines to optimize content.</p>
            </li>
            <li>
              {/* <BiCheck className='service__list-icon' /> */}
              <p>Promote content on social networks and monitor engagement.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services