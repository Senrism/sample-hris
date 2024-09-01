import { Link } from '@inertiajs/react';
import LandingHeader from '@/Components/LandingHeader';
export default function LandingLayout({ children }) {
    return (
        <>
            <LandingHeader />
            {children}
        </>
    );
}