//Importar Playwright
const config = require('../playwright-config.json');
const playwright = require('playwright');

const url = config.baseUrl;
const user= config.user;
const pass= config.pass;

const FISRT_ELEMENT = 0;
var screenshot_number = 0;
const SCREENSHOT_FOLDER = './screenshots/update-post/';

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

    console.log("🚩 Seleccionando opcion Posts");
    await page.waitForSelector('text="Posts"');
    await page.click('text="Posts"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Seleccionando Post a editar");
    await page.waitForSelector('a[class="permalink gh-list-data gh-post-list-featured ember-view"]');
    let posts = await page.$$('a[class="permalink gh-list-data gh-post-list-featured ember-view"]');
    await posts[FISRT_ELEMENT].click();

    console.log("🚩 Actualizando titulo y descripcion");
    await page.type('textarea[placeholder="Post Title"]', `Mi primer Post editado desde playwright nro: ${await getRandomInt(1, 100)}`);
    await page.type('div[data-placeholder="Begin writing your post..."][contenteditable]', "Mi descripcion editada con playwright.");
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Publicando post actualizado");
    await page.click('div[role=button]');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});
    await page.waitForSelector('"Publish"');
    await page.click('"Publish"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Validando post editado");
    await page.waitForSelector('a[href="#/posts/"]');
    await page.click('a[href="#/posts/"]');
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