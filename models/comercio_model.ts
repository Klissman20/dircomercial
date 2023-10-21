export interface Comercio {
  actividad: string;
  ano: number | null;
  ciiu1: string;
  ciiu2: string;
  ciiu3: string;
  ciiu4: string;
  direccion: string | null;
  email: string | null;
  fecha_matricula: string | null;
  fecha_renovacion: string | null;
  id?: number;
  matricula: number | null;
  municipio: string | null;
  nit: number | null;
  nombre: string | null;
  razon_social: string | null;
  telefono1: number | null;
  telefono2: number | null;
  telefono3: number | null;
  token: string | null;
}
