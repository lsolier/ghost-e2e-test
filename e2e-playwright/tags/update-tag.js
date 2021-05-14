//Importar Playwright
const config = require('../playwright-config.json');
const playwright = require('playwright');

const url = config.baseUrl;
const user= config.user;
const pass= config.pass;

const FISRT_ELEMENT = 0;
var screenshot_number = 0;
const SCREENSHOT_FOLDER = './screenshots/update-tag/';

//Función flecha asíncrona
(async () => {
  //Definir los navegadores en los que se quiere hacer la prueba
  for (const browserType of ['chromium']){
    //Contenido de la prueba
    console.log(browserType+'-------------------------------------------')

    //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
    const browser = await playwright[browserType].launch({ headless: false, slowMo: 30 });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    console.log('🚩 Abriendo login page');
    await page.goto(url);
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log('🚩 Completando datos login');
    await page.type('input[placeholder="Email Address"]', user);
    await page.type('input[placeholder="Password"]', pass);
    await page.click('text="Sign in"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    console.log('🚩 Inicio session con exito');

    console.log("🚩 Seleccionando opcion Tags");
    await page.waitForSelector('text="Tags"');
    await page.click('text="Tags"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Seleccionando Tag a editar");
    await page.waitForSelector('a[class="gh-list-data gh-tag-list-title ember-view"]');
    let tags = await page.$$('a[class="gh-list-data gh-tag-list-title ember-view"]');
    await tags[FISRT_ELEMENT].click();

    console.log("🚩 Actualizando datos basicos");
    await page.waitForSelector('"Save"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    await page.type('"Name"', `Tag editado playwright nro: ${await getRandomInt(1, 100)}`);
    await page.type('"Slug"', "slug editado playwright.");
    await page.type('"Description"', "Description editado playwright.");
    await page.type('"Meta Title"', "Meta Title editado playwright.");
    await page.type('"Meta Description"', "Meta Description editado playwright.");
    await page.click('"Save"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Validando tag editado");
    await page.click('a[href="#/tags/"]');
    await page.waitForSelector('text="Tags"');
    await page.click('text="Tags"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función

async function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function getNumber() {
  return `${screenshot_number++}.png`;
}