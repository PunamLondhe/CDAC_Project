import { myAxios } from "./APIhelper";

export const Clinicregister = (info) => {

    return myAxios.post('/clinics',info)
    .then((response) => response.data);
}