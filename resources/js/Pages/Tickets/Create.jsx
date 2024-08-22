import React from 'react';
import { useForm } from '@inertiajs/react';
import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function Create({ auth, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        event_name: '',
        organizer: '',
        location: '',
        event_date: '',
        event_time: '',
        ticket_price: '',
        category: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('store.ticket'), {
            forceFormData: true,  // Form verisinin FormData olarak gönderilmesini sağlar (resim yükleme için gerekli)
        });
    };

    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Ticket
                </h2>
            }
            user={auth}
        >
            <div className="w-[95%] mt-10 mx-auto p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Create Ticket</h1>
                <form onSubmit={submit} className="space-y-4" encType="multipart/form-data">
                    <div>
                        <label htmlFor="event_name" className="block text-sm font-medium text-gray-700">Event Name</label>
                        <input
                            id="event_name"
                            value={data.event_name}
                            onChange={(e) => setData('event_name', e.target.value)}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.event_name && <div className="text-red-500 text-sm mt-1">{errors.event_name}</div>}
                    </div>

                    <div>
                        <label htmlFor="organizer" className="block text-sm font-medium text-gray-700">Organizer</label>
                        <input
                            id="organizer"
                            value={data.organizer}
                            onChange={(e) => setData('organizer', e.target.value)}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.organizer && <div className="text-red-500 text-sm mt-1">{errors.organizer}</div>}
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            id="location"
                            value={data.location}
                            onChange={(e) => setData('location', e.target.value)}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
                    </div>

                    <div>
                        <label htmlFor="event_date" className="block text-sm font-medium text-gray-700">Event Date</label>
                        <input
                            id="event_date"
                            value={data.event_date}
                            onChange={(e) => setData('event_date', e.target.value)}
                            type="date"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.event_date && <div className="text-red-500 text-sm mt-1">{errors.event_date}</div>}
                    </div>

                    <div>
                        <label htmlFor="event_time" className="block text-sm font-medium text-gray-700">Event Time</label>
                        <input
                            id="event_time"
                            value={data.event_time}
                            onChange={(e) => setData('event_time', e.target.value)}
                            type="time"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.event_time && <div className="text-red-500 text-sm mt-1">{errors.event_time}</div>}
                    </div>

                    <div>
                        <label htmlFor="ticket_price" className="block text-sm font-medium text-gray-700">Ticket Price</label>
                        <input
                            id="ticket_price"
                            value={data.ticket_price}
                            onChange={(e) => setData('ticket_price', e.target.value)}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.ticket_price && <div className="text-red-500 text-sm mt-1">{errors.ticket_price}</div>}
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            id="category"
                            value={data.category}
                            onChange={(e) => setData('category', e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled>Select a category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {errors.category && <div className="text-red-500 text-sm mt-1">{errors.category}</div>}
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            id="image"
                            type="file"
                            onChange={(e) => setData('image', e.target.files[0])}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}
                    >
                        {processing ? 'Processing...' : 'Create Ticket'}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
}
