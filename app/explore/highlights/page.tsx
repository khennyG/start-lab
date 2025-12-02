import Image from 'next/image'

export default function FacultyHighlightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-red-700">Faculty Highlights</h1>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto text-base">
          Showcasing faculty who are creatively using AI to enhance teaching and learning across the College of Science.
        </p>
      </header>

      {/* Cards */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Ana Otero */}
          <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
            <div className="relative h-56 w-full bg-white flex items-center justify-center">
              <Image
                src="/images/highlights/ana-otero.jpg"
                alt="Prof. Ana Otero, Biology"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-600" /> Biology
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Prof. Ana Otero</h3>
              <p className="mt-1 text-sm text-gray-600">Department of Biology</p>
<<<<<<< HEAD
              <h4 className="mt-4 text-lg font-semibold text-[#CC0000]">BioQuizzer: AI-Powered Practice Tool</h4>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  In the Department of Biology, Prof. Ana Otero designed <span className="font-medium">BioQuizzer</span> - an AI-powered study companion built with Claude. The app gives her students a space to practice multiple-choice questions that mirror the style and rigor of her exams. Each question is generated and organized using Bloom’s taxonomy, so students move from basic recall to higher-order reasoning as they study. The quizzer adjusts difficulty based on performance and integrates immediate feedback to help students recognize and correct misconceptions early. What makes it especially powerful is the built-in chat with Claude: while taking practice quizzes, students can pause to ask for explanations, unpack why an answer is correct or not, and explore related ideas in real time. It turns passive studying into a guided conversation, helping students think more critically, not just memorize.
                </p>
              <div className="mt-6">
                <a
                  href="https://claude.ai/artifacts/b38e4237-53d7-4a4e-a4ab-66ffae5dfc8e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  View Artifact
                </a>
              </div>
            </div>
          </article>

          {/* Rangoli */}
          <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
            <div className="relative h-56 w-full bg-white flex items-center justify-center">
              <Image
                src="/images/highlights/rangoli.jpg"
                alt="Prof. Rangoli Goyal, Mathematics"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-600" /> Mathematics
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Prof. Rangoli Goyal</h3>
              <p className="mt-1 text-sm text-gray-600">Department of Mathematics</p>
<<<<<<< HEAD
              <h4 className="mt-4 text-lg font-semibold text-[#CC0000]">MathQuizzer: Practice for Calculus I & II</h4>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  In Mathematics, Prof. Rangoli Goyal is taking a similar approach with <span className="font-medium">MathQuizzer</span>, also powered by Claude, to support her students in Calculus I and II. The app allows students to select any topic - limits, derivatives, or integrals - and instantly generates new problem sets at varying levels of difficulty. Students can attempt problems step by step, request structured hints when they get stuck, and compare their methods with fully worked solutions at the end. A built-in “Math Buddy” chat, again supported by Claude, gives students a chance to ask conceptual questions during practice, encouraging understanding before shortcuts. By combining adaptability with conversational support, MathQuizzer makes independent practice feel more like collaborative tutoring.
                </p>
              <div className="mt-6">
                <a
                  href="https://claude.ai/artifacts/b3b42bfa-d075-4982-bf0f-990520c655da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  View Artifact
                </a>
              </div>
            </div>
          </article>

          {/* Abby Williams */}
          <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
            <div className="relative h-56 w-full bg-white flex items-center justify-center">
              <Image
                src="/images/highlights/abby-williams.jpg"
                alt="Prof. Abby Williams, Mathematics"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-600" /> Mathematics
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Prof. Abby Williams</h3>
              <p className="mt-1 text-sm text-gray-600">Department of Mathematics</p>
              <h4 className="mt-4 text-lg font-semibold text-[#CC0000]">Ada: AI Chatbot for Calculus Support</h4>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                In Calculus for Life Sciences, Prof. Abby Williams uses &quot;Ada,&quot; a custom ChatGPT-powered chatbot developed by Prof. Nik Bear Brown and graduate student Dev Shah. The chatbot gives students 24/7 access to homework help. Students can type in a problem or upload a photo of it, and Ada walks them through the solution step by step. Since textbooks often show only one correct answer format, Ada helps students check both their answers and their problem-solving process. Students also use Ada to generate practice problems for midterms and finals. Weekly quizzes are based on homework, so Ada fits naturally into how students already study. Student feedback has been positive, with many noting they appreciated learning how to use AI as a genuine study tool.
              <h4 className="mt-4 text-lg font-semibold text-[#CC0000]">Ada: AI Chatbot for Calculus Support</h4>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                In Calculus for Life Sciences, Prof. Abby Williams uses &quot;Ada,&quot; a custom ChatGPT-powered chatbot developed by Prof. Nik Bear Brown and graduate student Dev Shah. The chatbot gives students 24/7 access to homework help. Students can type in a problem or upload a photo of it, and Ada walks them through the solution step by step. Since textbooks often show only one correct answer format, Ada helps students check both their answers and their problem-solving process. Students also use Ada to generate practice problems for midterms and finals. Weekly quizzes are based on homework, so Ada fits naturally into how students already study. Student feedback has been positive, with many noting they appreciated learning how to use AI as a genuine study tool.
              </p>
              <div className="mt-6">
                <a
                  href="https://chatgpt.com/g/g-JMkUy05pG-ada-calculus-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  View Ada Chatbot
                </a>
              </div>
            </div>
          </article>

          {/* He Wang */}
          <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 will-change-transform">
            <div className="relative h-56 w-full bg-white flex items-center justify-center">
              <Image
                src="/images/highlights/he-wang.jpg"
                alt="Prof. He Wang, Applied Mathematics"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-600" /> Mathematics
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Prof. He Wang</h3>
              <p className="mt-1 text-sm text-gray-600">Department of Applied Mathematics</p>
<<<<<<< HEAD
              <h4 className="mt-4 text-lg font-semibold text-[#CC0000]">ChatGPT as a Coding Partner in Applied Math</h4>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                In Applied Math for Data Science and Machine Learning, Prof. He Wang has students use ChatGPT, GitHub Copilot, or Llama to help with coding. Students first solve real-world math problems on their own using their understanding of mathematical theory. Then they prompt the AI to generate code in R, Python, or MATLAB, and evaluate whether the response is correct. This lets students focus on the math and the logic of their programming rather than getting stuck on syntax. Grading emphasizes the math, not the code, reinforcing that AI handles computation while students own the critical thinking.
              </p>
              <div className="mt-6">
                <a
                  href="https://learning.northeastern.edu/wp-content/uploads/2024/09/He-Wang-Article-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  View Project
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
