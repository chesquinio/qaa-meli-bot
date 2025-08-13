import axios from "axios";
import { MELI_APP_ID, MELI_CLIENT_SECRET, MELI_REDIRECT_URL } from "../../shared/config.js";

export const getFirstToken = async ({ code }) => {
    const token_url = "https://api.mercadolibre.com/oauth/token"
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("client_id", MELI_APP_ID);
    urlencoded.append("client_secret", MELI_CLIENT_SECRET);
    urlencoded.append("redirect_uri", MELI_REDIRECT_URL);
    urlencoded.append("code", code);
  
    try {
      const { data } = await axios.post(
        token_url,
        urlencoded,
        {
          headers: {
            accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      if ("error" in data) return;

      return data;
    } catch (error) {
      return;
    }
};