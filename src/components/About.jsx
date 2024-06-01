import React from 'react'

function About() {
    return (
        <div
            id="about"
            className="flex min-h-screen flex-col items-center bg-gray-100 p-4"
        >
            <div className="mt-40 flex w-full max-w-6xl flex-col items-start">
                <h1 className="font-rubik mb-6 mt-4 text-[30px] uppercase sm:text-[40px] md:text-[50px] lg:text-[60px]">
                    A Little About Me
                </h1>
                <p className="font-caveat text-md mb-6 text-gray-700 md:text-lg">
                    I am a digital nomad currently based in Hong Kong. I've been
                    working in graphic design for the past ten years. It was
                    only in the past three that I decided to focus full-time on
                    illustrating.
                </p>
                <p className="font-caveat text-md mb-6 text-gray-700 md:text-lg">
                    My journey began with a passion for art and design that I
                    discovered at a young age. Over the years, I've had the
                    opportunity to work with a variety of clients, ranging from
                    small startups to large corporations, helping them bring
                    their visions to life through compelling visual designs.
                </p>
                <p className="font-caveat text-md mb-6 text-gray-700 md:text-lg">
                    In addition to my professional work, I love experimenting
                    with different styles and techniques in my personal
                    projects. This constant exploration helps me stay creative
                    and push the boundaries of my craft.
                </p>
                <p className="font-caveat text-md mb-6 text-gray-700 md:text-lg">
                    When I'm not working, you can find me exploring new cities,
                    indulging in local cuisines, and capturing moments through
                    my camera lens. These experiences not only enrich my life
                    but also inspire my designs.
                </p>
                <p className="font-caveat text-md mb-6 text-gray-700 md:text-lg">
                    I'm always open to new opportunities and collaborations. If
                    you'd like to discuss a project or just want to say hi, feel
                    free to get in touch!
                </p>
            </div>
        </div>
    )
}

export default About
