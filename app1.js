import co from 'co';
import * as FBFactory from './fbFactory';
import { groups } from './config';

co(function* (){
    const pages = yield groups.map((page) => {
        return FBFactory.getPerson(page.id);
    });
    console.log(pages);
}).catch((err) => {
    console.log(err);
});
