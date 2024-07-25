import { Browser, Builder, By } from 'selenium-webdriver'

const countries: string[] = [
  //north america
  'canada', 'eua', 'mexico', 'guatemala', 'belize', 'honduras', 'salvador', 'nicaragua', 'costa rica', 'panama',
  'cuba', 'jamaica', 'bahamas', 'haiti', 'republica dominicana', 'dominica', 'granada', 'trinidad', 'santa lucia',
  'sao cristovao', 'sao vicente', 'antigua', 'barbados',

  //south america
  'colombia', 'venezuela', 'guiana', 'suriname', 'peru', 'equador', 'chile', 'argentina', 'bolivia', 'uruguai',
  'paraguai', 'brasil',

  //europe
  'dinamarca', 'islandia','irlanda', 'reino unido', 'portugal', 'espanha', 'franca', 'italia', 'andorra', 'san marino',
  'vaticano', 'monaco', 'malta','liechtenstein', 'suica', 'austria', 'eslovenia', 'belgica', 'holanda', 'alemanha', 'luxemburgo',
  'albania', 'montenegro', 'kosovo', 'macedonia', 'grecia', 'servia', 'hungria', 'bosnia', 'croacia', 'bulgaria', 'romenia', 'moldavia', 'ucrania', 'bielorusia', 
  'eslovaquia', 'checa', 'polonia', 'lituania', 'letonia', 'estonia', 'finlandia', 'suecia', 'noruega', 'russia',

  //africa
  'madagascar', 'seychelles', 'comores', 'mauricio', 'cabo verde', 'sao tome', 'africa do sul', 'lesoto', 'essuatini',
  'zimbabue', 'namibia', 'angola', 'botswana', 'zambia', 'malawi', 'mocambique', 'congo', 'burundi', 'ruanda', 'uganda', 'tanzania',
  'quenia', 'somalia', 'etiopia', 'eritreia', 'djibuti', 'egito', 'sudao', 'sudao do sul', 'libia', 'tunisia', 'argelia',
  'marrocos', 'mauritania', 'mali', 'burkina faso', 'guine', 'guine bissau', 'senegal', 'gambia', 'serra leoa', 'liberia',
  'costa do marfim', 'gana', 'togo', 'benim', 'niger', 'nigeria', 'chade', 'camaroes', 'gabao', 'guine equatorial',
  'africa central',

  //asia

  'cazaquistao', 'mongolia', 'quirguistao', 'tajiquistao', 'uzbequistao', 'turcomenistao', 'paquistao', 'afeganistao',
  'ira', 'iraque', 'israel', 'jordania', 'siria', 'libano', 'arabia saudita', 'kuweit', 'bahrein', 'catar', 'oma',
  'eau', 'iemen', 'georgia', 'armenia', 'azerbaijao', 'turquia', 'chipre','india', 'nepal', 'butao', 'bangladesh', 'myanmar', 'tailandia',
  'camboja', 'vietna', 'laos', 'indonesia', 'malasia', 'singapura', 'timor leste', 'brunei', 'japao', 'coreia do norte',
  'coreia do sul', 'china', 'taiwan', 'sri lanka', 'filipinas', 'maldivas',

  //oceania

  'australia', 'nova guine', 'nova zelandia', 'palau', 'nauru', 'tuvalu', 'vanuatu', 'samoa', 'salomao', 'fiji',
  'marshall', 'kiribati', 'micronesia', 'tonga'
];



(async () =>{
  const driver = new Builder().forBrowser(Browser.FIREFOX).build();

  await driver.get('https://www.jetpunk.com/quizzes/paises-do-mundo')
  await driver.findElement(By.className('green')).click();

  countries.forEach(async (country) =>{
    await driver.findElement(By.name('stopitchrome')).sendKeys(country)
  })
})();