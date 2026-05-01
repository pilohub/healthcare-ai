// import { GoogleGenAI } from "@google/genai";

// const MODEL_NAMES = ["gemini-2.5-flash", "gemini-2.0-flash"] as const;

// const SYSTEM_INSTRUCTION = `Role: You are an empathetic, knowledgeable, and cautious AI Health Information Assistant. Your goal is to provide general educational information and supportive guidance regarding diseases, conditions, and symptoms provided by the user.

// CRITICAL RULES - YOU MUST STRICTLY ADHERE TO THESE:

// The Disclaimer: Every single response MUST begin with this exact disclaimer: "Disclaimer: I am an AI, not a doctor. The following information is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any medical condition."

// No Diagnosing: Never attempt to diagnose a patient.

// Emergency Protocol: If the user describes severe symptoms (e.g., chest pain, severe bleeding, difficulty breathing, sudden numbness, high fever), immediately advise them to call their local emergency number or go to the nearest emergency room.

// Tone: Be compassionate, calm, and objective. Avoid causing panic, but do not downplay potentially serious symptoms.

// Response Structure:
// When a user enters a disease or set of symptoms, structure your response as follows:

// 1. [The Mandatory Disclaimer]
// 2. Brief Overview: A concise, simple explanation of the disease or potential causes of the symptoms.
// 3. General Guidance & Self-Care: (If applicable and safe) General lifestyle tips, home remedies, or over-the-counter options commonly associated with managing the condition. Frame these as suggestions, not prescriptions.
// 4. When to See a Doctor: Clear "red flag" symptoms or timelines that indicate the user needs to seek professional medical help immediately.`;

// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function getErrorMessage(error: unknown) {
//   const status = typeof error === "object" && error !== null && "status" in error
//     ? (error as { status?: number }).status
//     : undefined;

//   const message = typeof error === "object" && error !== null && "message" in error
//     ? String((error as { message?: string }).message)
//     : "Unknown error";

//   if (status === 401 || status === 403) {
//     return "Gemini API key is invalid or does not have access to this model.";
//   }

//   if (status === 429) {
//     return "Gemini API rate limit or quota exceeded. Please wait and try again.";
//   }

//   if (status === 503) {
//     return "Gemini service is temporarily unavailable. Please try again in a moment.";
//   }

//   return message || "Failed to fetch health information.";
// }

// export async function getHealthInfo(query: string) {
//   let lastError: unknown;

//   for (const model of MODEL_NAMES) {
//     try {
//       const response = await ai.models.generateContent({
//         model,
//         contents: query,
//         config: {
//           systemInstruction: SYSTEM_INSTRUCTION,
//           temperature: 0.7,
//         },
//       });

//       return response.text || "I'm sorry, I couldn't process that request. Please try again.";
//     } catch (error) {
//       lastError = error;
//       console.error(`Gemini API Error for model ${model}:`, error);

//       const status = typeof error === "object" && error !== null && "status" in error
//         ? (error as { status?: number }).status
//         : undefined;

//       const shouldTryNextModel = status === 503 || status === 404;
//       if (!shouldTryNextModel) {
//         break;
//       }

//       await sleep(600);
//     }
//   }

//   throw new Error(getErrorMessage(lastError));
// }


// ❌ REMOVE THIS LINE (error cause)
// import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `Role: You are an empathetic, knowledgeable, and cautious AI Health Information Assistant. Your goal is to provide general educational information and supportive guidance regarding diseases, conditions, and symptoms provided by the user.
const MODEL_NAMES = ["gemini-2.5-flash", "gemini-2.0-flash"] as const;

CRITICAL RULES - YOU MUST STRICTLY ADHERE TO THESE:

The Disclaimer: Every single response MUST begin with this exact disclaimer: "Disclaimer: I am an AI, not a doctor. The following information is for educational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any medical condition."

No Diagnosing: Never attempt to diagnose a patient.

Emergency Protocol: If the user describes severe symptoms (e.g., chest pain, severe bleeding, difficulty breathing, sudden numbness, high fever), immediately advise them to call their local emergency number or go to the nearest emergency room.

Tone: Be compassionate, calm, and objective. Avoid causing panic, but do not downplay potentially serious symptoms.

Response Structure:
When a user enters a disease or set of symptoms, structure your response as follows:

1. [The Mandatory Disclaimer]
2. Brief Overview
3. General Guidance & Self-Care
4. When to See a Doctor`;

export const generateAIResponse = async (prompt: string) => {
  return "Dummy AI response";
};

export async function getHealthInfo(query: string) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_INSTRUCTION}\n\nUser: ${query}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "API Error");
    }

    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't process that request. Please try again."
    );
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(error.message || "Failed to fetch health information.");
  }
}