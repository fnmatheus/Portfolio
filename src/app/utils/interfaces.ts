import React from 'react'

interface IProject {
  name: string,
  image: string,
  codeLink: string,
  link: string,
  tags: string[],
  isOpenSource: boolean,
  id: number
}

interface IProjectCard extends IProject {
  hiddenProject: number,
  handleProject(e: React.MouseEvent): void,
  handleLink(e: React.MouseEvent): void
}

interface IHardSkills {
  name: string,
  url: string
}

interface IHardSkillsList {
  skills: IHardSkills[],
  studies: IHardSkills[],
  certificates: IHardSkills[]
}

export type {
  IProject,
  IHardSkillsList,
  IProjectCard
}
