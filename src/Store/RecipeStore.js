import {action, observable, configure} from 'mobx';
import {observer} from 'mobx-react-lite';




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
    recipeName: 'Correct',
    cookingDuration: 30,
  },
  {
    id: 2,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/Abw2dF.png',
    recipeImg: 'https://iili.io/Ab8t3l.th.png',
    recipeName: 'shivam tripathi',
    cookingDuration: 30,
  },
  {
    id: 3,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbwFea.png',
    recipeImg: 'https://iili.io/Ab8Q44.th.png',
    recipeName: 'sfjlsdjflsjf',
    cookingDuration: 30,
  },
  {
    id: 4,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbXlqP.png',
    recipeImg: 'https://iili.io/Ab8sCG.th.png',
    recipeName: 'Corrjlfdsect',
    cookingDuration: 30,
  },
  {
    id: 5,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/Abw35g.png',
    recipeImg: 'https://iili.io/Ab8bvS.th.png',
    recipeName: 'Corrjlfdsect',
    cookingDuration: 30,
  },
  {
    id: 6,
    category: 'Food',
    username: 'Calum Lewis',
    userImg: 'https://iili.io/AbXM7a.png',
    recipeImg: 'https://iili.io/Ab8yu9.th.png',
    recipeName: 'Corrjlfdsect',
    cookingDuration: 30,
  },])





}
configure({
    enforceActions: 'true'
    });
export default new RecipeStore;
