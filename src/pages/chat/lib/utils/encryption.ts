import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'ly-son-bot-secure-key-2024';
const IV_LENGTH = 16;

function generateIV(): string {
  return CryptoJS.lib.WordArray.random(IV_LENGTH).toString();
}

export function encryptData(data: any): string {
  try {
    const jsonString = JSON.stringify(data);
    const iv = generateIV();

    const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY, {
      iv: CryptoJS.enc.Hex.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Kết hợp IV và dữ liệu đã mã hóa
    const result = iv + ':' + encrypted.toString();
    return result;
  } catch (error) {
    console.error('Encryption error:', error);
    return '';
  }
}

export function decryptData(encryptedData: string): any {
  try {
    const [iv, encrypted] = encryptedData.split(':');

    const decrypted = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY, {
      iv: CryptoJS.enc.Hex.parse(iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    // Chuyển đổi dữ liệu đã giải mã thành chuỗi và parse JSON
    const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedString);
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
}
