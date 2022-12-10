export function rand4(){
    let id =`id-${Date.now.toString(36)}`;


    for (let i = 4; i--;){
        id += Math.random().toString(36).replace("0.", "");
    }
    return id;
}


/* V etom faile mi sozdali proizvolniy id */