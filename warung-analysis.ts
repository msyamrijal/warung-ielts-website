import ZAI from 'z-ai-web-dev-sdk';

async function analyzeWarungIELTS() {
  try {
    const zai = await ZAI.create();
    
    // Search for information about Warung IELTS
    const searchResult = await zai.functions.invoke("web_search", {
      query: "Warung IELTS Kampung Inggris Pare programs courses facilities",
      num: 5
    });
    
    console.log('Warung IELTS Search Results:', JSON.stringify(searchResult, null, 2));
    
    // Try to get more specific information
    const detailedSearch = await zai.functions.invoke("web_search", {
      query: "Warung IELTS Pare Kediri harga program biaya camp",
      num: 5
    });
    
    console.log('Detailed Search Results:', JSON.stringify(detailedSearch, null, 2));
    
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

analyzeWarungIELTS();