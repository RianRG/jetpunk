import { Browser, Builder, By } from 'selenium-webdriver'

const countries: string[] = [
  //north america
  'canada', 'eua', 'mexico', 'guatemala', 'belize', 'honduras', 'salvador', 'nicaragua', 'costa rica', 'panama',
  'cuba', 'jamaica', 'bahamas', 'haiti', 'republica dominicana', 'dominica', 'granada', 'trinidad', 'santa lucia',
  'sao cristovao', 'sao vicente', 'antigua', 'barbados',

  //south america
  'colombia', 'venezuela', 'guiana', 'suriname', 'peru', 'equador', 'chile', 'argentina', 'bolivia', 'uruguai',
  'paraguai', 'brasil',

  //africa
  'madagascar', 'seychelles', 'comores', 'mauricio', 'cabo verde', 'sao tome', 'africa do sul', 'lesoto', 'essuatini',
  'zimbabue', 'namibia', 'angola', 'botswana', 'zambia', 'malawi', 'mocambique', 'congo', 'burundi', 'ruanda', 'uganda', 'tanzania',
  'quenia', 'somalia', 'etiopia', 'eritreia', 'djibuti', 'egito', 'sudao', 'sudao do sul', 'libia', 'tunisia', 'argelia',
  'marrocos', 'mauritania', 'mali', 'burkina faso', 'guine', 'guine bissau', 'senegal', 'gambia', 'serra leoa', 'liberia',
  'costa do marfim', 'gana', 'togo', 'benim', 'niger', 'nigeria', 'chade', 'camaroes', 'gabao', 'guine equatorial',
  'africa central'
];



(async () =>{
  const driver = new Builder().forBrowser(Browser.FIREFOX).build();

  await driver.get('https://www.jetpunk.com/quizzes/paises-do-mundo')
  await driver.findElement(By.className('green')).click();

  countries.forEach(async (country) =>{
    await driver.findElement(By.name('stopitchrome')).sendKeys(country)
  })
})();