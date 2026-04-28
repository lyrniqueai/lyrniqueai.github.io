import AcademyLayout from "@/components/layout/AcademyLayout";
import ResourceCard from "@/components/academy/ResourceCard";
import ResourceSection from "@/components/academy/ResourceSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Book, Brain, Sparkles, Wrench, Bot, Rocket, Globe, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AcademyLayout>
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Complete <span className="gradient-text">AI & Data Science</span> Learning Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Curated free resources from beginner to expert
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
              <span>50+ Free Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
              <span>7 Learning Tracks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
              <span>Project-Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10 h-12 bg-card/50 backdrop-blur-sm border-border/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Tabbed Resources */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="ds-foundations" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/50 p-2">
              <TabsTrigger value="ds-foundations" className="gap-2">
                <Book className="h-4 w-4" />
                Data Science
              </TabsTrigger>
              <TabsTrigger value="ml-dl" className="gap-2">
                <Brain className="h-4 w-4" />
                ML & DL
              </TabsTrigger>
              <TabsTrigger value="genai" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Generative AI
              </TabsTrigger>
              <TabsTrigger value="ai-tools" className="gap-2">
                <Wrench className="h-4 w-4" />
                AI Tools
              </TabsTrigger>
              <TabsTrigger value="agents" className="gap-2">
                <Bot className="h-4 w-4" />
                AI Agents
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <Rocket className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="platforms" className="gap-2">
                <Globe className="h-4 w-4" />
                Platforms
              </TabsTrigger>
            </TabsList>

            {/* Data Science Foundations */}
            <TabsContent value="ds-foundations" className="space-y-6 mt-8">
              <ResourceSection title="Core Tutorials" icon={Book} count={3} defaultOpen>
                <ResourceCard
                  title="Data Science Tutorial"
                  description="Complete beginner-friendly guide to Data Science fundamentals"
                  url="https://www.geeksforgeeks.org/data-science/data-science-for-beginners/"
                  level="Beginner"
                  popular
                />
                <ResourceCard
                  title="Machine Learning Tutorial"
                  description="Comprehensive ML concepts and practical implementation"
                  url="https://www.geeksforgeeks.org/machine-learning/machine-learning/"
                  level="Beginner"
                  popular
                />
                <ResourceCard
                  title="Python Programming Full Course"
                  description="Master Python from basics to advanced topics"
                  url="https://www.geeksforgeeks.org/python-programming-language/"
                  level="Beginner"
                />
              </ResourceSection>

              <ResourceSection title="Essential Concepts" icon={Book} count={8}>
                <ResourceCard title="Statistics for DS" description="Statistical methods for data analysis" url="https://www.geeksforgeeks.org/statistics/" level="Intermediate" />
                <ResourceCard title="Probability" description="Probability theory and applications" url="https://www.geeksforgeeks.org/probability/" level="Intermediate" />
                <ResourceCard title="Data Preprocessing" description="Clean and prepare data for analysis" url="https://www.geeksforgeeks.org/data-preprocessing-in-data-mining/" level="Beginner" />
                <ResourceCard title="Feature Engineering" description="Create meaningful features from raw data" url="https://www.geeksforgeeks.org/feature-engineering/" level="Intermediate" />
                <ResourceCard title="Exploratory Data Analysis (EDA)" description="Discover patterns and insights in data" url="https://www.geeksforgeeks.org/what-is-exploratory-data-analysis/" level="Beginner" />
                <ResourceCard title="SQL & Databases" description="Query and manage data efficiently" url="https://www.geeksforgeeks.org/sql-tutorial/" level="Beginner" />
                <ResourceCard title="Data Visualization" description="Matplotlib, Seaborn, and Power BI basics" url="https://www.geeksforgeeks.org/data-visualization/" level="Beginner" />
              </ResourceSection>

              <ResourceSection title="Video Playlists" icon={Book} count={2}>
                <ResourceCard
                  title="Python for Data Science + 2 Projects"
                  description="Hands-on Python tutorial with real projects"
                  url="https://www.geeksforgeeks.org/videos/python-for-data-science-machine-learning-tutorial-with-2-projects/"
                  level="Beginner"
                  popular
                />
                <ResourceCard
                  title="Top Data Science Projects"
                  description="Portfolio-worthy DS project ideas and implementations"
                  url="https://www.geeksforgeeks.org/data-science/top-data-science-projects/"
                  level="Intermediate"
                />
              </ResourceSection>
            </TabsContent>

            {/* ML & Deep Learning */}
            <TabsContent value="ml-dl" className="space-y-6 mt-8">
              <ResourceSection title="Machine Learning Concepts" icon={Brain} count={5} defaultOpen>
                <ResourceCard title="Supervised Learning" description="Learn regression and classification techniques" url="https://www.geeksforgeeks.org/supervised-unsupervised-learning/" level="Beginner" />
                <ResourceCard title="Unsupervised Learning" description="Clustering and dimensionality reduction" url="https://www.geeksforgeeks.org/supervised-unsupervised-learning/" level="Intermediate" />
                <ResourceCard title="Regression Models" description="Linear, polynomial, and advanced regression" url="https://www.geeksforgeeks.org/ml-linear-regression/" level="Beginner" />
                <ResourceCard title="Classification Algorithms" description="Decision trees, SVM, and more" url="https://www.geeksforgeeks.org/getting-started-with-classification/" level="Beginner" />
                <ResourceCard title="Ensemble Models" description="XGBoost, Random Forest, LightGBM" url="https://www.geeksforgeeks.org/ensemble-methods-in-python/" level="Advanced" popular />
              </ResourceSection>

              <ResourceSection title="Deep Learning" icon={Brain} count={5}>
                <ResourceCard title="Neural Networks" description="Understanding deep neural networks" url="https://www.geeksforgeeks.org/neural-networks-a-beginners-guide/" level="Intermediate" />
                <ResourceCard title="CNNs" description="Convolutional Neural Networks for images" url="https://www.geeksforgeeks.org/introduction-convolution-neural-network/" level="Intermediate" />
                <ResourceCard title="RNNs, LSTMs, GRUs" description="Sequence models for time series and NLP" url="https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/" level="Advanced" />
                <ResourceCard title="Transfer Learning" description="ResNet, MobileNet, VGG applications" url="https://www.geeksforgeeks.org/ml-introduction-to-transfer-learning/" level="Advanced" />
              </ResourceSection>

              <ResourceSection title="Free Courses" icon={Brain} count={1}>
                <ResourceCard
                  title="MIT OpenCourseWare (AI & ML)"
                  description="World-class AI and ML courses from MIT"
                  url="https://ocw.mit.edu"
                  level="Advanced"
                  popular
                />
              </ResourceSection>
            </TabsContent>

            {/* Generative AI */}
            <TabsContent value="genai" className="space-y-6 mt-8">
              <ResourceSection title="Core GenAI Tutorials" icon={Sparkles} count={1} defaultOpen>
                <ResourceCard
                  title="AI + ML + DS Combined Track"
                  description="Comprehensive guide covering AI, ML, and Data Science"
                  url="https://www.geeksforgeeks.org/machine-learning/ai-ml-and-data-science-tutorial-learn-ai-ml-and-data-science/"
                  level="Intermediate"
                  popular
                />
              </ResourceSection>

              <ResourceSection title="GenAI Concepts" icon={Sparkles} count={7}>
                <ResourceCard title="LLMs (GPT, Claude, LLaMA, Gemini)" description="Understanding Large Language Models" url="https://www.geeksforgeeks.org/large-language-model-llm/" level="Intermediate" popular />
                <ResourceCard title="Tokenization" description="How text is processed in LLMs" url="https://www.geeksforgeeks.org/nlp-how-tokenizing-text-sentence-words-works/" level="Beginner" />
                <ResourceCard title="Prompt Engineering" description="Craft effective prompts for AI models" url="https://www.geeksforgeeks.org/prompt-engineering/" level="Beginner" popular />
                <ResourceCard title="Embeddings & Vector Databases" description="Semantic search and similarity matching" url="https://www.geeksforgeeks.org/word-embeddings-in-nlp/" level="Intermediate" />
                <ResourceCard title="RAG (Retrieval-Augmented Generation)" description="Combine LLMs with knowledge retrieval" url="https://www.geeksforgeeks.org/retrieval-augmented-generation-rag-in-ai/" level="Advanced" popular />
                <ResourceCard title="Fine-tuning LLMs" description="Customize models for specific tasks" url="https://www.geeksforgeeks.org/fine-tuning-large-language-models-llm/" level="Advanced" />
                <ResourceCard title="Image / Audio Models" description="Multimodal AI applications" url="https://www.geeksforgeeks.org/multimodal-models/" level="Intermediate" />
              </ResourceSection>

              <ResourceSection title="Tools & APIs" icon={Sparkles} count={5}>
                <ResourceCard title="Hugging Face Transformers" description="Pre-trained models and pipelines" url="https://huggingface.co/docs/transformers" level="Intermediate" popular />
                <ResourceCard title="OpenAI API" description="Access GPT models programmatically" url="https://platform.openai.com/docs" level="Intermediate" popular />
                <ResourceCard title="LangChain & LangGraph" description="Build LLM-powered applications" url="https://www.langchain.com/" level="Advanced" />
                <ResourceCard title="LlamaIndex" description="Data framework for LLM applications" url="https://www.llamaindex.ai/" level="Advanced" />
                <ResourceCard title="Diffusion Models" description="Stable Diffusion and DALL·E basics" url="https://www.geeksforgeeks.org/stable-diffusion/" level="Advanced" />
              </ResourceSection>
            </TabsContent>

            {/* AI Tools & Platforms */}
            <TabsContent value="ai-tools" className="space-y-6 mt-8">
              <ResourceSection title="OpenAI Tools + Prompt Packs" icon={Wrench} count={3} defaultOpen>
                <ResourceCard
                  title="OpenAI Python API"
                  description="Complete guide to using OpenAI's Python API"
                  url="https://www.geeksforgeeks.org/data-science/openai-python-api/"
                  level="Intermediate"
                  popular
                />
                <ResourceCard
                  title="OpenAI Tools Guide"
                  description="Playground, CLI, and advanced features"
                  url="https://www.geeksforgeeks.org/artificial-intelligence/openai-tools/"
                  level="Beginner"
                />
              </ResourceSection>

              <ResourceSection title="Google Colab" icon={Wrench} count={3}>
                <ResourceCard
                  title="Getting Started with Google Colab"
                  description="Browser-based Python notebook environment"
                  url="https://www.geeksforgeeks.org/data-science/getting-started-with-google-colab/"
                  level="Beginner"
                  popular
                />
                <ResourceCard
                  title="ML Projects in Colab"
                  description="Build and deploy ML projects using Colab"
                  url="https://www.geeksforgeeks.org/machine-learning/how-to-use-google-colab-for-machine-learning-projects/"
                  level="Intermediate"
                />
                <ResourceCard
                  title="Colab AI + Gemini Demo"
                  description="Video tutorial on using Gemini in Colab"
                  url="https://www.youtube.com/watch?v=Gt5ZkoFrgyE"
                  level="Intermediate"
                />
              </ResourceSection>
            </TabsContent>

            {/* AI Agents */}
            <TabsContent value="agents" className="space-y-6 mt-8">
              <ResourceSection title="Agentic AI Complete Guide" icon={Bot} count={1} defaultOpen>
                <ResourceCard
                  title="Agentic AI Tutorial"
                  description="Comprehensive guide to AI agents, multi-agent systems, and agentic workflows"
                  url="https://www.geeksforgeeks.org/artificial-intelligence/agentic-ai-tutorial/"
                  level="Advanced"
                  popular
                />
              </ResourceSection>

              <ResourceSection title="Multi-Agent Systems" icon={Bot} count={1}>
                <ResourceCard
                  title="CrewAI – Multi-Agent Collaboration"
                  description="Build coordinated AI agent teams with planning, memory, and tools"
                  url="https://www.geeksforgeeks.org/crewai/"
                  level="Advanced"
                  popular
                />
              </ResourceSection>

              <ResourceSection title="Reinforcement Learning Agents" icon={Bot} count={1}>
                <ResourceCard
                  title="Model-Free RL Methods"
                  description="Q-Learning, SARSA, Monte Carlo, REINFORCE, Actor-Critic, A3C"
                  url="https://www.geeksforgeeks.org/machine-learning/machine-learning/"
                  level="Advanced"
                />
              </ResourceSection>
            </TabsContent>

            {/* Projects */}
            <TabsContent value="projects" className="space-y-6 mt-8">
              <ResourceSection title="Data Science Projects" icon={Rocket} count={1} defaultOpen>
                <ResourceCard
                  title="Top Data Science Projects"
                  description="Portfolio-ready projects to showcase your skills"
                  url="https://www.geeksforgeeks.org/data-science/top-data-science-projects/"
                  level="Intermediate"
                  popular
                />
              </ResourceSection>

              <ResourceSection title="Machine Learning Projects" icon={Rocket} count={1}>
                <ResourceCard
                  title="ML Project Ideas"
                  description="Classification, regression, NLP, image processing, and recommendation systems"
                  url="https://www.geeksforgeeks.org/machine-learning-projects/"
                  level="Intermediate"
                />
              </ResourceSection>

              <ResourceSection title="Generative AI Projects" icon={Rocket} count={1}>
                <ResourceCard
                  title="GenAI Applications"
                  description="Chatbots, RAG apps, LLM assistants, multi-agent systems, image generation"
                  url="https://www.geeksforgeeks.org/generative-ai-projects/"
                  level="Advanced"
                />
              </ResourceSection>

              <ResourceSection title="Industry Projects" icon={Rocket} count={1}>
                <ResourceCard
                  title="GeeksforGeeks Industry Projects"
                  description="Guided portfolio projects (GenAI + DS + ML)"
                  url="https://www.geeksforgeeks.org/courses/data-science-live"
                  level="Advanced"
                  popular
                />
              </ResourceSection>
            </TabsContent>

            {/* Learning Platforms */}
            <TabsContent value="platforms" className="space-y-6 mt-8">
              <ResourceSection title="Free Learning Platforms" icon={Globe} count={8} defaultOpen>
                <ResourceCard
                  title="GeeksforGeeks Library"
                  description="Comprehensive tech tutorials and courses"
                  url="https://www.geeksforgeeks.org/gfg-academy/geeksforgeeks-online-tutorials-free/"
                  popular
                />
                <ResourceCard
                  title="MIT OpenCourseWare"
                  description="Free MIT course materials"
                  url="https://ocw.mit.edu"
                  popular
                />
                <ResourceCard
                  title="Swayam Central"
                  description="Indian MOOC platform by Government of India"
                  url="https://swayam.gov.in"
                />
                <ResourceCard
                  title="OpenLearn"
                  description="Free courses from The Open University"
                  url="https://www.open.edu/openlearn/"
                />
                <ResourceCard
                  title="Class Central"
                  description="Search engine for online courses"
                  url="https://www.classcentral.com/subjects"
                />
                <ResourceCard
                  title="Codecademy Free Courses"
                  description="Interactive coding tutorials"
                  url="https://www.codecademy.com"
                />
                <ResourceCard
                  title="MOOC List"
                  description="Directory of online courses"
                  url="https://www.mooc-list.com"
                />
                <ResourceCard
                  title="Open Culture Certificates"
                  description="Free certificate courses collection"
                  url="http://www.openculture.com/free_certificate_courses"
                />
              </ResourceSection>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our guided courses and workshops for structured learning paths
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary border-0 text-foreground font-semibold hover:opacity-90">
              <Link to="/academy/courses">Explore Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/academy/workshops">View Workshops</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </AcademyLayout>
  );
};

export default Resources;
