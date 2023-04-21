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
          <li className='link' onClick={() => scrollToSection(home)}>Home</li>
          <li className='link' onClick={() => scrollToSection(about)}>About</li>
          <li className='link' onClick={() => scrollToSection(services)}>Services</li>
          <li className='link' onClick={() => scrollToSection(contact)}>Contact</li>
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
          <img src={headshot} alt='Self Portrait of Carolina Onorati' />
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
          <br />
        </div>
        <h2>Qualifications</h2>
        <ul>
          <li>License: Florida / MH 17095</li>
          <li>School: Nova Southeastern University</li>
          <li>Year Graduated: 2012</li>
        </ul>
      </div>
      <br />

      <div ref={services} className='services'>
        <h1>Services</h1>
        <h2>Individual Sessions</h2>
        <ul>
          <li>50 minutes</li>
          <li>Virtual or In Person</li>
        </ul>
        <br />
        <h2>Specialties</h2>
        <ul>
          <li>Anxiety</li>
          <li>Eating Disorders</li>
          <li>Stress</li>
          <li>Mood Disorders</li>
          <li>Personality Disorders</li>
        </ul>
        <br />
        <h2>Issues</h2>
        <ul>
          <li>Borderline Personality Disorder</li>
          <li>Child</li>
          <li>Coping Skills</li>
          <li>Grief</li>
          <li>Life Coaching</li>
          <li>Life Transitions</li>
          <li>Relationship Issues</li>
          <li>Self Esteem</li>
          <li>Women's Issues</li>
          <li>Body Positivity</li>
        </ul>
        <br />
        <h2>Types of Therapy</h2>
        <ul>
          <li>Cognitive Behavioral (CBT)</li>
          <li>Emotionally Focused</li>
          <li>Narrative</li>
          <li>Positive Psychology</li>
          <li>Solution Focused Brief (SFBT)</li>
        </ul>
        <h2>Client Focus</h2>
        <ul>
          <li>Children (6 to 10)</li>
          <li>Preteen</li>
          <li>Teen</li>
          <li>Adult</li>
        </ul>
        <br />
        <h2>Finances</h2>
        <ul>
          <li>Session Fee: $140 per session</li>
          <li>Couples Session Fee: $150 per session</li>
          <li>Accepted Payments: Venmo, Visa</li>
        </ul>
        <br />
        <h3>Accepted Insurance Plans:</h3>
        <ul>
          <li>Aetna</li>
          <li>AvMed</li>
          <li>BlueCross & BlueShield</li>
          <li>Cigna & Evernorth</li>
          <li>Florida Blue</li>
          <li>Humana</li>
          <li>Optum</li>
          <li>Oscar Health</li>
          <li>UnitedHealthCare UHC | UBH</li>
        </ul>
        <p>
          *If you see your insurance listed, please ask me to verify coverage
          when you arrange your first visit.
        </p>
      </div>
      <br />

      <div ref={contact} className='contact'>
        <h1>Contact</h1>
        <h3>Dania Beach, FL 33004</h3>
        <p>
          Call: <a href='tel:+9542131158'>(954)213-1158</a> or{' '}
          <a href='mailto:lifeatpeacetherapy@gmail.com'>Email Me</a>
        </p>
        <br />

        <form>
          <label>
            First Name:
            <input type='text' name='name' placeholder='Your First Name' />
          </label>
          <br />
          <label>
            Last Name:
            <input type='text' name='name' placeholder='Your Last Name' />
          </label>
          <br />
          <label>
            Email:
            <input type='text' name='email' placeholder='Your Email' />
          </label>
          <br />
          <label>
            Your Message:
            <input
              type='text'
              name='name'
              placeholder='Enter your message here.'
            />
          </label>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <br />
      
      <div className="footer">
      <small>Copyright © {copyrightDate()} | All rights reserved</small>
    </div>
    </div>
  )
}

export default All
