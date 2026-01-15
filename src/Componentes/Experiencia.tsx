const Experience = () => {
    const jobs = [
        {
            role: "Analista Programador",
            company: "Empresa Sistemas Gestion y Tecnologia SAC",
            period: "26/10/2022 - 30/04/2023",
            description: "Desarrollo de aplicación de Escritorio con C# y Web con Laravel",
            skills: ["Laravel", "C#"]
        },
        {
            role: "Analista Programador",
            company: "Empresa Ceintec ",
            period: "12/06/2023 – 12/09/2023",
            description: "Desarrollo y Mantenimiento de Sistemas Web con Laravel Livewire, Vue js y React js",

            skills: ["Laravel", "Vue js", "React js", "Expres js"]
        },
        {
            role: "Analista Programador",
            company: "Empresa Sistemas Gestion y Tecnologia SAC",
            period: "01/04/2024 - 30/06/2024",
            description: "Desarrollo de funcionalidades y mantenimiento de la aplicación móvil con Flutter.",

            skills: ["Flutter", "Dart"]
        },
        {
            role: "Analista Programador",
            company: "Empresa Sistemas Gestion y Tecnologia SAC",
            period: "14/10/2024 – 13/02/2025",
            description: "Desarrollo de api con Express js,PostgreSQL y Desarrollo de Etl con Python para cargar archivos",

            skills: ["Express js", "PostgreSQL", "Python"]
        }
    ];

    return (
       <section id="laboral" className="py-20 max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>
            <div className="space-y-8 bg-white p-6">
                {jobs.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l border-primary">
                        {/* El punto de la línea de tiempo */}
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>

                        <span className="text-sm text-primary font-semibold">{job.period}</span>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-gray-500 mb-2">{job.company}</p>
                        <p className="text-gray-700 mb-4">{job.description}</p>

                        <div className="flex gap-2 flex-wrap">
                            {job.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;