import fs from 'fs'
import path from 'path'

const getServicios = () => {
  const fullPath = path.join(process.cwd(), 'servicios/list.json');
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
}

export {
  getServicios
}