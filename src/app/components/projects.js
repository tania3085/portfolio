const projects = [
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      image: 'img/download (1).jpeg',
      link: '#'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: 'img/download (2).jpeg',
        link: '#'
      },
      {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: 'img/download (3).jpeg',
        link: '#'
      },
      
      // Add more projects as needed
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  