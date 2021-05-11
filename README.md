# Ghost-e2e-test
E2E test for GHOST 3.3.0 using Cypress, Playwright and Kraken tool.

## E2E Playwright

```
npm install playwright
```

## E2E Kraken

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



