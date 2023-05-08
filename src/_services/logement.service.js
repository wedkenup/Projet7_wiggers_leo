import ListeLogements from "@/assets/data/logements.json";

let GetAllinfologement = () => {
    return ListeLogements;
}
let GetOneinfologement = (id) => {
    let dataLogement;
    ListeLogements.forEach(logement => {
        if (id == logement.id) {
            dataLogement = logement;
        }
    });
    return dataLogement;
}

export const logementservice = {
    GetAllinfologement,
    GetOneinfologement
}


export default logementservice