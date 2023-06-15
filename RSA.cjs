const crypto = require("crypto");

// 生成 RSA 密钥对
function generateKeyPair() {
  return crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });
}

// 加密数据
function encryptData(data, publicKey) {
  const buffer = Buffer.from(data, "utf8");
  const encryptedData = crypto.publicEncrypt(publicKey, buffer);
  return encryptedData.toString("base64");
}

// 解密数据
function decryptData(encryptedData, privateKey) {
  const buffer = Buffer.from(encryptedData, "base64");
  const decryptedData = crypto.privateDecrypt(privateKey, buffer);
  return decryptedData.toString("utf8");
}

// 要加密的数据
const data = "Hello, World!";

// 生成 RSA 密钥对
const { publicKey, privateKey } = generateKeyPair();

// 加密数据
const encryptedData = encryptData(data, publicKey);
console.log("Encrypted Data:", encryptedData);

// 解密数据
const decryptedData = decryptData(encryptedData, privateKey);
console.log("Decrypted Data:", decryptedData);
