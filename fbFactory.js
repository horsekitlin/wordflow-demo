import FB from 'fb';
FB.setAccessToken('519786858193213|1-LOO2M66ONJJDV7rhE1S223l2g');

export function getPerson(id){
        return new Promise((resolve) => {
            FB.api(id, function (res) {
                resolve(res);
            });
        });
    }
