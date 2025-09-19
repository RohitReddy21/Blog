export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export const categories = [
  "Nutrition",
  "Fitness", 
  "Mental Health",
  "Preventive Care",
  "Chronic Conditions",
  "Women's Health",
  "Men's Health",
  "Children's Health"
];

export const blogPosts: BlogPost[] = [
  {
    id: "heart-healthy-diet-guide",
    title: "The Complete Guide to Heart-Healthy Eating",
    excerpt: "Discover evidence-based nutrition strategies to support cardiovascular health and reduce your risk of heart disease.",
    content: `
# The Complete Guide to Heart-Healthy Eating

Heart disease remains the leading cause of death worldwide, but the good news is that many cases are preventable through lifestyle changes, particularly dietary modifications. This comprehensive guide will walk you through everything you need to know about eating for a healthy heart.

## Understanding Heart-Healthy Nutrition

A heart-healthy diet focuses on foods that reduce inflammation, lower cholesterol levels, and maintain healthy blood pressure. The key is incorporating nutrient-dense foods while limiting those that contribute to cardiovascular risk.

### The Mediterranean Diet Foundation

The Mediterranean diet has been extensively researched and consistently shows benefits for heart health. This eating pattern emphasizes:

- **Olive Oil**: Rich in monounsaturated fats and antioxidants
- **Fish and Seafood**: Excellent sources of omega-3 fatty acids
- **Fruits and Vegetables**: Packed with vitamins, minerals, and fiber
- **Whole Grains**: Provide sustained energy and important nutrients
- **Nuts and Seeds**: Healthy fats and protein sources

## Foods to Embrace

### Omega-3 Rich Fish
Aim for at least two servings per week of fatty fish like salmon, mackerel, sardines, and tuna. These provide EPA and DHA, essential fatty acids that reduce inflammation and support heart rhythm.

### Colorful Fruits and Vegetables
Fill half your plate with a variety of colorful produce. Berries, leafy greens, tomatoes, and citrus fruits are particularly beneficial due to their antioxidant content.

### Whole Grains
Replace refined grains with whole grain options like oats, quinoa, brown rice, and whole wheat bread. These foods help maintain stable blood sugar levels and provide fiber for cholesterol management.

## Foods to Limit

### Saturated and Trans Fats
Limit red meat, full-fat dairy products, and avoid trans fats found in processed foods and some margarines.

### Added Sugars and Refined Carbs
Minimize sugary drinks, candies, and refined grain products that can contribute to inflammation and weight gain.

### Excess Sodium
Keep sodium intake below 2,300mg daily, or ideally under 1,500mg if you have high blood pressure.

## Practical Implementation Tips

1. **Meal Planning**: Plan your meals around vegetables and whole grains
2. **Cooking Methods**: Choose grilling, baking, steaming, or sautéing over frying
3. **Portion Control**: Use smaller plates and listen to hunger cues
4. **Hydration**: Replace sugary drinks with water, herbal teas, or sparkling water with lemon

## Sample Day of Heart-Healthy Eating

**Breakfast**: Oatmeal topped with berries and chopped walnuts
**Lunch**: Grilled salmon salad with mixed greens and olive oil dressing
**Snack**: Apple slices with almond butter
**Dinner**: Quinoa bowl with roasted vegetables and chickpeas

Remember, making gradual changes is more sustainable than dramatic dietary overhauls. Start by incorporating one or two heart-healthy foods into your daily routine and build from there.
    `,
    category: "Nutrition",
    author: "Dr. Sarah Martinez",
    date: "2024-01-15",
    readTime: "8 min",
    image: "/images/heart-healthy-food.jpg",
    featured: true,
    tags: ["heart health", "nutrition", "Mediterranean diet", "prevention"]
  },
  {
    id: "mental-health-workplace",
    title: "Managing Mental Health in the Modern Workplace",
    excerpt: "Practical strategies for maintaining psychological wellness while navigating work-related stress and challenges.",
    content: `
# Managing Mental Health in the Modern Workplace

The modern workplace presents unique challenges to our mental well-being. From remote work isolation to increased productivity demands, it's crucial to develop strategies that protect and nurture our psychological health.

## Recognizing Workplace Stress

Common signs of work-related mental health challenges include:
- Persistent fatigue and exhaustion
- Difficulty concentrating
- Increased irritability or anxiety
- Sleep disturbances
- Physical symptoms like headaches or muscle tension

## Building Resilience Strategies

### Setting Boundaries
Establish clear work-life boundaries by:
- Defining specific work hours
- Creating a dedicated workspace at home
- Learning to say no to excessive demands
- Taking regular breaks throughout the day

### Stress Management Techniques
Incorporate these evidence-based practices:
- **Mindfulness meditation**: Even 5-10 minutes daily can reduce stress
- **Deep breathing exercises**: Practice 4-7-8 breathing during challenging moments
- **Progressive muscle relaxation**: Release physical tension systematically
- **Time management**: Use techniques like the Pomodoro method

### Building Support Networks
Don't underestimate the power of connection:
- Maintain relationships with colleagues
- Seek mentorship opportunities
- Consider joining professional support groups
- Communicate openly with supervisors about workload concerns

## When to Seek Professional Help

Consider consulting a mental health professional if you experience:
- Persistent feelings of sadness or hopelessness
- Anxiety that interferes with daily activities
- Substance use as a coping mechanism
- Thoughts of self-harm
- Significant changes in sleep or appetite

Remember, seeking help is a sign of strength, not weakness. Many employers offer Employee Assistance Programs (EAPs) that provide free, confidential counseling services.
    `,
    category: "Mental Health",
    author: "Dr. Michael Chen",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/images/workplace-wellness.jpg",
    featured: false,
    tags: ["mental health", "workplace", "stress management", "wellness"]
  },
  {
    id: "diabetes-prevention-guide",
    title: "Type 2 Diabetes Prevention: Your Complete Action Plan",
    excerpt: "Learn the evidence-based lifestyle strategies that can significantly reduce your risk of developing type 2 diabetes.",
    content: `
# Type 2 Diabetes Prevention: Your Complete Action Plan

Type 2 diabetes affects millions worldwide, but research shows that up to 90% of cases are preventable through lifestyle modifications. This comprehensive guide provides you with actionable strategies to reduce your risk significantly.

## Understanding Your Risk

Several factors contribute to type 2 diabetes risk:
- **Family history**: Genetics play a role, but lifestyle can override genetic predisposition
- **Weight**: Excess abdominal fat increases insulin resistance
- **Age**: Risk increases after 45, but lifestyle factors matter more
- **Physical inactivity**: Sedentary behavior contributes to insulin resistance
- **Diet quality**: Poor dietary choices accelerate disease development

## The Prevention Foundation: Lifestyle Modifications

### Weight Management
Even modest weight loss (5-10% of body weight) can significantly reduce diabetes risk:
- Focus on sustainable calorie reduction
- Choose nutrient-dense, filling foods
- Monitor portion sizes
- Track progress with measurements, not just weight

### Physical Activity Protocol
The "magic number" is 150 minutes of moderate activity weekly:
- **Aerobic exercise**: Brisk walking, swimming, cycling
- **Resistance training**: 2-3 sessions per week
- **Flexibility work**: Yoga or stretching routines
- **Daily movement**: Take stairs, park farther, walk during breaks

### Optimal Nutrition Strategy
Focus on foods that stabilize blood sugar:

**Include More:**
- High-fiber vegetables and fruits
- Lean proteins (fish, poultry, legumes)
- Whole grains over refined carbohydrates
- Healthy fats (nuts, olive oil, avocados)

**Limit:**
- Sugary beverages and desserts
- Processed and packaged foods
- Refined grains and white bread
- Excessive saturated fats

## Advanced Prevention Strategies

### Intermittent Fasting
Research suggests that controlled fasting periods can improve insulin sensitivity:
- 16:8 method (16 hours fasting, 8 hours eating)
- 5:2 approach (normal eating 5 days, restricted calories 2 days)
- Always consult healthcare providers before starting

### Stress Management
Chronic stress elevates cortisol, which can increase blood sugar:
- Practice mindfulness meditation
- Engage in regular physical activity
- Maintain social connections
- Prioritize quality sleep (7-9 hours nightly)

### Regular Health Monitoring
Stay proactive with health screenings:
- Annual fasting glucose tests
- HbA1c testing if at risk
- Blood pressure monitoring
- Cholesterol panel assessment

## Creating Your Personal Action Plan

1. **Assess your current risk factors**
2. **Set specific, measurable goals**
3. **Start with one change at a time**
4. **Track your progress regularly**
5. **Build a support system**
6. **Work with healthcare professionals**

Remember, prevention is always easier and more effective than treatment. The habits you build today will determine your health outcomes for decades to come.
    `,
    category: "Preventive Care",
    author: "Dr. Lisa Thompson",
    date: "2024-01-08",
    readTime: "10 min",
    image: "/images/diabetes-prevention.jpg",
    featured: false,
    tags: ["diabetes", "prevention", "lifestyle", "nutrition", "exercise"]
  }
];

