const Skills = () => {
    const categories = [
        {
            title: "Web/Escritorio",
            skills: ["React js", "Laravel", "Tailwind CSS", "TypeScript", "express js", "node js", "Php", "C#", "Python"],
            icon: "🎨"
        },
        {
            title: "Movil",
            skills: ["Flutter", "Dart"],
            icon: "📱"
        },
        {
            title: "Base de datos",
            skills: ["MySQL", "PostgreSQL", "SQLite", "SQL SERVER"],
            icon: "⚙️"
        },
        {
            title: "Herramientas",
            skills: ["Github", "Docker", "Vite", "Bizagi modeler", "Cypress"],
            icon: "🛠️"
        },

    ];

    return (
        <>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div key={cat.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <div className="text-4xl mb-4">{cat.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;