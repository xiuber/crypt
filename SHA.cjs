const crypto = require("crypto");

// 要计算哈希的数据
const data = "Hello, World!";

// 创建哈希对象
const hash = crypto.createHash("sha256");

// 更新哈希对象的数据
hash.update(data);

// 计算哈希值
const hashValue = hash.digest("hex");

console.log("SHA-256 Hash:", hashValue);
