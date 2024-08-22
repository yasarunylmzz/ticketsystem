import { Link } from '@inertiajs/react';
import logo from '../img/logo3.webp';
import { useRef } from 'react';
import CategoryFilter from "@/Components/CategoryFilter.jsx";

export default function Welcome({ user, auth, laravelVersion, phpVersion, tickets }) {
    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);
    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };



    return (
        <>

            <header className="flex w-full justify-between items-center p-4">
                <div className="flex justify-center items-center gap-2">
                    <Link>
                        <img src={logo} alt="Blue Tickets" className="w-10"/>
                    </Link>
                    <p className="text-white text-xl font-semibold">Blue Tickets</p>
                    <div className="flex gap-2 pl-10">
                        <Link className="text-white hover:text-gray-300">Events</Link>
                        <Link className="text-white hover:text-gray-300">About Us</Link>
                        <Link className="text-white hover:text-gray-300">Contact Us</Link>
                        <Link className="text-white hover:text-gray-300">Support</Link>
                    </div>
                </div>

                <div className="space-x-4">
                    {auth.user ? (
                        <a
                            href={1 ? route('admin.dashboard') : route('dashboard')}
                            className="rounded-md bg-blue-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white hover:bg-blue-600 dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </a>
                    ) : (
                        <>
                            <a
                                href={route('login')}
                                className="rounded-md bg-blue-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white hover:bg-blue-600 dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </a>
                            <a
                                href={route('register')}
                                className="rounded-md bg-blue-700 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white hover:bg-blue-600 dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </a>
                        </>
                    )}
                </div>


            </header>


            <div className="py-4">
                <div className="container mx-auto">
                    <p className="p-4 font-bold text-4xl text-blue-600 text-start mb-8">Featured Events</p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {tickets.map(ticket => {
                            console.log(ticket);
                            return (
                                <div key={ticket.id}
                                     className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                                    <img src={ticket.image} alt={ticket.title} className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800">{ticket.event_name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">Organized by <span
                                            className="text-gray-900">{ticket.organizer}</span></p>
                                        <p className="text-sm text-gray-500 mt-2">{ticket.event_date}</p>
                                        <p className="text-sm text-gray-500">{ticket.location}</p>
                                        <p className="text-sm text-gray-500">{ticket.event_time}</p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <p className="text-lg font-bold text-blue-500">${ticket.ticket_price}</p>
                                            <button
                                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                Buy Ticket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            {tickets.length > 0 ? (
                <>
                    <CategoryFilter tickets={tickets} category="Arts & Culture"/>
                    <CategoryFilter tickets={tickets} category="Music"/>
                    <CategoryFilter tickets={tickets} category="Sports"/>
                </>
            ) : (
                <div className="pl-36 font-bold text-4xl text-blue-600 text-start mb-8">No tickets found</div>
            )}


            <footer className="bg-gray-900 rounded-tl-3xl rounded-tr-3xl text-white p-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="Blue Tickets" className="w-10"/>
                                <p className="text-lg font-semibold">Blue Tickets</p>
                            </div>
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                euismod, diam sit amet dictum.</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Quick Links</p>
                            <ul className="mt-2">
                                <li><Link className="text-sm">Events</Link></li>
                                <li><Link className="text-sm">About Us</Link></li>
                                <li><Link className="text-sm">Contact Us</Link></li>
                                <li><Link className="text-sm">Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Contact Us</p>
                            <p className="text-sm mt-2">129 Swan Avenue, Baton Rouge, LA</p>
                            <p className="text-sm">+1 225 123 4567</p>
                            <p className="text-sm">
                                <Link className="text-white hover:text-gray-300">
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Subscribe</p>
                            <p className="text-sm mt-2">Subscribe to our newsletter to get the latest news and
                                updates.</p>
                            <div className="mt-2">
                                <input type="text"
                                       className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                       placeholder="Enter your email"/>
                                <button
                                    className="w-full mt-2 bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
