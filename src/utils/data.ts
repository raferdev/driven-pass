import Cryptr from "cryptr";

function encrypt(text:string) {
    const cryptr = new Cryptr(process.env.CRYPT);
    return cryptr.encrypt(text);
}

function decrypt(encryptText:string) {
    const cryptr = new Cryptr(process.env.CRYPT);
    return cryptr.decrypt(encryptText);
}

const data = {
    encrypt,
    decrypt
}
export default data;