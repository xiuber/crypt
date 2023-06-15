const elliptic = require("elliptic");

// 创建椭圆曲线对象
const ec = new elliptic.ec("secp256k1"); // 使用 secp256k1 曲线

// 生成 ECC 密钥对
function generateKeyPair() {
  const keyPair = ec.genKeyPair();
  const publicKey = keyPair.getPublic("hex");
  const privateKey = keyPair.getPrivate("hex");
  console.log(publicKey);
  return { publicKey, privateKey };
}

// 对数据进行签名
function signData(data, privateKey) {
  const key = ec.keyFromPrivate(privateKey, "hex");
  const signature = key.sign(data);
  return {
    r: signature.r.toString("hex"),
    s: signature.s.toString("hex"),
  };
}

// 验证签名
function verifySignature(data, signature, publicKey) {
  const key = ec.keyFromPublic(publicKey, "hex");
  return key.verify(data, { r: signature.r, s: signature.s });
}

// 要签名的数据
const data = "Hello, World!";

// 生成 ECC 密钥对
const { publicKey, privateKey } = generateKeyPair();

// 对数据进行签名
const signature = signData(data, privateKey);
console.log("Signature:", signature);

// 验证签名
const isSignatureValid = verifySignature("data", signature, publicKey);
console.log("Is Signature Valid:", isSignatureValid);
