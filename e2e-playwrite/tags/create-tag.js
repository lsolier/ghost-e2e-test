//Importar Playwright
const playwright = require('playwright');
const url = 'http://localhost:2368/ghost/#/signin';
var screenshot_number = 0;
const SCREENSHOT_FOLDER = './screenshots/create-tag/';

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
    await page.type('input[placeholder="Email Address"]', 'l.solier@uniandes.edu.co');
    await page.type('input[placeholder="Password"]', 'Lui$$olier15');
    await page.click('text="Sign in"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    console.log('🚩 Inicio session con exito');

    console.log("🚩 Seleccionando opcion Tags");
    await page.waitForSelector('text="Tags"');
    await page.click('text="Tags"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Seleccionando opcion para crear nuevo tag");
    await page.waitForSelector('"New tag"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    await page.click('"New tag"');

    console.log("🚩 Ingresando datos basicos");
    await page.waitForSelector('"Save"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    await page.type('"Name"', `Tag playwright nro: ${await getRandomInt(1, 100)}`);
    await page.type('"Slug"', "slug playwright.");
    await page.type('"Description"', "Description playwright.");
    await page.type('"Meta Title"', "Meta Title playwright.");
    await page.type('"Meta Description"', "Meta Description playwright.");
    await page.click('"Save"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Validando tag creado");
    await page.click('a[href="#/tags/"]');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
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