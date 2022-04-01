let myemployees=[
    {
        "resName":"Annamalai",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["Java","JavaScript","Python"]
    },
    {
        "resName":"sathish",
        "resPay":200000,
        "resArea":"Salem",
        "resSkills":["JavaScript","Python"]
    },
    {
        "resName":"karthik",
        "resPay":10000,
        "resArea":"Chennai",
        "resSkills":["Java"]
    },
    {
        "resName":"venkat",
        "resPay":50000,
        "resArea":"Banglore",
        "resSkills":["Java","Python"]
    }
]

export const create=(obj)=>{
    myemployees.push(obj)
}

export const list=()=>{
    return myemployees
}

 export const read=(index)=>{
     return myemployees[index]
 }