import Image from "next/image";
// import './styles.css';

export default function Page() {
  return (
    <div className="container">
      {/* Header with Logo */}
      <header className="header">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#team">Our Team</a>
          <a href="#membership">Membership</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section">
        <h1 className="title">Al Amna Welfare</h1>
        <Image
          src="https://static.vecteezy.com/system/resources/previews/013/766/012/non_2x/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-together-helping-doing-charity-illustration-free-vector.jpg"
          alt="Charity illustration"
          width={400}
          height={300}
          
        />
   

<div className="sliding-text-container">
  <p className="sliding-text description">
  Welcome to Al Amna Welfare Organization, where compassion meets action.
          Rooted in the values of empathy, integrity, and community support, our
          mission is to uplift and empower those in need...
  </p>
</div>
        
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>Al Amna Welfare is a non-profit organization committed to transforming the lives of underprivileged individuals and families through compassionate and comprehensive support. Founded by Zulfiqar Ali Chohan, our mission is rooted in the belief that every person deserves dignity and the opportunity to thrive. We provide essential services such as food assistance, educational support, healthcare access, and vocational training to empower those in need. Through our efforts, we aim to break the cycle of poverty and uplift communities by fostering self-sufficiency and resilience.
       </p>
<p>
Our organization operates on the principles of empathy, collaboration, and community engagement. We recognize the importance of working together with local partners, volunteers, and supporters to maximize our impact. Each initiative we undertake is designed to address the specific needs of the communities we serve. By listening to the voices of those we assist and understanding their challenges, we can create tailored programs that foster sustainable change and enhance the quality of life for the individuals and families we support.
</p>
<p>At Al Amna Welfare, we believe in the power of collective action and the difference it can make in the world. We invite you to join us in our mission to help the less fortunate and create a compassionate society where no one is left behind. Whether through donations, volunteering, or spreading awareness, your support can help us continue our vital work and expand our reach. Together, we can make a lasting impact on the lives of those in need and inspire hope for a brighter future.
</p>
      </section>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        // height: '100vh', // Full height of the viewport
      }}>
        <div style={{
          position: 'relative', // Positioning context for the image
          width: '300px', // Desired width of the image container
          height: '300px', // Desired height of the image container
          overflow: 'hidden', // Hides overflow
          marginBottom: '20px',
          marginTop: '-20px'
        }}>
          <Image
            src="https://i.pinimg.com/736x/22/e6/87/22e687528dbf0524e731e0525a0aa4c9.jpg"
            alt="Charity illustration"
            layout="fill" // Make the image fill the parent container
            objectFit="cover" // Ensures the image covers the container
          />
        </div>
      </div>
  
      {/* Team Section */}
      <section id="team" className="section">
        <h2>Our Team</h2>
        <div className="team-member">
          <h3>Zulfiqar Ali Chohan</h3>
          <p>Founder of Al Amna Welfare</p>
          <p>Zulfiqar Ali Chohan, the founder of Al Amna Welfare...</p>
        </div>
        <div className="team-member">
          <h3> M. Shamsher jung Chohan</h3>
          <p>Chief patron of Al Amna Welfare</p>
          <p>As the Honourable Chief Patron...</p>
        </div>
        <div className="team-member">
          <h3>Maham Waheed Chohan</h3>
          <p>President of Al Amna Welfare</p>
          <p>Honourable President Maham Waheed Ahmed Chohan...</p>
        </div>
        <div className="team-member">
          <h3>Dr Ashfa Shakeel Chohan</h3>
          <p>General Secretary of Al Amna Welfare</p>
          <p>In her role as Honourable Secretary...</p>
        </div>
        <div className="team-member">
          <h3>Dr Sawera Saeed Chohan</h3>
          <p>Vice-President of Al Amna Welfare</p>
          <p>As the Honourable Vice President...</p>
        </div>
        <div className="team-member">
          <h3>Dr Adeen Imran Chohan</h3>
          <p>Media Coordinator of Al Amna Welfare</p>
          <p>As the Honourable Media Coordinator...</p>
        </div>
        <div className="team-member">
          <h3>Ushna Tajammul Hussain Chohan</h3>
          <p>Treasurer of Al Amna Welfare</p>
          <p>In her role as the Honourable Treasurer...</p>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="section">
        <h2>Membership</h2>
        <p>
          Join Al-Amna Welfare Organisation! We are excited to invite you to become a part of our growing family!
          To ensure continued support for our initiatives, we have introduced the following participation charges:
        </p>
        <p><strong>Registration Fee:</strong> Rs. 500 (one-time)</p>
        <p><strong>Monthly Fee:</strong> Rs. 200</p>
        <p>
          For more details and registration, feel free to reach out to:
          <br />Zulfiqar Ali Chohan: 03008370238
          <br />Abdul Sami Chohan: 03223016602
        </p>
        <button className="join-button">Become a Member</button>
      </section>

      {/* Donation Section */}
      <section id="donate" className="section">
        <h2>Donate Us</h2>
        <p>
          Your generous donations play a crucial role in enabling Al Amna Welfare to continue its mission...
        </p>
        <button className="donate-button">Donate Now</button>
        <Image
          src="https://i0.wp.com/whitetulip.org/wp-content/uploads/2024/01/Untitled-design-23.png?w=500&ssl=1"
          alt="Charity illustration"
          width={400}
          height={300}
          
        />
      

      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Reach out to us for support or inquiries.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

     
      <footer className="footer">
      <div className="footer-content">
  
        <div className="social-links">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/al_amna_welfare/profilecard/?igsh=N2NqZ2hwcW1xNGU2"
            className="social-link"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  
   



      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Al Amna Welfare Organization. All rights reserved.</p>
        <p>&reg; By Dr Ashfa Shakeel Chohan
        
        </p>
      </footer>
    </div>
  );
}
