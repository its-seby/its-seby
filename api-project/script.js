async function get_random_fact(){
    let promise = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    let fact = await promise.json();
    return fact;
}
async function get_today_fact(){
    let promise = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today');
    let fact = await promise.json();
    return fact;
}

async function updatefact(e){
    let fact = await get_random_fact();
    funfact.innerHTML = fact.text;
    src.innerHTML = `Source: ${fact.source_url}`;
}
async function update2(e){
    let fact = await get_today_fact();
    funfact.innerHTML = fact.text;
    src.innerHTML = `Source: ${fact.source_url}`;
}

function main(){
    gomb.addEventListener('click', updatefact);
    masik_gomb.addEventListener('click', update2);
}

main()