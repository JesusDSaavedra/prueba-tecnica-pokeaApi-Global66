# Prueba Técnica con Vue 3 y PokéAPI

## Introducción

Esta prueba técnica demuestra la creación de una aplicación Vue 3 que consume la API de PokéAPI para mostrar una lista de Pokémones, con funcionalidades de búsqueda, favoritos y carga infinita. Se ha priorizado el rendimiento y la experiencia del usuario utilizando librerías como VueUse y VueQuery.

## Tecnologías Utilizadas

- **Vue 3**: Framework progresivo para la construcción de interfaces de usuario.
- **VueUse**: Colección de composables útiles para Vue.js, incluyendo `useVirtualList` y `useInfiniteScroll`.
- **VueQuery**: Librería para gestionar el fetching, caching y actualización de datos asíncronos en Vue.
- **Pinia**: Librería de gestión de estado ligero para Vue.
- **Vue Router**: Enrutador oficial para Vue.js.
- **PokéAPI**: API pública y gratuita para acceder a información sobre Pokémon.

## Funcionalidades

- **Búsqueda de Pokémones**: Permite buscar Pokémones por nombre.
- **Añadir a favoritos**: Permite marcar Pokémones como favoritos.
- **Carga infinita**: Carga más Pokémones a medida que el usuario se desplaza hacia abajo.
- **Caching**: Utiliza VueQuery para almacenar los datos de los Pokémones en caché, evitando solicitudes innecesarias al servidor.
- **Rutas**: Permite navegar entre diferentes secciones de la aplicación (e.g., lista de Pokémones, favoritos).

## Estructura del Proyecto
```
src/
├── assets/  
├── components/  
│ ├── modal/  
│ │ └── FavoriteButton.vue
│ ├── PokemonItem.vue
│ ├── PokemonItemList.vue
│ └── LoaderComponent.vue
├── composables/  
│ ├── usePokemon.ts
│ └── usePokemons.ts
├── interfaces/  
│ ├── index.ts
│ ├── pokemon.response.ts
│ ├── pokemon.ts
│ └── pokemons-list-resp.ts
├── layout/  
│ └── PokemonLayout.vue
├── router/  
│ └── index.ts
├── services/  
│ ├── get-pokemon-by-name.ts
│ └── get-pokemons.ts
├── stores/  
│ └── pokemon.ts
├── styles/  
│ └── global-styles.css
├── utils/  
│ └── localStorage.ts
├── views/  
│ ├── pokemons-all
│ ├── pokemons-favorites
│ ├── HomeView.vue
│ └── PokemonSearchView.vue
├── App.vue  
├── main.ts  
└── ...
```
## Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Instala las dependencias: `pnpm install`
3. Ejecuta el servidor de desarrollo: `pnpm dev`

## Explicación de las Tecnologías Clave

### VueUse

- **`useVirtualList`**: Optimiza el renderizado de listas largas, mejorando el rendimiento.
- **`useInfiniteScroll`**: Implementa la carga infinita de datos de forma sencilla.

### VueQuery

- Gestiona las solicitudes a la API de PokéAPI.
- Implementa el caching para evitar solicitudes redundantes.
- Permite actualizar los datos en caché de forma automática.

### Pinia

- Almacena el estado de la aplicación (e.g., lista de Pokémones favoritos).
- Permite compartir el estado entre componentes.
