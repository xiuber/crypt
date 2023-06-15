const crypto = require("crypto");

// 要加密的数据
const data = "Hello, World!";
// 要使用的密钥
const key = "0123456789abcdef";

// 加密数据
function encryptData(data, key) {
  const cipher = crypto.createCipheriv("aes-128-cbc", key, Buffer.alloc(16));
  let encryptedData = cipher.update(data, "utf8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}

// 解密数据
function decryptData(encryptedData, key) {
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, Buffer.alloc(16));
  let decryptedData = decipher.update(encryptedData, "hex", "utf8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

// 加密数据
const encryptedData = encryptData(data, key);
console.log("Encrypted Data:", encryptedData);

// 解密数据
const decryptedData = decryptData(encryptedData, key);
console.log("Decrypted Data:", decryptedData);
