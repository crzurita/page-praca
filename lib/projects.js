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

const getProjectList = () => {
  const fullPath = path.join(process.cwd(), 'projectlist/list.json');
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
}

const getMoreProjects = () => {
  const fullPath = path.join(process.cwd(), 'more-projects/list.json');
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
}

export {
  getAllProjectsIds,
  getProjectById,
  getProjectList,
  getMoreProjects
}