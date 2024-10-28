import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventList from '../components/EventList';
import EventModal from '../components/EventModal';
import { Circles } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import events from '../data/events';
import { useLocation } from 'react-router-dom';

function EventListPage() {
  const location = useLocation();
  const initialGenre = location.state?.genre || 'All';


  // State hooks for filtering, search, selected event, and loading
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [genreFilter, setGenreFilter] = useState(initialGenre);
  const [locationFilter, setLocationFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open and close event modal
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);


  // Simulated loading effect on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  // Filtering events based on search term, genre, and location
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === 'All' || event.category === genreFilter;
    const matchesLocation = locationFilter === 'All' || event.city === locationFilter;

    return matchesSearch && matchesGenre && matchesLocation;
  });


  // Update genre or location filter with loading effect
  const handleFilterChange = (type, value) => {
    setLoading(true);
    setTimeout(() => {
      if (type === 'genre') setGenreFilter(value);
      else setLocationFilter(value);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setSearchTerm={setSearchTerm} />

      {/* Loader while events are loading */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Circles
            height="80"
            width="80"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            color="#2196F3"
          />
        </div>
      ) : (

        // Main event list content
        <div className="px-4 py-8 transition-opacity duration-500 ease-in-out opacity-100">
          <h1 className="text-3xl font-bold text-center mb-10">All Events</h1>

          {/* Filter buttons for genre and location */}
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-5 md:space-x-8 mb-8">
            <div className="flex flex-wrap items-center">
              <span className="mr-4 font-semibold">Genre:</span>
              {['All', 'Music', 'Workshop', 'Festival', 'Health', 'Entertainment'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleFilterChange('genre', genre)}
                  className={`px-4 py-2 m-1 rounded ${genreFilter === genre ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-200'
                    }`}
                >
                  {genre}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center">
              <span className="mr-4 font-semibold">Location:</span>
              {['All', 'Chandigarh', 'Panchkula', 'Mohali'].map((location) => (
                <button
                  key={location}
                  onClick={() => handleFilterChange('location', location)}
                  className={`px-4 py-2 m-1 rounded ${locationFilter === location ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-200'
                    }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {filteredEvents.length > 0 ? (
              <EventList events={filteredEvents} openModal={openModal} />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src='/assets/notfound.png' alt="No events found" />
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Event modal to show event details */}
      {selectedEvent && <EventModal event={selectedEvent} closeModal={closeModal} />}

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default EventListPage;