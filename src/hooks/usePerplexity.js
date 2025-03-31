

const PerplexityOptions = (userQuery) => ({
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_PERPLEXITY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [
        { role: "system", content: "be precise and concise." },
        { 
          role: "user", 
          content: userQuery + " Act as a Movie Recommendation System and suggest some movies for the query and only give me names of 5 movies, comma separated like the example given ahead. Example: Andaz Apna Apna, Dil Chahta Hai.Keep the names exclusive dont add any text"
        }
      ],
      max_tokens: 123,
      temperature: 0.2,
      top_p: 0.9,
      return_images: false,
      return_related_questions: false,
      top_k: 0,
      stream: false,
      presence_penalty: 0,
      frequency_penalty: 1,
      web_search_options: { search_context_size: "high" }
    })      
  });

  export default PerplexityOptions