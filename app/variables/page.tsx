let nombre: string = "Andres";
let edad: number = 20;
let activo: boolean = true;
let cualquiera: string | number = "148";
let desconocido: unknown = 217;

export default function Variables() {
  return (
    <ul className="space-y-1">
      <li>Nombre: {nombre}</li>
      <li>Edad: {edad}</li>
      <li>Activo: {activo ? "Sí" : "No"}</li>
      <li>Cualquiera: {cualquiera}</li>
      <li>Desconocido: {String(desconocido)}</li>
    </ul>
  );
}