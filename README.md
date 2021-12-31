# POKE API

Web app con Nextjs, que consuma la API de Pokemon https://pokeapi.co/
1. En la pantalla principal se da la bienvenida y se permite al usuario elegir una de las generaciones de Pokemon. 
2. Una vez elegida la generación, se pasa a otra pantalla que te muestra los pokemon iniciales de dicha generación.  Se muestra la información de cada uno de los pokemon y hay un botón para seleccionar uno.
3. Al seleccionar un pokemon se genera un mensaje de confirmación de selección. Al confirmar te debe mostrar un mensaje de "Has elegido a ${Pokemon} para tu aventura".

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Requisitos para ejecutar el proyecto localmente_

```
node js
```
```
npm
```

### Instalación 🔧

_pasos para comenzar_

_primero_

```
git clone https://github.com/br99bry/fondeadora-poke-api.git
```

_luego_

```
cd fondeadora-poke-api
```

_luego_

```
npm install 
```

_finalmente ejecuta servidor de pruebas_

```
npm run dev
```

## Ejecutando las pruebas ⚙️

_Podemos ejecutar las pruebas de Unit Testing en la terminal con_

```
npm run test
```

_Podemos ejecutar las pruebas de end to end en la terminal con_

```
npm run test:dev
```

### Analice las pruebas end-to-end 🔩

_explicación de pruebas_

Los test ejecutados con cypress, prueban que el flujo de la aplicación funcione correctamente para el usuario

Pruebas:
1. Se verifica que que el Home de la App pueda ser cargardo correctamente 
2. Se verifica que el usuario pueda elegir una generación de pokémon, lo que lo llevara a la ruta /generación y finalmente se comprueba que tenga la capacidad de navegar al Home con un botón. Para hacer la asercion del test, sera necesario que en pantalla se vea un elemento representativo del home
3. Se verifica con un test el flujo de uso en el que el usuario elije una generación de pokémon y luego utiliza el botón de elegir alguno de los pokémones mostrados, pero cuando el modal de la app le pregunta si quiere confirmar su elección, oprime cancelar y finalmente elije otro pokémon, del cual confirma la eleción. Para hacer la asercion del test, es necesario que sea visible el parrafo que muestra el mensaje del pokémon elegido. 
4. Se verifica con un test el flujo de uso en el que el usuario elije una generación de pokémon y luego navega de nuevo al Home para elegir otra generación donde finalmente seleccionara y confirmara un pokémon. Para hacer la asercion del test, es necesario que sea visible el parrafo que muestra el mensaje del pokémon elegido y que contenga el texto 'Haz elegido a'. 

### Y las pruebas de Unit Testing ⌨️

_explicación de pruebas_

Los test ejecutados con jest prueban indivdualmente los componentes que integran la aplicación, además aseguran el correcto funcionamiento de los actions y reducers que sirven para mantener el estado de la aplicacion estable.

Pruebas: 
1. Se probo el correcto funcionamiento de todos los reducers porque de esa manera nos aseguramos que nuestro estado sea fiable
2. Se probo el correcto funcionamiento de todos los acciones porque nos asegura que podremos manipular la información del estado
3. Se probo que todos los componentes se renderizaran para que el usuario no tenga problemas con visualziar la UI
4. Se verifico la existencia de texto que deben verse siempre en la UI para corroborar que se esta renderizando la información correcta
5. Apoyado de un mock provider, se aplicaron las puebas necesarias para garantizar que el estado funciona y se actualiza, estas pruebas incluyen comprobar que el estado tiene la generacion seleccionada por el usuario, tambien se teste que el usuario al cambiar de pokemon seleccionado luego de hacer la debida confirmacion en el modal, se podra visualizar el nuevo mensaje con el pokemon que acaba de seleccionar
6. Se prueba que el modal sea visible en el momento adecuado de la aplicacion segun la interaccion del usuario, esta prueba se basa en hacer un test de estilos que posee el modal en el DOM
7. Se prueba que en el Home se haga la petición a los end point correctos de la API en el primer render del componente.

## Construido con 🛠️

* [Next Js](https://nextjs.org/) - Framework web basado en React Js
* [Redux](https://es.redux.js.org/) - Libreria para manejo del estado
* [Styled components](https://styled-components.com/) - Dependencia para estilizar la app
* [Jest](https://jestjs.io/) - Usado para pruebas unitarias
* [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) - Usado para prueba unitarias basadas en React
* [cypress](https://docs.cypress.io/) - Usado para pruebas end to end
* [NPM](https://www.npmjs.com/) - Usado como manejador de dependencias

## Versionado 📌

Se uso [Git](https://git-scm.com/) para el versionado. Para todas las versiones disponibles, ve al link (https://github.com/br99bry/fondeadora-poke-api).

## Autores ✒️

* **Bryan Aranda** - *Todo el desarrollo* - [Bryan Aranda](https://github.com/br99bry)


## Licencia 📄

Este proyecto está bajo la Licencia (ISC)

---
⌨️ Creado por [Bryan Aranda](https://github.com/br99bry) 😊