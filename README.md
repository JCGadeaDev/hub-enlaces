# Hub de enlaces

Página personal que centraliza portafolios, blogs y contacto. Construida con Astro en
modo estático: el HTML se genera en build y al navegador no se envía framework alguno.

**En producción:** _(pendiente de despliegue)_

## Por qué no una plataforma de link-in-bio

Servicios como Linktree resuelven el problema en dos minutos, pero el dominio y la
entidad son suyos. Este proyecto existe para conservar tres cosas:

- **La autoridad del dominio.** Los clics y menciones que llegan desde redes entran a un
  dominio propio en lugar de a uno ajeno.
- **La identidad estructurada.** Un `Person` schema con `sameAs` declara a los buscadores
  que todos los perfiles enlazados corresponden a la misma entidad.
- **Los metadatos al compartir.** Open Graph propio: título, descripción e imagen
  controlados, no la plantilla genérica de la plataforma.

## Stack

| Área | Tecnología |
|---|---|
| Framework | Astro 7 (salida estática) |
| Lenguaje | TypeScript en modo estricto |
| Estilos | CSS con variables y ámbito por componente, sin framework |
| Iconos | astro-icon + Iconify (sprite SVG generado en build) |
| Tipografía | IBM Plex (Sans, Sans Condensed, Mono) autoalojada vía Fontsource |
| Hosting | Cloudflare Pages |

## Decisiones técnicas

**Unión discriminada para los enlaces.** El tipo `Enlace` liga el estado a la presencia
de URL: `estado: 'activo'` exige `url`, y `estado: 'construccion'` la prohíbe. Publicar
una tarjeta clicable sin destino es imposible en tiempo de compilación, no una convención
que haya que recordar.

**Enlaces en construcción como `<div>`, no como `<a>` deshabilitado.** Sin `href` no hay
navegación por tabulador, ni anuncio como enlace en lectores de pantalla, ni rastreo por
parte de los buscadores.

**Enlace estirado.** La tarjeta es un contenedor; el enlace envuelve solo el título y
cubre toda la superficie mediante un pseudo-elemento absoluto. Así el botón de compartir
convive dentro sin anidar elementos interactivos, que es HTML inválido.

**Compartir con la API nativa.** `navigator.share` abre el menú del sistema en móvil y en
Safari; en el resto de navegadores de escritorio recurre al portapapeles. Es el único
JavaScript del proyecto: menos de 1 KB en total.

**Rendimiento.** Fuentes autoalojadas (sin origen externo bloqueante ni transferencia de
datos a terceros bajo RGPD), imágenes en AVIF con densidades 1x y 2x generadas en build,
CSS incrustado en el HTML, y `fetchpriority="high"` en el elemento LCP.

**Accesibilidad.** Secciones etiquetadas con `aria-labelledby`, foco visible en todos los
elementos interactivos, y animaciones desactivadas bajo `prefers-reduced-motion`.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve la build localmente
```

## Estructura

```
src/
  assets/foto-perfil.png      retrato (lo optimiza Astro)
  components/TarjetaEnlace    tarjeta con estado activo/construcción
  data/enlaces.ts             todo el contenido editable
  layouts/Base.astro          head, SEO, JSON-LD y tokens de diseño
  pages/index.astro           la página
public/
  og.png                      vista previa al compartir
  favicon.svg
  robots.txt
```

Todo el contenido vive en `src/data/enlaces.ts`. Añadir o editar un enlace no requiere
tocar ningún componente.

## Publicar un enlace que estaba en construcción

En la entrada correspondiente de `enlaces.ts`:

```ts
{
  titulo: 'Blog de tecnología y datos',
  host:  // el dominio real
  url:  // añadir
  estado: 'activo', // cambiar
  // ...
}
```

La tarjeta pasa sola de "En construcción" a activa y clicable.

## Licencia

MIT para el código. El contenido, las imágenes y la identidad visual no se incluyen en
esa licencia.