/**
 * Store of app
 * @author Shivam tripathi
 * @description recipe of the application.
 * @flow
 */

import { observable, configure} from 'mobx';


class RecipeStore {

count = observable.box(2)
 recipedata=observable.box(0)
 enableImg=observable.box(false)

 recipeDetails= observable.array([ {
    id: 1,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/Abw35g.png',
    recipeImg: 'https://iili.io/Ab8Da2.th.png',
    recipeName: 'Omelette',
    cookingDuration: 10,
  },
  {
    id: 2,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/Abw2dF.png',
    recipeImg: 'https://iili.io/Ab8t3l.th.png',
    recipeName: 'Doughnut',
    cookingDuration: 30,
  },
  {
    id: 3,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbwFea.png',
    recipeImg: 'https://iili.io/Ab8Q44.th.png',
    recipeName: 'Grill Meat',
    cookingDuration: 60,
  },
  {
    id: 4,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbXlqP.png',
    recipeImg: 'https://iili.io/Ab8sCG.th.png',
    recipeName: 'Cake',
    cookingDuration: 40,
  },
  {
    id: 5,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/Abw35g.png',
    recipeImg: 'https://iili.io/Ab8bvS.th.png',
    recipeName: 'Pan Cake',
    cookingDuration: 30,
  },
  {
    id: 6,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbXM7a.png',
    recipeImg: 'https://iili.io/Ab8yu9.th.png',
    recipeName: 'Pizza',
    cookingDuration: 30,
  },]);





}
configure({
    enforceActions: 'true'
    });
export default new RecipeStore;
