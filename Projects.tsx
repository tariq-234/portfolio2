import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data=[
    {
        id:0,
        title:"Simple calculator Project",
        desc:"A basic Html Css and Typescript calculator for perfoming essential arthimetic operation",
        img:"/project_01.jpg",
        tags:["HTML","NODE","CSS","TYPESCRIPT"],
    },
    {
        id:1,
        title:"Number guessing game Project",
        desc:"The Number Guessing Game is an interactive web-based project developed in TypeScript that challenges players to guess a randomly generated number within a specified range.",
        img:"/project-02.jpg",
        tags:["HTML","NODE","CSS","TYPESCRIPT"],
    },
];

function Projects() {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=>(<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
