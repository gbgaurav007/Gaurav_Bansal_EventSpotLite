import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar, AiOutlineEnvironment, AiFillStar, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const EventModal = ({ event, closeModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imagePath = `/assets/${event.imgName}.jpeg`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
      onClick={closeModal}
    >
      <motion.div
        className="bg-white rounded-lg w-[80%] max-w-md p-6 relative overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: `${window.scrollY + window.innerHeight / 2 - 200}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-gray-500" onClick={closeModal}>
          X
        </button>

        <img src={imagePath} alt={event.name} className="w-full h-48 object-cover rounded-lg" />

        <h2 className="text-2xl font-bold mt-4">{event.name}</h2>

        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-500 mr-2" />
          <span className="text-lg">{event.category}</span>
        </div>

        <div className="flex items-center mt-2">
          <AiOutlineCalendar className="text-gray-500 mr-2" />
          <span className="text-gray-600">{event.date}</span>
        </div>

        <div className="flex items-center mt-2">
          <AiOutlineEnvironment className="text-gray-500 mr-2" />
          <span className="text-gray-600">{event.location}</span>
        </div>

        <h3 className="text-xl font-semibold mt-4">About the Event</h3>
        <p className="mt-2 text-gray-700">{event.description}</p>

        <div className="mt-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
            <h3 className="text-xl font-semibold">Terms and Conditions</h3>
            {isExpanded ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {isExpanded && (
            <motion.div
              className="mt-2 bg-gray-100 p-4 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="list-disc list-inside text-gray-600">
                <li>Carry a valid ID proof along with you.</li>
                <li>No refunds on purchased ticket are possible, even in case of any rescheduling.</li>
                <li>No dangerous or potentially hazardous objects will be allowed in the venue and may be ejected with or without the owner from the venue.</li>
                <li>Organizers hold the right to deny late entry to the event.</li>
                <li>Venue rules apply.</li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EventModal;