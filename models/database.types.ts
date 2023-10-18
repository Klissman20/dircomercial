export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comercios: {
        Row: {
          actividad: string | null
          ano: number | null
          ciiu1: string | null
          ciiu2: string | null
          ciiu3: string | null
          ciiu4: string | null
          direccion: string | null
          email: string | null
          fecha_matricula: string | null
          fecha_renovacion: string | null
          id: number
          matricula: number | null
          municipio: string | null
          nit: number | null
          nombre: string | null
          razon_social: string | null
          telefono1: number | null
          telefono2: number | null
          telefono3: number | null
          token: string | null
        }
        Insert: {
          actividad?: string | null
          ano?: number | null
          ciiu1?: string | null
          ciiu2?: string | null
          ciiu3?: string | null
          ciiu4?: string | null
          direccion?: string | null
          email?: string | null
          fecha_matricula?: string | null
          fecha_renovacion?: string | null
          id: number
          matricula?: number | null
          municipio?: string | null
          nit?: number | null
          nombre?: string | null
          razon_social?: string | null
          telefono1?: number | null
          telefono2?: number | null
          telefono3?: number | null
          token?: string | null
        }
        Update: {
          actividad?: string | null
          ano?: number | null
          ciiu1?: string | null
          ciiu2?: string | null
          ciiu3?: string | null
          ciiu4?: string | null
          direccion?: string | null
          email?: string | null
          fecha_matricula?: string | null
          fecha_renovacion?: string | null
          id?: number
          matricula?: number | null
          municipio?: string | null
          nit?: number | null
          nombre?: string | null
          razon_social?: string | null
          telefono1?: number | null
          telefono2?: number | null
          telefono3?: number | null
          token?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
