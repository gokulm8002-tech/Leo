import { GoogleGenAI, Type } from "@google/genai";
import { HookSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateHooks(topic: string): Promise<HookSuggestion[]> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate 5 high-retention opening hooks for a short-form video (TikTok/Shorts) about: "${topic}". 
    For each hook, provide:
    1. A catchy title for the strategy.
    2. The exact script for the first 3 seconds.
    3. A visual layout description (what should be on screen).
    4. The psychological retention strategy used.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            script: { type: Type.STRING },
            visualLayout: { type: Type.STRING },
            retentionStrategy: { type: Type.STRING },
          },
          required: ["title", "script", "visualLayout", "retentionStrategy"],
        },
      },
    },
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return [];
  }
}
