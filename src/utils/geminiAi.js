import { GEMINI_API } from "./constant";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//export default model;
// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());
export const generateContent = async (prompt) => {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
};
