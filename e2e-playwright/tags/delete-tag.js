//Importar Playwright
const config = require('../playwright-config.json');
const playwright = require('playwright');

const url = config.baseUrl;
const user= config.user;
const pass= config.pass;

const FISRT_ELEMENT = 1;
var screenshot_number = 0;
const SCREENSHOT_FOLDER = './screenshots/delete-tag/';

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

    console.log("🚩 Seleccionando Tag a eliminar");
    await page.waitForSelector('a[class="gh-list-data gh-tag-list-title ember-view"]');
    let tags = await page.$$('a[class="gh-list-data gh-tag-list-title ember-view"]');
    await tags[FISRT_ELEMENT].click();

    console.log("🚩 Eliminando tag");
    await page.waitForSelector('"Delete tag"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    await page.click('"Delete tag"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Confirmando eliminar tag");
    await page.waitForSelector('"Delete"');   
    await page.click('"Delete"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Validando tag eliminado");
    await page.click('a[href="#/tags/"]');
    await page.waitForSelector('text="Tags"');
    await page.click('text="Tags"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función

function getNumber() {
  return `${screenshot_number++}.png`;
}