import { FiArrowRight } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Showcase = () => {
  return (
    <section
      bg-white
      className="mt-32"
      style={{
        backgroundColor: "white",
        backgroundImage: `url('/img/banner.png')`,
        backgroundSize: 'cover',  // Default background size for desktop
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        height: '70vh',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem', // Default for small screens
            color: 'white',
            marginTop: '1rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          Welcome to Chizo_u International Ltd
        </h1>
        <p
          style={{
            color: '#e5e5e5',
            fontSize: '1rem',
            maxWidth: '40rem',
            marginBottom: '2rem',
          }}
        >
          Empowering global businesses through excellence in trade, logistics, procurement, and professional development.
        </p>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          style={{
            display: 'inline-block',
          }}
        >
          <button
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
            }}
            className="group"
          >
            Explore More
            <FiArrowRight
              style={{
                marginLeft: '0.5rem',
                transition: 'transform 0.3s ease',
              }}
              className="group-hover:translate-x-1"
            />
          </button>
        </ScrollLink>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-size: cover; /* Make sure the image covers the screen */
          }

          h1 {
            font-size: 2rem; /* Adjust heading size for smaller screens */
          }

          p {
            font-size: 0.875rem; /* Adjust font size for paragraph */
            max-width: 100%; /* Allow text to take full width */
          }

          button {
            padding: 0.5rem 1.5rem; /* Reduce button padding for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
