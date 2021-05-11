//Importar Playwright
const playwright = require('playwright');
const FISRT_ELEMENT = 0;
var screenshot_number = 0;
const SCREENSHOT_FOLDER = './screenshots/delete-post/';

const url = 'http://localhost:2368/ghost/#/signin';

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

    console.log("🚩 Seleccionando opcion Posts");
    await page.waitForSelector('text="Posts"');
    await page.click('text="Posts"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Seleccionando Post a eliminar");
    await page.waitForSelector('a[class="permalink gh-list-data gh-post-list-featured ember-view"]');
    let posts = await page.$$('a[class="permalink gh-list-data gh-post-list-featured ember-view"]');
    await posts[FISRT_ELEMENT].click();

    console.log("🚩 Ingresando a opcion eliminar");
    await page.waitForSelector('button[title="Settings"]');
    await page.click('button[title="Settings"]');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Eliminando post");
    await page.waitForSelector('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    await page.click('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Confirmando eliminar post");
    await page.waitForSelector('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');   
    await page.click('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    console.log("🚩 Validando post eliminado");
    await page.waitForSelector('text="Posts"');
    await page.click('text="Posts"');
    await page.screenshot({path: `${SCREENSHOT_FOLDER}${getNumber()}`});

    //Finalizar la prueba
    await browser.close();
  }
  return;
})();//Llamado propio de la función

function getNumber() {
  return `${screenshot_number++}.png`;
}