import { generateAIResponse } from '../services/geminiService';

export const testGeminiAPI = async () => {
  try {
    const response = await generateAIResponse('Say hello in one sentence');
    console.log('✅ Gemini API Working:', response);
    return true;
  } catch (error) {
    console.error('❌ Gemini API Failed:', error.message);
    return false;
  }
};
