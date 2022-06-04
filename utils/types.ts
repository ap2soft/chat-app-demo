export enum Direction {
  In,
  Out,
}

export interface IsChat {
  id: string
  user: IsUser
  messages: IsMessage[]
}

export interface IsUser {
  id: string
  firstName: string
  lastName: string
  picture: string
  [index: string]: string
}

interface IsLoginObject {
  uuid: string
}

interface IsNameObject {
  first: string
  last: string
}

interface IsPictureObject {
  large: string
}

export interface IsUserData {
  login: IsLoginObject
  name: IsNameObject
  picture: IsPictureObject
}

export interface IsMessage {
  body: string
  direction: Direction
  date: Date
}

export interface IsMessageData {
  _id: string
  punchline: string
  setup: string
}
