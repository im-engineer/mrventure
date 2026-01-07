'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Features', href: '/features' },
        { name: 'Technologies', href: '/technologies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <img
                        src="/logo/logo.png"
                        alt="MR Venture Logo"
                        className="h-12 w-auto drop-shadow-lg"
                        onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='40' viewBox='0 0 140 40'%3E%3Crect width='140' height='40' fill='%238B5CF6' rx='8'/%3E%3Ctext x='70' y='26' font-family='Arial' font-size='18' fill='white' text-anchor='middle' font-weight='bold'%3EMR VENTURE%3C/text%3E%3C/svg%3E";
                        }}
                    />
                </Link>

                {/* Desktop Navigation */}
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    {/* Frosted Glass Pill */}
                    <div className="bg-white/10 backdrop-blur-xl rounded-full px-10 py-3 flex items-center gap-10 border border-white/20 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 text-base font-semibold tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Purple Gradient Button */}
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-10 py-5 text-base font-semibold shadow-2xl border border-white/20">
                        Get Started
                    </Button>
                </nav>

                {/* Mobile Hamburger Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                            <Menu className="h-7 w-7" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-purple-900/50 w-80">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-8 mt-16">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/90 hover:text-white text-lg font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full px-8 py-6 font-semibold shadow-xl w-full"
                            >
                                Get Started
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}