import { Token } from "../../domain/models/tokens";
import { getFirstToken } from "../../infrastructure/services/mercadolibreAuth";

export const redirectController = async (req, res) => {
  const { code } = req.query;
  console.log(code);

  const first_token = await getFirstToken({ code });

  const token = new Token(first_token);

  await token.save();

  res.json({ message: "Auth complete" });
};
