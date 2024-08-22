import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function Dashboard({ user }) {
    console.log(user);
    return (
        <AdminLayout
            user={user.name}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're in the Admin Dashboard!</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
