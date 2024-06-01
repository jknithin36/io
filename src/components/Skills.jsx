import { useEffect, useState } from 'react'

function Skills() {
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setFadeIn(true)
    }, [])

    return (
        <div
            id="skills"
            className={`flex min-h-screen bg-white ${fadeIn ? 'fade-in' : ''}`}
        >
            <div className="flex w-1/2 flex-col items-center justify-center px-8">
                <div className="mt-8 max-w-4xl">
                    <h1 className="font-rubik mb-8 text-6xl uppercase text-gray-800">
                        Skills
                    </h1>
                    <SkillCategory
                        title="Programming Languages"
                        skills={['JavaScript', 'Python (Familiar)']}
                    />
                    <SkillCategory
                        title="Frontend Development"
                        skills={[
                            'HTML',
                            'CSS',
                            'React.js',
                            'React Native',
                            'Next.js',
                            'Bootstrap',
                            'Tailwind CSS',
                            'Redux',
                            'React Router',
                        ]}
                    />
                </div>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center px-8">
                <div className="mt-8 max-w-4xl">
                    <SkillCategory
                        title="Backend Development"
                        skills={[
                            'Node.js',
                            'Express.js',
                            'MongoDB',
                            'RESTful APIs',
                            'Flask ',
                            'mongoose',
                        ]}
                    />
                    <SkillCategory
                        title="Other Skills"
                        skills={['Git', 'Canva (Graphic Design)']}
                    />
                </div>
            </div>
        </div>
    )
}

function SkillCategory({ title, skills }) {
    return (
        <div className="mb-12">
            <h2 className="font-rubik mb-4 text-3xl font-bold text-gray-800">
                {title}
            </h2>
            <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="animate-fade-in flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-6 shadow-md"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
