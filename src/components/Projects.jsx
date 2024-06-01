import oneImage from '../assets/one.png'
import secondImage from '../assets/two.png'
import thirdImage from '../assets/three.png'

const projectsData = [
    {
        title: 'Spicy - Food Restaurant UI',
        description: 'React, Jest, React Icons, Web Vitals',
        imageSrc: oneImage,
        githubLink: 'https://github.com/yourusername/spicy-food-restaurant-ui',
    },
    {
        title: 'Movie Rating Application',
        description:
            'The movie rating application features both client and administrative functionalities...',
        imageSrc: thirdImage,
        githubLink: 'https://github.com/yourusername/movie-rating-application',
    },
    {
        title: 'Dashboard for Tracking Data',
        description:
            'React, MUI, Redux Toolkit, FullCalendar, Chart.js, Formik, React Router DOM, Yup, Nivo, React Pro Sidebar',
        imageSrc: secondImage,
        githubLink:
            'https://github.com/yourusername/dashboard-for-tracking-data',
    },
]

function Projects() {
    return (
        <div id="projects" className="min-h-screen bg-gray-100 p-8">
            <h1 className="font-rubik lg:text-6x mx-auto mb-8 mt-20 max-w-6xl text-left text-4xl uppercase sm:text-5xl md:mt-28">
                Projects
            </h1>
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <a
                    href="https://github.com/jknithin36"
                    className="inline-block rounded-full border border-gray-600 px-6 py-3 text-base font-semibold text-gray-600 transition duration-300 hover:bg-gray-600 hover:text-white"
                >
                    See More on GitHub
                </a>
            </div>
        </div>
    )
}

function ProjectCard({ title, description, imageSrc, githubLink }) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <img
                src={imageSrc}
                alt={title}
                className="h-40 w-full object-cover"
            />
            <div className="p-6">
                <h2 className="font-rubik mb-4 text-2xl font-bold">{title}</h2>
                <p className="font-rubik text-sm text-gray-700">
                    {description}
                </p>
                <div className="mt-6 flex justify-center">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-gray-600 px-6 py-3 text-base font-semibold text-gray-600 transition duration-300 hover:bg-gray-600 hover:text-white"
                    >
                        Source-code ⫸
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
