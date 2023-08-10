export interface IcreateSession {
    userId: string,
    userAgent: string
}

export interface IfindSessions {
    userId: string,
    valid: boolean
}

export interface IupdateSession {
    id: string,
    valid: boolean 
}