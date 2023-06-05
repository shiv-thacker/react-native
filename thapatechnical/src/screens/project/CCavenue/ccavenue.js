// Import the required crypto module from a third-party library
import CryptoJS from 'crypto-js';

export const encrypt = function (plainText, workingKey) {
  const key = CryptoJS.MD5(workingKey).toString();
  const iv = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {iv}).toString();
  return encrypted;
};

export const decrypt = function (encText, workingKey) {
  const key = CryptoJS.MD5(workingKey).toString();
  const iv = CryptoJS.enc.Hex.parse('000102030405060708090a0b0c0d0e0f');
  const decrypted = CryptoJS.AES.decrypt(encText, key, {iv}).toString(
    CryptoJS.enc.Utf8,
  );
  return decrypted;
};
