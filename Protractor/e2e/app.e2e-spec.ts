import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
//Buscar Heroes
  it('Buscar heroes',() =>{
    expect(page.serchHero('Bombasto')).toBe('13');
  });
//Eliminar heroe
  it('Eliminar heroe', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.eliminarHeroe('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  //Editar heroe
    it('Editar heroe', () => {
    page.navigateToHeroes();
    expect(page.editarHeroe('Celeritas','Ironman')).toBe('Ironman');
    });
});


describe('Operaciones de navegacion', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Navegar a un héroe desde la búsqueda', () => {
    page.navigateTo();
    expect(page.getAHero('RubberMan')).toEqual('RubberMan');
  });

  it('Navegar a un héroe desde el dashboard', () => {
    page.navigateTo();
    page.dashboardHero('Bombasto');
    //expect(page.dashboardHero('RubberMan')).toEqual('RubberMan');
  });

  it('Navegar a un héroe desde la lista de héroes', () => {
    page.navigateTo();
    page.navigateToHeroes();
    expect(page.navegarHeroDesdeLista('Magma')).toEqual('Magma');
  });
});
