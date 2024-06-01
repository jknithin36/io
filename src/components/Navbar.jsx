import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isSticky, setSticky] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'contact']
            let found = false
            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i])
                if (
                    section &&
                    window.scrollY >= section.offsetTop - 50 &&
                    window.scrollY <
                        section.offsetTop + section.offsetHeight - 50
                ) {
                    setActiveSection(sections[i])
                    found = true
                    break
                }
            }
            if (!found) {
                setActiveSection('')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth', // Smooth scrolling behavior
            })
        }
    }

    return (
        <header
            className={`navbar ${isSticky ? 'sticky top-0 shadow-md' : ''} bg-white transition-shadow duration-300`}
        >
            <nav className="container mx-auto px-4 py-6">
                <ul className="flex justify-center">
                    {['home', 'about', 'skills', 'projects', 'contact'].map(
                        (section) => (
                            <li key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className={`px-4 transition-colors duration-200 hover:text-gray-700 ${
                                        activeSection === section
                                            ? 'border-b-2 border-red-500 text-red-500'
                                            : 'text-black'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() +
                                        section.slice(1)}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
        </header>
    )
}
