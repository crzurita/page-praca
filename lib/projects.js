import fs from 'fs'
import path from 'path'

const projectsDirectory = path.join(process.cwd(), 'projects')

const getAllProjectsIds = () => {
  const idList = fs.readdirSync(projectsDirectory);
  return idList.map(name => ({params: {id: name.replace(/\.json$/,'')}}));
}

const getProjectById = (id) => {
  const fullPath = path.join(projectsDirectory, `${id}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}

export {
  getAllProjectsIds,
  getProjectById
}