import { useEffect, useState } from 'react';

const discontinuedColor = "#ff0000";
const inDevelopmentColor = "#00ff00";
const maintainedColor = "#ff8800";
const completedColor = "#818181";

async function getLastUpdateDate(author, projectName) {
    const apiUrl = `https://api.github.com/repos/${author}/${projectName}/commits`;

    const res = await fetch(apiUrl);
    const commits = await res.json();

    const lastCommitDate = commits[0].commit.author.date;
    const date = new Date(lastCommitDate).toLocaleDateString();
    return date;
}



function Button({text, link, id, img, date, additionalHtml, state, stateColor}) {
    return (
        <button className="redirect" id={id} onClick={() => window.open(link)}>
            <img src={img ? img : "src/assets/placeholder.jpg"} alt={text} />
            <p>{text}</p>
            {date ? <p className="text-small">{date}</p> : null}
            {additionalHtml? additionalHtml : null}
            {state ? <p className="text-small" style={{color: stateColor}}>{state}</p> : null}
        </button>
    );
}

function Projects() {
    const projectsGithub = [
    {
        name: "Personal website",
        author: "toya-xo",
        projectName: "lucia-website",
        img: "https://avatars.githubusercontent.com/u/49370950?s=400&u=1db5293328508d72d535a01cbc52ba524dff2ae3&v=4",
        date: "",
        state: "In development",
        stateColor: inDevelopmentColor
    },
    {
        name: "InventorySwap",
        author: "toya-xo",
        projectName: "InventorySwap",
        img: "https://media.forgecdn.net/avatars/thumbnails/867/758/64/64/638281453011937215.png",
        date: null,
        state: "Maintained",
        stateColor: maintainedColor
    }
    ];

    // Auto update date from last commit, via github api
    const [ project, setProject] = useState(projectsGithub);
    try{
        useEffect(()=>{
            project.forEach((project, i) => {
                if(!project.author && !project.projectName) return;
                getLastUpdateDate(project.author, project.projectName).then(d => {
                    setProject(p => {
                        const x = [... p]
                        x[i] = {... x[i], date: d};
                        return x;
                    });
                });
            });
        },[]);
    } catch(e){
        console.log(e)
    }
    
    return (
        <div className="container">
            <button className='redirect' onClick={(() => window.location = "/")}>Go back to homepage</button>
            <h1 className="title">Projects</h1>
            <div className="buttons">
                {project.map((project, index) => (
                    <Button
                        id={index}
                        text={project.name}
                        link={`https://github.com/${project.author}/${project.projectName}`}
                        img={project.img}
                        date={project.date}
                        state={project.state}
                        stateColor={project.stateColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;