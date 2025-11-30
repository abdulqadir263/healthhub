import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateAIResponse = async (prompt, context = '') => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash-exp'
    });

    const fullPrompt = context ? `${context}\n\n${prompt}` : prompt;
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI Error:', error);
    throw new Error('Failed to generate AI response');
  }
};

export const generateAIResponseWithImage = async (prompt, imageFile) => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash-exp'
    });

    const imageData = await fileToGenerativePart(imageFile);
    const result = await model.generateContent([prompt, imageData]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI Error:', error);
    throw new Error('Failed to generate AI response with image');
  }
};

// Helper function to convert file to generative part
async function fileToGenerativePart(file) {
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  return {
    inlineData: {
      data: base64,
      mimeType: file.type
    }
  };
}

export const chatWithAI = async (messages) => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash-exp'
    });

    const chat = model.startChat({
      history: messages.slice(0, -1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }))
    });

    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI Chat Error:', error);
    throw new Error('Failed to chat with AI');
  }
};
