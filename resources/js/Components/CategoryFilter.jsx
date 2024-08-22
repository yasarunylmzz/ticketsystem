import React, { useRef } from 'react';

const CategoryTickets = ({ tickets, category }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Kategoriyi küçük harfe dönüştür ve filtrele
    const filterTicketsByCategory = (category) => {
        return tickets.filter(ticket => ticket.category.toLowerCase() === category.toLowerCase());
    };

    const filteredTickets = filterTicketsByCategory(category);

    return (
        <div className="py-4">
            <div className="container mx-auto">
                <div className="mb-8">
                    <p className="text-3xl font-bold text-blue-600 capitalize">{category}</p>
                </div>
                <div className="relative flex items-center">
                    <button
                        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg transform -translate-y-1/2 hover:bg-gray-200 focus:outline-none"
                        style={{top: '50%'}}
                        onClick={scrollLeft}
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    <div ref={scrollRef} className="flex space-x-6 pb-4 overflow-hidden">
                        {filteredTickets.map(ticket => (
                            <div key={ticket.id} className="bg-white rounded-lg shadow-md w-80 flex-shrink-0">
                                <img src={ticket.image} alt={ticket.event_name} className="w-full h-48 object-cover rounded-t-lg"/>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{ticket.event_name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">Organized by <span className="text-gray-900">{ticket.organizer}</span></p>
                                    <p className="text-sm text-gray-500 mt-2">{ticket.event_date}</p>
                                    <p className="text-sm text-gray-500">{ticket.location}</p>
                                    <p className="text-sm text-gray-500">{ticket.event_time}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-lg font-bold text-blue-500">${ticket.ticket_price}</p>
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            Buy Ticket
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg transform -translate-y-1/2 hover:bg-gray-200 focus:outline-none"
                        style={{ top: '50%' }}
                        onClick={scrollRight}
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryTickets;
