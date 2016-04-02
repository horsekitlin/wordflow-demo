import co from 'co';
import * as FBFactory from './fbFactory';

co(function* (){
    const tomas = yield FBFactory.getPerson('468187710027156');
    console.log(tomas);
}).catch((err) => {
    console.log(err);
});
