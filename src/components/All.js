import { useRef } from 'react'
import headshot from '../images/co.jpeg'
import logo from '../images/LifeAtPeace.png'

const All = () => {
  const home = useRef(null)
  const about = useRef(null)
  const services = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const copyrightDate = () => {
    return new Date().getFullYear()
  }

  return (
    <div>
      <div className='header'>
        <img src={logo} alt='Life at Peace logo' />
        <ul>
          <li className='link' onClick={() => scrollToSection(home)}>
            Home
          </li>
          <li className='link' onClick={() => scrollToSection(about)}>
            About
          </li>
          <li className='link' onClick={() => scrollToSection(services)}>
            Services
          </li>
          <li className='link' onClick={() => scrollToSection(contact)}>
            Contact
          </li>
        </ul>
      </div>
      <br />
      <div ref={home} className='home'>
        <section className='quote'>
          <h1>
            "Loving ourselves through the process of owning our story is the
            bravest thing we will ever do."
          </h1>
          <h2> - Brene Brown</h2>
        </section>
      </div>
      <br />

      <div ref={about} className='about'>
        <h1>About</h1>
        <div className='aboutUs'>
          <img src={headshot} alt='Carolina Onorati' />
          <div>
            <h2>Qualifications</h2>
            <ul>
              <ol>License: Florida / MH 17095</ol>
              <ol>School: Nova Southeastern University</ol>
              <ol>Year Graduated: 2012</ol>
            </ul>
          </div>
        </div>
        <div className='aboutUs'>
          <p>
            Every great change starts with one decision to try something
            different and I applaud your courage in taking this first step! I am
            a Licensed Mental Health Counselor in Florida and began working with
            individuals and families in 2014. I have helped individuals and
            families work through some of life's most difficult moments. It is
            my belief that you are the expert of your life and the author of
            your story, I am simply here to provide support and guidance as you
            find the right words for each chapter.
            <br />
            <br />
            As a therapist, I strive to create a non-judgemental, safe space for
            my clients to work through their emotions and difficulties. My
            specialties include working with individuals struggling with issues
            related to anxiety, eating disorders, and life changes.
            <br />
            <br />I have extensive experience in utilizing Cognitive Behavioral
            Therapy in order to help my clients recognize the connection between
            their thoughts, emotions, and behaviors. Iam also well versed in
            Solution Focused Brief Therapy (SFBT).
          </p>
        </div>
      </div>
      <br />

      <h1>Services</h1>
      <div ref={services} className='services'>
        <div className='services-card'>
          <h2>Individual Sessions:</h2>
          <ul>
            <ol>50 minutes</ol>
            <ol>Virtual</ol>
            <ol>In Person</ol>
          </ul>
        </div>
        <br />
        <div className='services-card'>
          <h2>Specialties:</h2>
          <ul>
            <ol>Anxiety</ol>
            <ol>Eating Disorders</ol>
            <ol>Stress</ol>
            <ol>Mood Disorders</ol>
            <ol>Personality Disorders</ol>
          </ul>
        </div>
        <br />

        <div className='services-card'>
          <h2>Issues:</h2>
          <ul>
            <ol>Borderline Personality Disorder</ol>
            <ol>Child</ol>
            <ol>Coping Skills</ol>
            <ol>Grief</ol>
            <ol>Life Coaching</ol>
            <ol>Life Transitions</ol>
            <ol>Relationship Issues</ol>
            <ol>Self Esteem</ol>
            <ol>Women's Issues</ol>
            <ol>Body Positivity</ol>
          </ul>
        </div>
        <br />

        <div className='services-card'>
          <h2>Types of Therapy:</h2>
          <ul>
            <ol>Cognitive Behavioral (CBT)</ol>
            <ol>Emotionally Focused</ol>
            <ol>Narrative</ol>
            <ol>Positive Psychology</ol>
            <ol>Solution Focused Brief (SFBT)</ol>
          </ul>
        </div>
        <br />

        <div className='services-card'>
          <h2>Client Focus:</h2>
          <ul>
            <ol>Children (6 to 10)</ol>
            <ol>Preteen</ol>
            <ol>Teen</ol>
            <ol>Adult</ol>
          </ul>
        </div>
        <br />

        <div className='services-card'>
          <h2>Finances:</h2>
          <ul>
            <ol>Session Fee: $140 per session</ol>
            <ol>Couples Session Fee: $150 per session</ol>
            <ol>Accepted Payments: Venmo, Visa</ol>
          </ul>
        </div>
        <br />

        <div className='services-card'>
          <h3>Accepted Insurance Plans:</h3>
          <ul>
            <ol>Aetna</ol>
            <ol>AvMed</ol>
            <ol>BlueCross & BlueShield</ol>
            <ol>Cigna & Evernorth</ol>
            <ol>Florida Blue</ol>
            <ol>Humana</ol>
            <ol>Optum</ol>
            <ol>Oscar Health</ol>
            <ol>UnitedHealthCare UHC | UBH</ol>
          </ul>
          <br />
          <p>
            *If you see your insurance listed, please ask me to verify coverage
            when you arrange your first visit.
          </p>
        </div>
      </div>
      <br />

      <div ref={contact} className='contact'>
        <h3>Dania Beach, FL 33004</h3>
        <p>
          Call: <a href='tel:+9542131158'>(954)213-1158</a> or{' '}
          <a href='mailto:lifeatpeacetherapy@gmail.com'>Email Me</a>
        </p>
      </div>
      <div className='footer'>
        <small>Copyright © {copyrightDate()} | All rights reserved</small>
      </div>
    </div>
  )
}

export default All
