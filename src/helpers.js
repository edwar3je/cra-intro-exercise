function choice(items){
    let randInd = Math.floor(Math.random());
    return items[randInd];
}

function remove(items, item){
    const index = items.indexOf(item);
    if(index !== -1){
        return items.splice(index, 1);
    }
    return undefined;
}

export { choice, remove };