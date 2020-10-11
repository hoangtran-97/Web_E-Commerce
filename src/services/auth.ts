import jwt from "jsonwebtoken";

const googleTokenId = (tokenId: string): string => {
    const payload = { tokenId: tokenId };
    const SECRET = process.env.JWT_SECRET || "secret";
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    return token;
};

export default {
    googleTokenId,
};
