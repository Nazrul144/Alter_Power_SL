export const getContact = async () => {
    const res = await fetch("https://alter-power.co.za/api/contact/whatsapp/")
    if(!res.ok){
        console.log("Failed to fetch what's app number");
    }
    const whatsapp = await res.json();
    return whatsapp;
}