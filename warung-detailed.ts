import ZAI from 'z-ai-web-dev-sdk';

async function getWarungDetails() {
  try {
    const zai = await ZAI.create();
    
    // Search for Warung IELTS specific information
    const warungInfo = await zai.functions.invoke("web_search", {
      query: "Warung IELTS Pare imitative writing method program biaya",
      num: 5
    });
    
    console.log('Warung IELTS Detailed Info:', JSON.stringify(warungInfo, null, 2));
    
    // Search for their unique teaching approach
    const teachingMethod = await zai.functions.invoke("web_search", {
      query: "Warung IELTS metode imitative writing skills unik",
      num: 5
    });
    
    console.log('Teaching Method Info:', JSON.stringify(teachingMethod, null, 2));
    
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

getWarungDetails();