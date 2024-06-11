export interface IUser {
  nombre: string;
  edad: number;
  genero: string;
  rol: string;
  activo: boolean;
  aficiones: string[];
}

export interface IUserLogin {
  userName?: string;
  email: string;
  password: string;
}