// Add more blog posts to reach 15 total
export const additionalBlogPosts: BlogPost[] = [
  {
    id: "womens-hormonal-health",
    title: "Understanding Women's Hormonal Health Through Life Stages",
    excerpt: "A comprehensive guide to hormonal changes from puberty through menopause and how to support optimal health.",
    content: `
# Understanding Women's Hormonal Health Through Life Stages

Women's hormonal health is a complex journey that evolves throughout life. From puberty to menopause and beyond, understanding these changes can empower women to take control of their health and wellbeing.

## The Hormonal Symphony

Hormones act as chemical messengers in the body, orchestrating everything from mood and energy levels to reproductive health and bone density. The key players in women's health include:

### Estrogen and Progesterone
These primary reproductive hormones fluctuate throughout the menstrual cycle and dramatically change during major life transitions.

### Thyroid Hormones
Critical for metabolism, energy, and overall wellbeing, thyroid function often shifts during hormonal transitions.

### Cortisol
The stress hormone that can significantly impact other hormonal systems when chronically elevated.

## Life Stage Considerations

### Reproductive Years (20s-40s)
- **Focus**: Cycle regularity, fertility, and PMS management
- **Common Issues**: PCOS, endometriosis, fertility challenges
- **Support Strategies**: Balanced nutrition, stress management, regular exercise

### Perimenopause (40s-50s)
- **Focus**: Managing transitional symptoms and irregular cycles
- **Common Issues**: Hot flashes, mood changes, sleep disturbances
- **Support Strategies**: Hormone-supporting foods, strength training, mindfulness

### Menopause and Beyond (50s+)
- **Focus**: Bone health, cardiovascular protection, cognitive function
- **Common Issues**: Osteoporosis risk, heart disease, memory concerns
- **Support Strategies**: Calcium and vitamin D, regular screening, social connection

## Natural Support Strategies

### Nutrition for Hormonal Balance
- **Healthy Fats**: Omega-3s from fish, nuts, and seeds
- **Fiber-Rich Foods**: Support estrogen metabolism
- **Phytoestrogens**: Soy, flaxseeds, legumes for natural hormone support
- **Antioxidants**: Colorful fruits and vegetables to reduce inflammation

### Lifestyle Modifications
- **Regular Exercise**: Both cardio and strength training
- **Stress Management**: Yoga, meditation, adequate sleep
- **Toxin Reduction**: Choose organic when possible, filter water
- **Quality Sleep**: 7-9 hours nightly in a cool, dark room

## When to Seek Professional Help

Consult healthcare providers for:
- Irregular or absent periods
- Severe PMS or PMDD symptoms
- Unexplained weight changes
- Persistent fatigue or mood changes
- Concerning menopausal symptoms

Remember, every woman's hormonal journey is unique. Working with healthcare providers who understand hormonal health can make a significant difference in your quality of life.
    `,
    category: "Women's Health",
    author: "Dr. Amanda Rodriguez",
    date: "2024-01-12",
    readTime: "9 min",
    image: "/images/womens-health.jpg",
    featured: false,
    tags: ["hormones", "womens health", "menopause", "wellness"]
  },
  {
    id: "sleep-optimization-guide",
    title: "The Science of Sleep: Optimization Strategies for Better Health",
    excerpt: "Evidence-based techniques to improve sleep quality and understand the critical role of rest in overall health.",
    content: `
# The Science of Sleep: Optimization Strategies for Better Health

Sleep is not a luxury—it's a biological necessity that impacts every aspect of your health. From immune function to cognitive performance, quality sleep is the foundation of optimal wellbeing.

## Understanding Sleep Architecture

Sleep occurs in cycles, each lasting approximately 90 minutes and consisting of different stages:

### Non-REM Sleep Stages
- **Stage 1**: Light sleep, transition from wakefulness
- **Stage 2**: Deeper sleep, body temperature drops
- **Stage 3**: Deep sleep, crucial for physical restoration

### REM Sleep
- **Brain Activity**: High, similar to wakefulness
- **Function**: Memory consolidation, emotional processing
- **Dreams**: Most vivid dreams occur during REM

## The Health Impact of Quality Sleep

### Physical Health Benefits
- **Immune System**: Enhanced pathogen resistance
- **Cardiovascular Health**: Lower blood pressure and heart disease risk
- **Weight Management**: Balanced hunger hormones
- **Cellular Repair**: Growth hormone release during deep sleep

### Mental Health Benefits
- **Cognitive Function**: Improved memory, focus, and decision-making
- **Emotional Regulation**: Better stress management and mood stability
- **Mental Health**: Reduced risk of depression and anxiety

## Sleep Optimization Strategies

### Sleep Hygiene Fundamentals
1. **Consistent Schedule**: Same bedtime and wake time daily
2. **Sleep Environment**: Cool (65-68°F), dark, and quiet
3. **Comfortable Bedding**: Quality mattress and pillows
4. **Electronic Curfew**: No screens 1 hour before bed

### Advanced Techniques
- **Temperature Regulation**: Warm bath before bed, cool sleeping environment
- **Light Management**: Bright light in morning, dim lighting at night
- **Nutrition Timing**: Last meal 3 hours before bedtime
- **Relaxation Practices**: Progressive muscle relaxation, deep breathing

### Natural Sleep Aids
- **Magnesium**: 200-400mg before bed
- **Melatonin**: 0.5-3mg, 30 minutes before desired sleep time
- **Herbal Teas**: Chamomile, valerian root, passionflower
- **Essential Oils**: Lavender for aromatherapy

## Common Sleep Disruptors

### Lifestyle Factors
- Caffeine consumption after 2 PM
- Alcohol before bedtime
- Late-night exercise
- Irregular sleep schedule
- Excessive daytime napping

### Medical Conditions
If you experience persistent sleep issues, consider evaluation for:
- Sleep apnea
- Restless leg syndrome
- Chronic insomnia
- Hormonal imbalances

## Creating Your Sleep Optimization Plan

1. **Track Your Sleep**: Use a sleep diary or wearable device
2. **Identify Patterns**: Note what helps or hinders your sleep
3. **Implement Gradually**: Change one habit at a time
4. **Be Patient**: Sleep improvements take 2-4 weeks to establish
5. **Seek Help**: Consult a sleep specialist if problems persist

Remember, good sleep is an investment in your health that pays dividends in every area of your life.
    `,
    category: "Mental Health",
    author: "Dr. James Wilson",
    date: "2024-01-14",
    readTime: "7 min",
    image: "/images/sleep-health.jpg",
    featured: false,
    tags: ["sleep", "wellness", "mental health", "recovery"]
  },
  {
    id: "pediatric-nutrition-basics",
    title: "Healthy Eating Habits for Growing Children",
    excerpt: "Essential nutrition principles for parents to ensure their children develop healthy relationships with food.",
    content: "Complete content about pediatric nutrition...",
    category: "Children's Health",
    author: "Dr. Patricia Lee",
    date: "2024-01-11",
    readTime: "6 min",
    image: "/images/children-nutrition.jpg",
    featured: false,
    tags: ["children", "nutrition", "development", "parenting"]
  },
  {
    id: "mens-preventive-health",
    title: "Men's Health After 40: Essential Preventive Care",
    excerpt: "Critical health screenings and lifestyle adjustments men should prioritize as they enter their 40s and beyond.",
    content: "Complete content about men's preventive health...",
    category: "Men's Health",
    author: "Dr. Robert Kim",
    date: "2024-01-09",
    readTime: "8 min",
    image: "/images/mens-health.jpg",
    featured: false,
    tags: ["mens health", "prevention", "screening", "aging"]
  },
  {
    id: "arthritis-management",
    title: "Living Well with Arthritis: Management and Treatment Options",
    excerpt: "Comprehensive strategies for managing arthritis pain and maintaining quality of life through various treatment approaches.",
    content: "Complete content about arthritis management...",
    category: "Chronic Conditions",
    author: "Dr. Maria Gonzalez",
    date: "2024-01-07",
    readTime: "9 min",
    image: "/images/arthritis-care.jpg",
    featured: false,
    tags: ["arthritis", "chronic conditions", "pain management", "treatment"]
  }
];

