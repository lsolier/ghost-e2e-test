# Ghost-e2e-test
E2E test for GHOST 3.3.0 using Cypress, Playwright and Kraken tool.

## E2E Cypress (Tiene pinta, pero suceden cosas por momento inexplicables)

Por la mala experiencia que tuve, no recomiendo usar Cypres

## E2E Playwright (Awesome)

Instalar playwright

```
npm install playwright
```


Iniciar la aplicacion ghost y definir su usuario y clave en cada archivo test creado:

- create-post.js
- delete-post.js
- update-post.js

- create-tag.js
- delete-tag.js
- update-tag.js

Los credenciales debe esteblecerlos en las linea que tenga la siguiente estructura.

```
const user= '<ESTABALECER USER>';
const pass= '<ESTABALECER PASS>';
```

Ejecutar

Ubicarse en el path del archivo a ejecutar y tipear `node <TEST-FILE>`, por ejemplo:

```
node create-user.js
```



## E2E Kraken (Acoplarse a Ruby creo que no es buena idea)

Para instalar gema denominada Blunder, ejecutar:

```
gem install bundler 
```

Crea un directorio donde ubicara su proyecto y alli clone el repositorio de Kraken para obtener el proyecto:

```
git clone https://github.com/TheSoftwareDesignLab/KrakenMobile
```

En el directorio creado, crear un subdirectorio donde se almacenaran los test y ejecute:

```bash
`bundle init`
```

Esto creara un Gemfile, asegurese que el contenido sea el siguiente:

```bash
# Contents of Gemfile
source "https://rubygems.org"
gem 'rubyzip', '1.2.1' # Required version for running calabash-android in Windows
gem 'kraken-mobile', path: '../KrakenMobile'
```
Para instalar la estructura de carpetas ejecute el comando:

```bash
bundle install
```

De esta forma, ya puede hacer uso de `Kraken-Mobile` siempre y cuando lo ejecute desde bundler. Para esto, cada comando de `kraken-mobile` debe ser antecedido por `bundle exec`.



