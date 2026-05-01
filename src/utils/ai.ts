import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDyaQ_GPmT8VPJ_jBWanf1DvcZHBdyK3f0");

let lastCall = 0;

export const callAI = async (prompt: string) => {
  const now = Date.now();

  // ⏳ 3 sec delay between calls
  if (now - lastCall < 3000) {
    await new Promise(res => setTimeout(res, 3000));
  }

  lastCall = Date.now();

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    return result.response.text();

  } catch (error: any) {
    console.error(error);

    if (error?.message?.includes("429")) {
      return "⚠️ Limit reached. Wait 1 minute ⏳";
    }

    return "⚠️ AI error, try again";
  }
};