export const allBlogPosts = [...blogPosts, ...additionalBlogPosts];

// Helper functions
export const getFeaturedPost = () => allBlogPosts.find(post => post.featured);
export const getPostsByCategory = (category: string) => 
  allBlogPosts.filter(post => post.category === category);
export const getRecentPosts = (limit: number = 6) => 
  allBlogPosts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
export const getRelatedPosts = (currentPostId: string, limit: number = 3) => {
  const currentPost = allBlogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  // First try to get posts from the same category
  let relatedPosts = allBlogPosts.filter(post => 
    post.id !== currentPostId && post.category === currentPost.category
  );
  
  // If we don't have enough from the same category, add posts with similar tags
  if (relatedPosts.length < limit) {
    const postsWithSimilarTags = allBlogPosts.filter(post => 
      post.id !== currentPostId && 
      post.category !== currentPost.category &&
      post.tags.some(tag => currentPost.tags.includes(tag))
    );
    relatedPosts = [...relatedPosts, ...postsWithSimilarTags];
  }
  
  // If still not enough, add any recent posts
  if (relatedPosts.length < limit) {
    const otherPosts = allBlogPosts.filter(post => 
      post.id !== currentPostId && 
      !relatedPosts.some(rp => rp.id === post.id)
    );
    relatedPosts = [...relatedPosts, ...otherPosts];
  }
  
  return relatedPosts.slice(0, limit);
};