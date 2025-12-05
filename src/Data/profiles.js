    // src/Data/profiles.js

import img1 from "../Assets/profile_pic/1.webp";
import img2 from "../Assets/profile_pic/2.webp";
import img3 from "../Assets/profile_pic/3.webp";
import img4 from "../Assets/profile_pic/4.webp";
import img5 from "../Assets/profile_pic/5.webp";
import img6 from "../Assets/profile_pic/6.webp";
import img7 from "../Assets/profile_pic/7.jpg";
import img8 from "../Assets/profile_pic/8.jpg";
import img9 from "../Assets/profile_pic/9.jpg";
import img10 from "../Assets/profile_pic/10.jpg";
import img11 from "../Assets/profile_pic/11.jpg";
import img12 from "../Assets/profile_pic/12.jpg";
import img13 from "../Assets/profile_pic/13.jpg";
import img14 from "../Assets/profile_pic/14.jpg";
import img15 from "../Assets/profile_pic/15.webp";
import img16 from "../Assets/profile_pic/16.webp";
import img17 from "../Assets/profile_pic/17.jpg";
import img18 from "../Assets/profile_pic/18.webp";
import img19 from "../Assets/profile_pic/19.webp";
import img20 from "../Assets/profile_pic/20.webp";

const profiles = [
  {
    id: 1,
    gender: "female",
    image: img1,
    name: "Sophia Johnson",
    age: 27,
    city: "New York, NY",
    quick_facts: { height: "5'5\"", job: "Marketing Specialist", education: "Bachelor’s in Marketing", lifestyle: "Active, outgoing", work_style: "Remote" },
    intentions: { looking_for: "Long-term relationship", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a friendly and energetic person who loves connecting with new people. On weekends, I enjoy exploring local cafes, attending live music events, and taking long walks in the park. I value honesty, communication, and shared laughter. I’m looking for someone kind, confident, and fun-loving who appreciates both adventure and quiet moments.",
    prompts: [
      { question: "My favorite hobby", answer: "Photography" },
      { question: "Dream vacation", answer: "Road trip along the coast" },
      { question: "My love language", answer: "Quality time" }
    ],
    interests: ["Travel", "Music", "Fitness", "Food"],
    extras: { languages: ["English"], mbti: "ESFJ", social_style: "Friendly", diet: "Vegetarian", pets: "Dog" }
  },
  {
    id: 2,
    gender: "female",
    image: img2,
    name: "Emma Williams",
    age: 30,
    city: "Los Angeles, CA",
    quick_facts: { height: "5'6\"", job: "UX Designer", education: "Bachelor’s in Design", lifestyle: "Creative, thoughtful", work_style: "Hybrid" },
    intentions: { looking_for: "A genuine connection", kids_preference: "Someday", religion: "None" },
    about_me: "I’m a creative soul who enjoys designing experiences and exploring art galleries. I love trying out new recipes, traveling to new cities, and having deep conversations over coffee. I value authenticity, kindness, and curiosity. Looking for someone who shares my love for creativity, humor, and meaningful experiences.",
    prompts: [
      { question: "Something I’m passionate about", answer: "Art and design" },
      { question: "Best weekend", answer: "Hiking and exploring local markets" },
      { question: "My quirky habit", answer: "Collecting postcards" }
    ],
    interests: ["Art", "Travel", "Cooking", "Yoga"],
    extras: { languages: ["English"], mbti: "INFP", social_style: "Calm", diet: "Vegan", pets: "Cat" }
  },
  {
    id: 3,
    gender: "female",
    image: img3,
    name: "Ava Brown",
    age: 25,
    city: "Chicago, IL",
    quick_facts: { height: "5'4\"", job: "Content Writer", education: "Bachelor’s in Communications", lifestyle: "Friendly, curious", work_style: "Remote" },
    intentions: { looking_for: "Fun but serious relationship", kids_preference: "Not now", religion: "None" },
    about_me: "I’m a cheerful person who enjoys writing, reading, and exploring new places. Weekends are for brunch with friends, visiting museums, or relaxing with a good book. I value honesty, humor, and empathy. I’m looking for someone who is thoughtful, open-minded, and shares my curiosity for life and learning.",
    prompts: [
      { question: "Favorite book", answer: "Pride and Prejudice" },
      { question: "Perfect day", answer: "Beach day with friends" },
      { question: "Hidden talent", answer: "Writing poems" }
    ],
    interests: ["Writing", "Travel", "Reading", "Coffee"],
    extras: { languages: ["English"], mbti: "ENFP", social_style: "Friendly", diet: "Normal", pets: "None" }
  },
  {
    id: 4,
    gender: "female",
    image: img4,
    name: "Mia Davis",
    age: 29,
    city: "San Francisco, CA",
    quick_facts: { height: "5'5\"", job: "Software Developer", education: "Bachelor’s in Computer Science", lifestyle: "Focused, tech-savvy", work_style: "Hybrid" },
    intentions: { looking_for: "Long-term relationship", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a detail-oriented software developer who loves building apps that make life easier. Outside work, I enjoy hiking, trying new cuisines, and attending tech meetups. I value honesty, humor, and curiosity in people. I’m looking for someone kind, intelligent, and adventurous who enjoys both city life and nature.",
    prompts: [
      { question: "Favorite hobby", answer: "Coding" },
      { question: "Dream travel spot", answer: "Japan" },
      { question: "What I enjoy most", answer: "Learning new skills" }
    ],
    interests: ["Tech", "Hiking", "Cooking", "Reading"],
    extras: { languages: ["English"], mbti: "INTJ", social_style: "Reserved", diet: "Normal", pets: "Cat" }
  },
  {
    id: 5,
    gender: "female",
    image: img5,
    name: "Isabella Martinez",
    age: 28,
    city: "Miami, FL",
    quick_facts: { height: "5'6\"", job: "Event Planner", education: "Bachelor’s in Hospitality", lifestyle: "Energetic, organized", work_style: "In-person" },
    intentions: { looking_for: "Fun and meaningful relationship", kids_preference: "Someday", religion: "None" },
    about_me: "I’m an outgoing event planner who loves organizing memorable experiences for friends and family. I enjoy traveling, dancing, and exploring new cultures. I value honesty, fun, and shared laughter. Looking for someone confident, kind, and adventurous.",
    prompts: [
      { question: "Best weekend", answer: "Beach party with friends" },
      { question: "Hidden talent", answer: "Making desserts" },
      { question: "Life motto", answer: "Live fully" }
    ],
    interests: ["Travel", "Dance", "Food", "Socializing"],
    extras: { languages: ["English", "Spanish"], mbti: "ESFP", social_style: "Outgoing", diet: "Normal", pets: "Dog" }
  },
  {
    id: 6,
    gender: "female",
    image: img6,
    name: "Charlotte Wilson",
    age: 26,
    city: "Seattle, WA",
    quick_facts: { height: "5'5\"", job: "Graphic Designer", education: "Bachelor’s in Design", lifestyle: "Creative, calm", work_style: "Remote" },
    intentions: { looking_for: "Serious relationship", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a calm and creative designer who loves art, photography, and coffee shops. I enjoy exploring nature, reading novels, and attending local art events. I value honesty, kindness, and open-mindedness. Looking for a partner who shares my love for creativity and meaningful conversations.",
    prompts: [
      { question: "Favorite activity", answer: "Sketching" },
      { question: "Dream weekend", answer: "Camping in the mountains" },
      { question: "My love language", answer: "Words of Affirmation" }
    ],
    interests: ["Art", "Travel", "Reading", "Photography"],
    extras: { languages: ["English"], mbti: "ISFP", social_style: "Calm", diet: "Vegetarian", pets: "Cat" }
  },
  {
    id: 7,
    gender: "female",
    image: img7,
    name: "Olivia Hayes",
    age: 28,
    city: "San Francisco, CA",
    quick_facts: { height: "5'4\"", job: "Product Manager", education: "MBA", lifestyle: "Organized, ambitious", work_style: "Hybrid" },
    intentions: { looking_for: "Long-term relationship", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a driven and thoughtful person who loves building meaningful products and meaningful relationships. Outside of work, you’ll find me exploring new restaurants, traveling to coastal towns, or planning my next weekend getaway. I enjoy good communication, emotional maturity, and people who know what they want.",
    prompts: [
      { question: "My greatest strength", answer: "Staying calm under pressure." },
      { question: "Best travel memory", answer: "Sunset in Santorini." },
      { question: "My love language", answer: "Acts of Service." }
    ],
    interests: ["Travel", "Tech", "Journaling", "Cooking"],
    extras: { languages: ["English"], mbti: "INTJ", social_style: "Balanced", diet: "Normal", pets: "None" }
  },
  {
    id: 8,
    gender: "female",
    image: img8,
    name: "Chloe Bennett",
    age: 26,
    city: "Phoenix, AZ",
    quick_facts: { height: "5'3\"", job: "Graphic Designer", education: "Bachelor’s in Arts", lifestyle: "Creative, calm", work_style: "Remote" },
    intentions: { looking_for: "A sweet, genuine relationship", kids_preference: "Someday", religion: "None" },
    about_me: "I’m a soft-hearted creative who loves drawing, plants, and exploring aesthetic cafés. My ideal day involves sketching in the sun, listening to indie playlists, and discovering new art styles. I value gentleness, communication, and partners who lead with emotional intelligence.",
    prompts: [
      { question: "My comfort show", answer: "Gilmore Girls." },
      { question: "The way to my heart", answer: "Warm hugs and honesty." },
      { question: "I'm nerdy about", answer: "Color theory." }
    ],
    interests: ["Drawing", "Plants", "Indie music", "Coffee"],
    extras: { languages: ["English"], mbti: "ISFP", social_style: "Quiet", diet: "Vegetarian", pets: "Cat" }
  },
  {
    id: 9,
    gender: "female",
    image: img9,
    name: "Natalie Foster",
    age: 33,
    city: "Boston, MA",
    quick_facts: { height: "5'7\"", job: "Therapist", education: "Master’s in Psychology", lifestyle: "Empathetic, mindful", work_style: "In-person" },
    intentions: { looking_for: "A stable, meaningful connection", kids_preference: "Yes", religion: "Christian" },
    about_me: "I’m someone who truly values emotional health, communication, and meaningful relationships. I spend my days helping others heal and my evenings journaling, meditating, or catching up with close friends. I’m looking for a partner with emotional depth, kindness, and integrity.",
    prompts: [
      { question: "Something I care about deeply", answer: "Mental health awareness." },
      { question: "What I bring to a relationship", answer: "Emotional stability and loyalty." },
      { question: "My ideal night in", answer: "Tea and heartfelt conversations." }
    ],
    interests: ["Meditation", "Journaling", "Nature", "Art"],
    extras: { languages: ["English"], mbti: "ENFJ", social_style: "Warm", diet: "Normal", pets: "Dog" }
  },
  {
    id: 10,
    gender: "female",
    image: img10,
    name: "Zoe Ramirez",
    age: 25,
    city: "Miami, FL",
    quick_facts: { height: "5'4\"", job: "Event Coordinator", education: "Bachelor’s in Hospitality", lifestyle: "Energetic, social", work_style: "In-person" },
    intentions: { looking_for: "Something fun that can grow", kids_preference: "Not now", religion: "Catholic" },
    about_me: "I’m a vibrant, outgoing person who loves parties, celebrations, and creating unforgettable experiences for people. I live for good vibes, good music, and spontaneous getaways. I’m looking for someone charismatic, fun, and confident.",
    prompts: [
      { question: "Song that describes me", answer: "Anything upbeat and Latin." },
      { question: "Perfect Friday night", answer: "Dancing with friends." },
      { question: "Life motto", answer: "Celebrate everything." }
    ],
    interests: ["Dancing", "Beaches", "Travel", "Parties"],
    extras: { languages: ["English", "Spanish"], mbti: "ESFP", social_style: "Very outgoing", diet: "Normal", pets: "None" }
  },
  {
    id: 11,
    gender: "male",
    image: img11,
    name: "Ethan Cooper",
    age: 30,
    city: "San Diego, CA",
    quick_facts: { height: "5'11\"", job: "Software Engineer", education: "Bachelor’s in Computer Science", lifestyle: "Active, health-conscious", work_style: "Remote" },
    intentions: { looking_for: "A genuine relationship", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a laid-back guy who loves technology, fitness, and the outdoors. My ideal weekend includes surfing, working on side projects, and grabbing coffee at local cafés. I value honesty, ambition, and people who genuinely care about growth.",
    prompts: [
      { question: "My perfect date", answer: "Sunset by the beach." },
      { question: "Something I’m proud of", answer: "Launching my own app." },
      { question: "What I value most", answer: "Trust and consistency." }
    ],
    interests: ["Surfing", "Coding", "Fitness", "Travel"],
    extras: { languages: ["English"], mbti: "ISTP", social_style: "Chill", diet: "Normal", pets: "Dog" }
  },
  {
    id: 12,
    gender: "male",
    image: img12,
    name: "Noah Sullivan",
    age: 28,
    city: "New York, NY",
    quick_facts: { height: "6'0\"", job: "Financial Analyst", education: "MBA", lifestyle: "Focused, organized", work_style: "In-office" },
    intentions: { looking_for: "Long-term relationship", kids_preference: "Yes", religion: "Jewish" },
    about_me: "I’m an ambitious and dedicated person who values purpose, family, and stability. I love exploring the city, trying new foods, and staying active. I’m looking for someone who is confident, kind, and emotionally mature.",
    prompts: [
      { question: "Most attractive quality in a partner", answer: "Emotional stability." },
      { question: "Perfect afternoon", answer: "Coffee and deep conversation." },
      { question: "My friends describe me as", answer: "Loyal and driven." }
    ],
    interests: ["Finance", "Running", "Food", "Travel"],
    extras: { languages: ["English"], mbti: "ENTJ", social_style: "Confident", diet: "Normal", pets: "None" }
  },
  {
    id: 13,
    gender: "male",
    image: img13,
    name: "Liam Turner",
    age: 27,
    city: "Chicago, IL",
    quick_facts: { height: "5'10\"", job: "Photographer", education: "Bachelor’s in Media", lifestyle: "Creative, spontaneous", work_style: "Freelance" },
    intentions: { looking_for: "A fun but real connection", kids_preference: "Someday", religion: "None" },
    about_me: "I’m an adventurous and creative photographer who loves capturing real moments and exploring new cities. I enjoy road trips, small coffee shops, and late-night conversations.",
    prompts: [
      { question: "What makes life exciting", answer: "Unplanned adventures." },
      { question: "My current obsession", answer: "Street photography." },
      { question: "A fun fact", answer: "I’ve visited 22 states." }
    ],
    interests: ["Photography", "Coffee", "Travel", "Art"],
    extras: { languages: ["English"], mbti: "ENFP", social_style: "Energetic", diet: "Normal", pets: "None" }
  },
  {
    id: 14,
    gender: "male",
    image: img14,
    name: "Mason Brooks",
    age: 32,
    city: "Seattle, WA",
    quick_facts: { height: "6'1\"", job: "Cybersecurity Specialist", education: "Master’s in Information Security", lifestyle: "Calm, analytical", work_style: "Remote" },
    intentions: { looking_for: "A stable, supportive partnership", kids_preference: "Maybe", religion: "None" },
    about_me: "I’m a quiet but thoughtful person who values trust, loyalty, and emotional intelligence. I enjoy peaceful evenings, long walks, and learning about new technology. I’m looking for someone patient, kind, and communicative—someone who finds comfort in stable, healthy relationships and enjoys deep conversations.",
    prompts: [
      { question: "My best trait", answer: "Patience." },
      { question: "Favorite hobby", answer: "Building custom PCs." },
      { question: "Ideal weekend", answer: "Nature and a good book." }
    ],
    interests: ["Tech", "Gaming", "Nature", "Reading"],
    extras: { languages: ["English"], mbti: "ISTJ", social_style: "Reserved", diet: "Normal", pets: "Cat" }
  },
  {
    id: 15,
    gender: "male",
    image: img15,
    name: "Lucas Hayes",
    age: 35,
    city: "Austin, TX",
    quick_facts: { height: "6'0\"", job: "Entrepreneur", education: "Bachelor’s in Business", lifestyle: "Driven, adventurous", work_style: "Flexible" },
    intentions: { looking_for: "A meaningful connection", kids_preference: "Yes", religion: "Christian" },
    about_me: "I’m ambitious, confident, and always working on something new. I love travel, innovation, and good company. I appreciate people who are honest, supportive, and emotionally mature. I’m looking for a partner who wants to build something strong, stable, and long-term together.",
    prompts: [
      { question: "My top priority", answer: "Connection and growth." },
      { question: "Something I love", answer: "New experiences." },
      { question: "A skill I'm proud of", answer: "Leadership." }
    ],
    interests: ["Business", "Travel", "Fitness", "Music"],
    extras: { languages: ["English"], mbti: "ENTP", social_style: "Confident", diet: "Normal", pets: "None" }
  },
  {
    id: 16,
    gender: "male",
    image: img16,
    name: "Aiden Mitchell",
    age: 29,
    city: "Portland, OR",
    quick_facts: { height: "5'9\"", job: "Chef", education: "Culinary School", lifestyle: "Creative, warm", work_style: "In-person" },
    intentions: { looking_for: "Relationship", kids_preference: "Someday", religion: "None" },
    about_me: "I’m a passionate chef who loves experimenting with flavors, hosting dinners, and making people feel cared for. I value warmth, affection, and lively conversations. I’m looking for someone open-hearted, supportive, and ready to build something real.",
    prompts: [
      { question: "My love language", answer: "Cooking for you." },
      { question: "Favorite feeling", answer: "Bringing people together." },
      { question: "Something I enjoy", answer: "Trying new cuisines." }
    ],
    interests: ["Cooking", "Food tours", "Travel", "Wine"],
    extras: { languages: ["English"], mbti: "ESFJ", social_style: "Warm", diet: "Normal", pets: "Dog" }
  },
  {
    id: 17,
    gender: "male",
    image: img17,
    name: "Jackson Reed",
    age: 26,
    city: "Denver, CO",
    quick_facts: { height: "5'11\"", job: "Fitness Trainer", education: "Bachelor’s in Sports Science", lifestyle: "Active, disciplined", work_style: "In-person" },
    intentions: { looking_for: "A serious relationship", kids_preference: "Yes", religion: "Christian" },
    about_me: "I’m a high-energy, positive person who enjoys a healthy lifestyle and helping others reach their potential. I’m looking for a genuine connection with someone supportive, grounded, and kind-hearted.",
    prompts: [
      { question: "Perfect morning", answer: "Workout + smoothie." },
      { question: "What keeps me motivated", answer: "Helping others improve." },
      { question: "Ideal partner", answer: "Caring and confident." }
    ],
    interests: ["Fitness", "Hiking", "Meal prep", "Music"],
    extras: { languages: ["English"], mbti: "ESTP", social_style: "Energetic", diet: "High-protein", pets: "None" }
  },
  {
    id: 18,
    gender: "male",
    image: img18,
    name: "Caleb Foster",
    age: 31,
    city: "Phoenix, AZ",
    quick_facts: { height: "6'2\"", job: "Civil Engineer", education: "Bachelor’s in Engineering", lifestyle: "Practical, calm", work_style: "In-person" },
    intentions: { looking_for: "Marriage-minded", kids_preference: "Yes", religion: "Christian" },
    about_me: "I’m a practical, steady person who values stability, honesty, and strong foundations—in both work and relationships. I enjoy building things, improving myself, and spending time with family. Looking for someone kind, supportive, and emotionally mature.",
    prompts: [
      { question: "What I cherish", answer: "Family values." },
      { question: "Weekend hobby", answer: "DIY projects." },
      { question: "A must in my partner", answer: "Loyalty." }
    ],
    interests: ["Engineering", "DIY", "Road trips", "BBQ"],
    extras: { languages: ["English"], mbti: "ISTP", social_style: "Calm", diet: "Normal", pets: "None" }
  },
  {
    id: 19,
    gender: "male",
    image: img19,
    name: "Wyatt Bennett",
    age: 33,
    city: "Nashville, TN",
    quick_facts: { height: "5'10\"", job: "Musician", education: "Bachelor’s in Music", lifestyle: "Creative, expressive", work_style: "Flexible" },
    intentions: { looking_for: "A deep emotional connection", kids_preference: "Maybe", religion: "Spiritual" },
    about_me: "I’m a passionate musician who loves writing, performing, and connecting through art. I value openness, emotional honesty, and soulful conversation. Looking for someone romantic, kind-hearted, and expressive.",
    prompts: [
      { question: "Favorite feeling", answer: "Creating music late at night." },
      { question: "A fun fact", answer: "I can play five instruments." },
      { question: "Ideal partner vibe", answer: "Soft-hearted and genuine." }
    ],
    interests: ["Music", "Art", "Coffee shops", "Travel"],
    extras: { languages: ["English"], mbti: "INFP", social_style: "Creative", diet: "Vegetarian", pets: "Cat" }
  },
  {
    id: 20,
    gender: "male",
    image: img20,
    name: "Logan Carter",
    age: 28,
    city: "Los Angeles, CA",
    quick_facts: { height: "6'1\"", job: "Actor", education: "Bachelor’s in Performing Arts", lifestyle: "Energetic, confident", work_style: "Flexible" },
    intentions: { looking_for: "A real connection beyond the spotlight", kids_preference: "Not now", religion: "None" },
    about_me: "I’m an energetic, expressive person who loves storytelling, film, and creativity. I enjoy connecting with people who are grounded, caring, and emotionally aware. Looking for someone who values authenticity and isn’t afraid of ambition or passion.",
    prompts: [
      { question: "Favorite hobby", answer: "Learning accents." },
      { question: "What I appreciate", answer: "Honesty and warmth." },
      { question: "A dream of mine", answer: "Directing a film someday." }
    ],
    interests: ["Acting", "Travel", "Gym", "Movies"],
    extras: { languages: ["English"], mbti: "ENFJ", social_style: "Charismatic", diet: "Normal", pets: "None" }
  }
];

export default profiles;
