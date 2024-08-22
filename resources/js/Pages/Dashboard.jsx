import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
     const tickets = [
        {
            id: 1,
            eventName: 'Event 1',
            eventDate: '2021-09-01',
            ticketPrice: 10,
            qrCodeData: 'https://example.com/ticket/1',
        },
        {
            id: 2,
            eventName: 'Event 2',
            eventDate: '2021-09-02',
            ticketPrice: 20,
            qrCodeData: 'https://example.com/ticket/2',
        },
        {
            id: 3,
            eventName: 'Event 3',
            eventDate: '2021-09-03',
            ticketPrice: 30,
            qrCodeData: 'https://example.com/ticket/3',
        },
        {
            id: 4,
            eventName: 'Event 4',
            eventDate: '2021-09-04',
            ticketPrice: 40,
            qrCodeData: 'https://example.com/ticket/4',
        },
         {
                id: 5,
                eventName: 'Event 5',
                eventDate: '2021-09-05',
                ticketPrice: 50,
                qrCodeData: 'https://example.com/ticket/5',
         },
         {
                id: 6,
                eventName: 'Event 6',
                eventDate: '2021-09-06',
                ticketPrice: 60,
                qrCodeData: 'https://example.com/ticket/6',
         },
         {
                id: 7,
                eventName: 'Event 7',
                eventDate: '2021-09-07',
                ticketPrice: 70,
                qrCodeData: 'https://example.com/ticket/7',
         },
         {
                id: 8,
                eventName: 'Event 8',
                eventDate: '2021-09-08',
                ticketPrice: 80,
                qrCodeData: 'https://example.com/ticket/8',
         },
         {
                id: 9,
                eventName: 'Event 9',
                eventDate: '2021-09-09',
                ticketPrice: 90,
                qrCodeData: 'https://example.com/ticket/9',
         },
         {
                id: 10,
                eventName: 'Event 10',
                eventDate: '2021-09-10',
                ticketPrice: 100,
                qrCodeData: 'https://example.com/ticket/10',
         }
        ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-[1500px] mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {tickets.map((ticket) => (
                                    <div key={ticket.id}
                                         className="bg-white border border-gray-200 rounded-lg shadow p-4">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{ticket.eventName}</h2>
                                        <p className="text-gray-600 mb-2">
                                            Date: {new Date(ticket.eventDate).toLocaleDateString()}
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            Price: ${ticket.ticketPrice}
                                        </p>
                                        <div className="flex justify-center items-center mt-4">
                                            <img
                                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticket.qrCodeData}`}
                                                alt="QR Code"
                                                className="w-24 h-24"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                            <button
                                                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            >
                                                Cancel Ticket
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
