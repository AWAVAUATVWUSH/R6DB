export function load_atk_op_cards(ATKRSLIST){
    console.log("Hello")
    let atkrPageElement = document.getElementById("pageID1");
    let atkrPageContent = "";
    let iMax = ATKRSLIST.length;

    for(let i = 0; i<iMax; i++){
        atkrPageContent += gen_inner_html(ATKRSLIST, i, "attacker");
    }
    atkrPageElement.innerHTML = atkrPageContent
}

export function load_def_op_cards(DFNDRSLIST){
    console.log("Hello")
    let atkrPageElement = document.getElementById("pageID2");
    let atkrPageContent = "";
    let iMax = DFNDRSLIST.length;

    for(let i = 0; i<iMax; i++){
        atkrPageContent += gen_inner_html(DFNDRSLIST, i, "defender");
    }
    atkrPageElement.innerHTML = atkrPageContent
}



function gen_inner_html(inlist, i, side){
    return `
        <a href="op_${inlist[i].name}.html" class="card-${side}">
            <img class="operator-portrait" src="media/ops/portrait_${inlist[i].name}.png" alt="nothing" style="width: ${inlist[i].width}px; top: ${inlist[i].top}px; left: ${inlist[i].left}px;">
            <img class="operator-icon" src="media/ops/icon_${inlist[i].name}.png" alt="nothing">
            <p>${inlist[i].name.toUpperCase()}</p>
        </a>`
}