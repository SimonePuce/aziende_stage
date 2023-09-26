export type Persone = Persona[]

export interface Persona {
  cognome: string
  nome: string
  immagine: string
  comuneDiNascita: string
  provinciaDiNascita: string
  dataDiNascita: string
  capDiResidenza: number
  comuneDiResidenza: string
  provinciaDiResidenza: string
  indirizzoDiResidenza: string
  email: string
  cellulare: string
  codiceFiscale: string
  titoloDiStudio: string
  titoloDiStudioInfo: string
  matricola: number
  emailIts: string
}