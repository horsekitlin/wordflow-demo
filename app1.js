import co from 'co';
import * as FBFactory from './fbFactory';

co(function* (){
    const people = yield {
        tomas : FBFactory.getPerson('468187710027156'),
        codingbear : FBFactory.getPerson('codingbear')
    };
    console.log(people);
}).catch((err) => {
    console.log(err);
});
