import mongoose, { Schema } from "mongoose";

const TokenSchema = new Schema(
  {
    access_token: { type: String, required: true },
    token_type: { type: String, required: true },
    expires_in: { type: Number, required: true },
    user_id: { type: Number, required: true },
    refresh_token: { type: String, required: true },
  },
  { timestamps: true }
);

export const Token = mongoose.model("Token", TokenSchema);