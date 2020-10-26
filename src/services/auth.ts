import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../util/secrets";

const googleTokenId = (tokenId: string): string => {
    const payload = { tokenId: tokenId };
    const SECRET = JWT_SECRET;
    const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
    return token;
};

export default {
    googleTokenId,
};
