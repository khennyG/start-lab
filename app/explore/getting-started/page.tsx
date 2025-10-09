"use client";
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const ACCORDION_ITEMS = [
  'Redesign Assignments',
  'Generate Lecture Notes & Misconceptions',
  'Create Case Studies & Scenarios',
  'Scaffold Student Work',
  'Build In-Class Activities',
  'Use AI for Feedback & Rubrics',
  'Research & Efficiency Support'
];

export default function GettingStartedPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('Mathematics');

  const DISCIPLINES = [
    'Mathematics',
    'Biology',
    'Physics',
    'Chemistry and Chemical Biology',
    'Marine and Environmental Sciences',
    'Psychology'
  ];

  // Dummy example data per discipline (to be replaced later)
  const DISCIPLINE_EXAMPLES: Record<string, { id: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[]> = {
    'Mathematics': [
      {
        id: 'm1',
        title: 'Derivatives & Marginal Revenue',
        old: (
          <>
            <p className="mb-2">Compute the derivative of the given revenue function:</p>
            <BlockMath math={'R(q) = -0.2q^2 + 18q'} />
            <p className="mt-2">and evaluate at <InlineMath math={'q = 40'} />.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-3">A company’s revenue is modeled by:</p>
            <BlockMath math={'R(q) = -0.2q^2 + 18q'} />
            <p className="mt-2 mb-3">where <InlineMath math={'q'} /> represents the number of units sold. Complete the tasks below:</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Find the marginal revenue function.</li>
              <li>Interpret the meaning of marginal revenue at <InlineMath math={'q = 40'} /> in a business context.</li>
              <li>Explain how changes in <InlineMath math={'q'} /> beyond this point could influence the company’s pricing or sales strategy.</li>
            </ol>
          </>
        )
      },
      {
        id: 'm2',
        title: 'Optimization & Profit Function',
        old: (
          <>
            <p className="mb-2">Find the maximum value of:</p>
            <BlockMath math={'f(x) = -2x^2 + 40x'} />
          </>
        ),
        redesigned: (
          <>
            <p className="mb-3">A firm’s profit is modeled by:</p>
            <BlockMath math={'P(x) = -2x^2 + 40x'} />
            <p className="mt-2 mb-3">where <InlineMath math={'x'} /> is the number of products produced. Complete the tasks below:</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Determine the production level that maximizes profit.</li>
              <li>Discuss how sensitive this optimal point might be to changes in production costs.</li>
              <li>Suggest one external factor (e.g., market demand or labor cost) that could shift the profit-maximizing output.</li>
            </ol>
          </>
        )
      },
      {
        id: 'm3',
        title: 'Elasticity of Demand',
        old: (
          <>
            <p className="mb-2">Given:</p>
            <BlockMath math={'q(p) = 120 - 2p'} />
            <p className="mt-2">find the elasticity of demand when <InlineMath math={'p = 20'} />.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-3">The demand for a product is modeled by:</p>
            <BlockMath math={'q(p) = 120 - 2p'} />
            <p className="mt-2 mb-3">Complete the tasks below:</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Compute the price elasticity of demand at <InlineMath math={'p = 20'} />.</li>
              <li>Interpret the result — is the demand elastic, inelastic, or unit-elastic?</li>
              <li>Explain how this finding could guide the company’s pricing decision to increase total revenue.</li>
            </ol>
          </>
        )
      }
      ,{
        id: 'm4',
        title: 'Related Rates: Volume of a Cone',
        old: (
          <>
            <p className="mb-2">A water tank has the shape of an inverted cone with height <InlineMath math={'h = 10\\text{ m}'} /> and base radius <InlineMath math={'r = 4\\text{ m}'} />.</p>
            <p className="mb-2">Water is being poured in at a rate of</p>
            <BlockMath math={'\\frac{dV}{dt} = 2\\, \\text{m}^3/\\text{min}'} />
            <p className="mt-2">Find the rate at which the water level is rising when the water is <InlineMath math={'5\\text{ m}'} /> deep.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-2">A water tank shaped like an inverted cone (height <InlineMath math={'h = 10\\text{ m}'} />, base radius <InlineMath math={'r = 4\\text{ m}'} />) is being filled at a rate of:</p>
            <BlockMath math={'2\\, \\text{m}^3/\\text{min}'} />
            <ol className="list-decimal pl-5 space-y-2 text-[13px] mt-3">
              <li>Derive the relationship between the radius of the water surface and the water height using geometric similarity.</li>
              <li>Compute the rate of change of water height when the water is <InlineMath math={'5\\text{ m}'} /> deep.</li>
              <li>Reflect: At this moment, is the water level rising faster or slower compared to when the tank was half full? Explain conceptually, without additional computation.</li>
              <li>Extension: Suppose the rate of inflow doubles after <InlineMath math={'t = 4\\text{ min}'} />. Predict qualitatively how the shape of the height-versus-time graph will change.</li>
            </ol>
          </>
        )
      }
    ],
    'Biology': [],
    'Physics': [
      {
        id: 'p1',
        title: 'Kinematics and Free Fall',
        old: (
          <>
            <p className="mb-2">A ball is thrown vertically upward with an initial velocity of 20 m/s.</p>
            <p className="mb-1">(a) How long does it take to reach the maximum height?</p>
            <p>(b) What is the maximum height reached?</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-2">A ball is thrown vertically upward with <InlineMath math={'v_0 = 20\\, \\text{m/s}'} />.</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Determine the time and height at which the ball momentarily stops.</li>
              <li>Describe what happens to velocity and acceleration at that instant.</li>
              <li>Suppose the same ball is thrown on the Moon (<InlineMath math={'g = 1.62\\, \\text{m/s}^2'} />); predict qualitatively how motion changes and explain why.</li>
              <li>Sketch or describe the velocity–time graph and interpret its slope.</li>
            </ol>
          </>
        )
      },
      {
        id: 'p2',
        title: "Newton’s Laws & Friction",
        old: (
          <>
            <p className="mb-2">A 5 kg block is pulled across a horizontal surface with a constant force of 20 N. The coefficient of kinetic friction is 0.3.</p>
            <p>Find the block’s acceleration.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-2">A 5 kg block is pulled across a surface by a 20 N horizontal force. The coefficient of kinetic friction is 0.3.</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Calculate the block’s acceleration.</li>
              <li>Draw a labeled free-body diagram.</li>
              <li>Explain what would happen if the surface became rougher (higher <InlineMath math={'\\mu_k'} />).</li>
              <li>Discuss whether constant velocity motion is possible under any condition.</li>
            </ol>
          </>
        )
      },
      {
        id: 'p3',
        title: 'Thermodynamics — First Law',
        old: (
          <>
            <p className="mb-2">A gas expands from a volume of 2.0 L to 6.0 L at constant pressure 1.5×10<sup>5</sup> Pa.</p>
            <p>Calculate the work done by the gas.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-2">A gas expands from 2.0 L to 6.0 L under constant pressure 1.5×10<sup>5</sup> Pa.</p>
            <ol className="list-decimal pl-5 space-y-2 text-[13px]">
              <li>Calculate the work done by the gas.</li>
              <li>Explain whether energy is entering or leaving the system.</li>
              <li>Suppose the gas expands non-isobarically (pressure decreases linearly with volume). Sketch the new P–V curve and estimate how work changes.</li>
              <li>Reflect on what process could cause this non-isobaric behavior.</li>
            </ol>
          </>
        )
      },
      {
        id: 'p4',
        title: 'Waves and Superposition',
        old: (
          <>
            <p className="mb-2">Two waves on a string are described by</p>
            <BlockMath math={'y_1 = 0.02\\sin(3x - 6t)'} />
            <p className="mb-2">and</p>
            <BlockMath math={'y_2 = 0.02\\sin(3x - 6t + \\tfrac{\\pi}{2})'} />
            <p>Determine the resulting wave equation.</p>
          </>
        ),
        redesigned: (
          <>
            <p className="mb-2">Two waves travel along the same string:</p>
            <BlockMath math={'y_1 = 0.02\\sin(3x - 6t)'} />
            <BlockMath math={'y_2 = 0.02\\sin(3x - 6t + \\tfrac{\\pi}{2})'} />
            <ol className="list-decimal pl-5 space-y-2 text-[13px] mt-2">
              <li>Determine the resulting amplitude and phase analytically.</li>
              <li>Describe how the interference pattern would change if the phase difference were <InlineMath math={'\\pi'} />.</li>
              <li>Explain what constructive and destructive interference mean here.</li>
              <li>Extend: Predict what happens if a third wave with smaller amplitude and different frequency is added — would the motion remain periodic? Why or why not?</li>
            </ol>
          </>
        )
      }
    ],
    'Chemistry and Chemical Biology': [],
    'Marine and Environmental Sciences': [],
    'Psychology': []
  };

  // Lecture note + misconceptions examples (expanded set for second accordion panel)
  const LECTURE_EXAMPLES: { id: string; discipline: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[] = [
    // MATHEMATICS
    {
      id: 'math-chain-rule',
      discipline: 'Mathematics',
      title: 'The Chain Rule (Calculus I)',
      old: (
        <>
          <p className="mb-2">“The derivative of a composite function (f∘g)(x) is:</p>
          <BlockMath math="(f \\circ g)'(x) = f'(g(x))\\cdot g'(x)" />
          <p className="mb-2">Example:</p>
          <BlockMath math={'y = \\sin(3x^2) \\; \\Longrightarrow \\; y\' = \\cos(3x^2) \\cdot 6x'} />
          <p className="mt-2">(Presented without conceptual scaffolding.)”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-3">“To understand why the chain rule works, think of it as tracking how a small change in <InlineMath math={'x'} /> affects <InlineMath math={'y'} /> through another variable <InlineMath math={'g(x)'} />.”</p>
          <p className="mb-2">Visualize the dependency:</p>
          <BlockMath math={'\\frac{dy}{dx} = \\frac{dy}{dg} \\cdot \\frac{dg}{dx}'} />
          <p className="mb-2">Given <InlineMath math={'g(x)=3x^2'} /> and <InlineMath math={'f(g)=\\sin g'} />:</p>
          <p className="mb-2">A small change <InlineMath math={'\\Delta x'} /> changes <InlineMath math={'g'} /> by <InlineMath math={'\\Delta g = 6x \\Delta x'} />.</p>
            <p className="mb-2">That induces <InlineMath math={'\\Delta y = \\cos(g) \\Delta g'} /> so combining both gives:</p>
          <BlockMath math={'y' + "' = 6x \\cos(3x^2)"} />
          <p className="mb-3">Students sketch arrows <InlineMath math={'x \\to g \\to y'} /> to visualize propagation.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for visualization prompts that convert equations into flow diagrams.</em>
        </>
      )
    },
    {
      id: 'math-limits',
      discipline: 'Mathematics',
      title: 'The Concept of Limits',
      old: (
        <>
          <p className="mb-2">“<BlockMath math={'\\lim_{x \\to 2}(3x+1)=7'} /> The limit is simply substitution if the function is continuous.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“A limit describes <em>approach</em>, not substitution. Imagine walking toward a wall at <InlineMath math={'x=2'} />— you can get arbitrarily close.”</p>
          <p className="mb-2">Use AI to generate zoomed graphs of <InlineMath math={'f(x)=3x+1'} /> near <InlineMath math={'x=2'} /> with shrinking intervals.</p>
          <p className="mb-2">Contrast one‑sided limits <InlineMath math={'\\lim_{x \\to 2^-} f(x)'} /> vs <InlineMath math={'\\lim_{x \\to 2^+} f(x)'} /> when discontinuities exist.</p>
          <p className="mb-2">Misconception: Limits are “just plugging in.” Counter with <BlockMath math={'f(x)=\\frac{x^2-4}{x-2}'} /> showing removable discontinuity.</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that generate continuous vs. discontinuous visualizations.</em>
        </>
      )
    },
    {
      id: 'math-integration-misconceptions',
      discipline: 'Mathematics',
      title: 'Misconceptions in Integration',
      old: (
        <>
          <p className="mb-2">“<BlockMath math={'\\int x^2 \\; dx = \\frac{x^3}{3} + C'} /> The integral is the reverse of differentiation.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">Students often treat integration as a symbolic reversal instead of accumulated area.</p>
          <p className="mb-2">AI animation: Riemann rectangles converging for <InlineMath math={'f(x)=x^2'} />.</p>
          <BlockMath math={'\\int_0^2 x^2 dx = \\left[ \\tfrac{x^3}{3} \\right]_0^2 = \\tfrac{8}{3}'} />
          <p className="mb-2">Discuss why answer ≠ <InlineMath math={'f(2)-f(0)=4'} />. Visualize limit as <InlineMath math={'n \\to \\infty'} /> partitions refine.</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for area‑approximation animation prompts.</em>
        </>
      )
    },
    // BIOLOGY
    {
      id: 'bio-photosynthesis',
      discipline: 'Biology',
      title: 'Photosynthesis',
      old: (<p className="mb-2">Photosynthesis is the process by which plants convert sunlight into chemical energy through chlorophyll.</p>),
      redesigned: (<><p className="mb-2">Address the misconception that photosynthesis happens only during the day; add analogies comparing chloroplasts to solar batteries.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for analogy prompts.</em></>)
    },
    {
      id: 'bio-enzyme-kinetics',
      discipline: 'Biology',
      title: 'Enzyme Kinetics (Michaelis–Menten)',
      old: (<p className="mb-2">The Michaelis–Menten equation is <InlineMath math={'v = \\frac{V_{max}[S]}{K_m + [S]}'} />. <InlineMath math={'V_{max}'} /> is max velocity; <InlineMath math={'K_m'} /> is the substrate concentration at half <InlineMath math={'V_{max}'} />.</p>),
      redesigned: (<><p className="mb-2">Show dynamic plots as <InlineMath math={'[S]'} /> increases flattening near <InlineMath math={'V_{max}'} />.</p><p className="mb-2">Misconception: <InlineMath math={'K_m'} /> “is affinity” — clarify it is inversely related.</p><p className="mb-2">Overlay two enzymes: A (<InlineMath math={'K_m=2'} />) vs B (<InlineMath math={'K_m=8'} />) to compare saturation rate.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for data‑plot prompts.</em></>)
    },
    // PHYSICS
    {
      id: 'phys-newton-third-law',
      discipline: 'Physics',
      title: 'Newton’s Third Law',
      old: (<p className="mb-2">Newton’s Third Law states that for every action, there is an equal and opposite reaction.</p>),
      redesigned: (<><p className="mb-2">Use the “bug vs windshield” collision to contrast perceived vs actual force; annotate paired forces using free‑body diagrams.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for diagram generation prompts.</em></>)
    },
    {
      id: 'phys-projectile-motion',
      discipline: 'Physics',
      title: 'Projectile Motion',
      old: (<p className="mb-2">A projectile’s path: <InlineMath math={'y = x\\tan\\theta - \\frac{g x^2}{2 v^2 \\cos^2\\theta}'} /> and range <InlineMath math={'R = \\frac{v^2 \\sin 2\\theta}{g}'} />.</p>),
      redesigned: (<><p className="mb-2">Show AI animation varying <InlineMath math={'\\theta'} /> from 15°→75°.</p><p className="mb-2">Misconception: Maximum height and maximum range occur at same angle (they do not).</p><p className="mb-2">Interactive sliders for <InlineMath math={'v'} /> & <InlineMath math={'\\theta'} /> let students map relationships.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for motion simulation prompts.</em></>)
    },
    {
      id: 'phys-shm',
      discipline: 'Physics',
      title: 'Simple Harmonic Motion',
      old: (<p className="mb-2">For an oscillator <InlineMath math={'x(t)=A\\cos(\\omega t + \\phi)'} />; period <InlineMath math={'T=\\frac{2\\pi}{\\omega}'} />.</p>),
      redesigned: (<><p className="mb-2">Dynamic plots of displacement, velocity, acceleration; highlight 90° phase shift between velocity and displacement.</p><p className="mb-2">Misconception: Students think velocity & displacement are in phase— overlay graphs to counter.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for SHM visualization prompts.</em></>)
    },
    // CHEMISTRY
    {
      id: 'chem-equilibrium',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Chemical Equilibrium',
      old: (<p className="mb-2">Chemical equilibrium occurs when forward and reverse reaction rates are equal.</p>),
      redesigned: (<><p className="mb-2">Misconception: Reactions “stop” at equilibrium. Clarify dynamic nature with particle‑level animation.</p><p className="mb-2">Challenge: Predict shift when adding reactants (Le Châtelier).</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for dynamic equilibrium prompts.</em></>)
    },
    {
      id: 'chem-titration',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Acid–Base Titration Curve',
      old: (<p className="mb-2">Strong acid–strong base titration has an equivalence point at pH 7.</p>),
      redesigned: (<><p className="mb-2">Generate curves for strong/weak combinations; annotate buffering & equivalence regions.</p><p className="mb-2">Misconceptions: “pH 7 always neutral”; weak acid titration equivalence pH &gt; 7.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for titration simulation prompts.</em></>)
    },
    {
      id: 'chem-molecular-orbitals',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Molecular Orbital Theory',
      old: (<p className="mb-2">Bonding orbitals form via constructive interference; antibonding via destructive interference.</p>),
      redesigned: (<><p className="mb-2">AI orbital overlap animations (<InlineMath math={'H_2'} /> vs <InlineMath math={'O_2'} />); compare σ and π bonds.</p><p className="mb-2">Misconception: Electrons “sit” between atoms— show probability density distribution.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for orbital visualization prompts.</em></>)
    },
    // MARINE & ENVIRONMENTAL SCIENCE
    {
      id: 'marine-ocean-acidification',
      discipline: 'Marine and Environmental Sciences',
      title: 'Ocean Acidification',
      old: (<p className="mb-2">As CO₂ dissolves in seawater, pH decreases due to carbonic acid formation.</p>),
      redesigned: (<><p className="mb-2">Display data relating pH & carbonate ion concentration over time.</p><p className="mb-2">Misconception: Acidification ⇒ pH &lt; 7 (clarify: becoming less basic).</p><p className="mb-2">Visual: coral bleaching vs carbonate availability.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for ocean chemistry prompts.</em></>)
    },
    {
      id: 'marine-thermohaline',
      discipline: 'Marine and Environmental Sciences',
      title: 'Thermohaline Circulation',
      old: (<p className="mb-2">Ocean currents are driven by differences in temperature and salinity.</p>),
      redesigned: (<><p className="mb-2">Simulate density change with salinity & temperature; show deep circulation pathways.</p><p className="mb-2">Misconception: Currents only wind‑driven—introduce density gradients.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for circulation model prompts.</em></>)
    },
    // PSYCHOLOGY
    {
      id: 'psych-classical-conditioning',
      discipline: 'Psychology',
      title: 'Classical Conditioning',
      old: (<p className="mb-2">Pavlov’s dog learned to salivate at the sound of a bell through association.</p>),
      redesigned: (<><p className="mb-2">AI generates parallel human examples (ringtone → anticipation).</p><p className="mb-2">Misconception: Conditioning is “mindless”— show neural reward pathway diagram.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for conditioning scenario prompts.</em></>)
    },
    {
      id: 'psych-cognitive-biases',
      discipline: 'Psychology',
      title: 'Cognitive Biases',
      old: (<p className="mb-2">Confirmation bias occurs when people seek evidence supporting existing beliefs.</p>),
      redesigned: (<><p className="mb-2">AI-generated everyday feed examples reveal selective exposure.</p><p className="mb-2">Interactive polls let students notice their own bias patterns.</p><em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for bias reflection prompts.</em></>)
    }
  ];

  // Case studies & scenarios examples (third accordion panel)
  const CASE_EXAMPLES: { id: string; discipline: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[] = [
    {
      id: 'cs1',
      discipline: 'Mathematics',
  title: 'Data Interpretation & Ethics',
      old: (<><p className="mb-2">Analyze the data set below and determine the line of best fit.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Present students with two conflicting data sets and ask:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Which regression model best represents each trend — and why?</li>
            <li>How might the choice of data influence perceived outcomes?</li>
            <li>Introduce an ethical question: Should we always remove outliers, or can they tell an important story?</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 AI can help generate alternate data sets or misleading graphs to encourage critical reasoning.</p>
        </>
      )
    },
    {
      id: 'cs7',
      discipline: 'Mathematics',
  title: 'Optimization in Real-World Contexts',
      old: (
        <>
          <p className="mb-2">“Find the maximum area of a rectangle inscribed under the curve <InlineMath math={'y = 12 - x^2'} />.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI generates a real-world version: ‘A conservation biologist is building an enclosure with a parabolic boundary <InlineMath math={'y = 12 - x^2'} />. What dimensions maximize space while minimizing fencing cost?’</p>
          <p className="mb-2">Students interpret the optimization in context, adding assumptions and constraints.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for context-based problem generation prompts.</em>
        </>
      )
    },
    {
      id: 'cs8',
      discipline: 'Mathematics',
  title: 'Statistical Reasoning Scenario',
      old: (
        <>
          <p className="mb-2">“Given a dataset, compute mean and standard deviation.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI generates messy, real-world datasets (e.g., survey responses with missing values).</p>
          <p className="mb-2">The scenario: ‘You are analyzing field data on ocean temperature anomalies — what’s the impact of outliers on your conclusion?’</p>
          <p className="mb-2">Students decide how to clean, interpret, and justify results.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that generate imperfect or authentic datasets.</em>
        </>
      )
    },
    {
      id: 'cs2',
      discipline: 'Biology',
  title: 'Antibiotic Resistance',
      old: (<><p className="mb-2">A patient’s bacterial infection is no longer responding to antibiotics. Explain how resistance develops.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Provide three simulated patient scenarios where the infection outcomes differ. Ask students to:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Identify the likely genetic or environmental factors driving resistance.</li>
            <li>Predict how bacterial population dynamics change over treatment cycles.</li>
            <li>Evaluate potential public health interventions to reduce resistance.</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 AI can generate hypothetical patient records or bacterial mutation patterns.</p>
        </>
      )
    },
    {
      id: 'cs9',
      discipline: 'Biology',
  title: 'Genetic Inheritance Case',
      old: (
        <>
          <p className="mb-2">“Determine genotypic and phenotypic ratios from a Punnett square for a monohybrid cross.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI builds an extended case: ‘A population of plants shows unusual inheritance for flower color. Use genetic reasoning to determine whether incomplete dominance or codominance explains the pattern.’</p>
          <p className="mb-2">Include randomly generated phenotypic data for interpretation.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that generate variable genetic datasets.</em>
        </>
      )
    },
    {
      id: 'cs10',
      discipline: 'Biology',
  title: 'Ecology Field Simulation',
      old: (
        <>
          <p className="mb-2">“Describe predator-prey relationships in a forest ecosystem.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI simulates changing variables (deforestation rate, species introduction) and asks students to predict ecological balance shifts.</p>
          <p className="mb-2">Scenario: ‘A new invasive species enters the forest — model the likely impact on biodiversity over five years.’”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for ecological simulation prompts.</em>
        </>
      )
    },
    {
      id: 'cs3',
      discipline: 'Physics',
  title: 'Energy Transfer',
      old: (<><p className="mb-2">A 2-kg block slides down a frictionless incline. Calculate its velocity at the bottom.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Instead of a single calculation, pose a “what if” scenario:</p>
          <p className="mb-2">The incline material, surface texture, and environmental conditions now vary (ice, sandpaper, steel).</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Ask: How would energy transfer and efficiency differ in each case?</li>
            <li>Have students propose a real-world analogy (e.g., ski slope vs factory conveyor).</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 AI can generate realistic material data tables or comparative simulation inputs.</p>
        </>
      )
    },
    {
      id: 'cs11',
      discipline: 'Physics',
  title: 'Energy Transfer in Systems',
      old: (
        <>
          <p className="mb-2">“Calculate kinetic and potential energy in a pendulum at given positions.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI generates a realistic engineering scenario: ‘Design a pendulum-based sensor for earthquake detection. How would amplitude, damping, and period affect accuracy?’</p>
          <p className="mb-2">Students connect theory to device function.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for engineering application prompts.</em>
        </>
      )
    },
    {
      id: 'cs12',
      discipline: 'Physics',
  title: 'Thermal Expansion',
      old: (
        <>
          <p className="mb-2">“Compute the linear expansion of a metal rod given temperature change.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI generates an applied scenario: ‘A bridge designer must account for daily temperature shifts between -10°C and 40°C. Predict stress and expansion impact on bridge joints.’</p>
          <p className="mb-2">Visual output: color map of stress distribution.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that turn equations into applied design cases.</em>
        </>
      )
    },
    {
      id: 'cs4',
      discipline: 'Chemistry and Chemical Biology',
  title: 'Drug Interaction Scenarios',
      old: (<><p className="mb-2">Describe how pH affects drug solubility in the human body.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Present a scenario where two patients metabolize the same drug differently. Ask students to:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Explain how pH and enzyme variation affect absorption rates.</li>
            <li>Propose an adjusted dosage strategy for each patient.</li>
            <li>Reflect: How could AI-assisted simulations support personalized medicine?</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 AI can create mock pharmacokinetic profiles or patient variables.</p>
        </>
      )
    },
    {
      id: 'cs13',
      discipline: 'Chemistry and Chemical Biology',
  title: 'Pharmaceutical Synthesis Pathway',
      old: (
        <>
          <p className="mb-2">“Draw the steps in synthesizing aspirin from salicylic acid.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI builds an open-ended case: ‘A pharmaceutical chemist must optimize aspirin yield under new environmental regulations limiting solvent use.’</p>
          <p className="mb-2">Students propose greener synthesis routes and compare trade-offs.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that build sustainability or optimization-based chemistry cases.</em>
        </>
      )
    },
    {
      id: 'cs14',
      discipline: 'Chemistry and Chemical Biology',
  title: 'Reaction Kinetics in Industry',
      old: (
        <>
          <p className="mb-2">“Calculate rate constants from given data.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI produces a scenario: ‘A reactor at 450 K shows a sudden drop in product concentration. Use kinetic data to diagnose whether it’s due to temperature fluctuation or catalyst poisoning.’</p>
          <p className="mb-2">Students interpret graphical data generated by AI.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that simulate lab data for analysis.</em>
        </>
      )
    },
    {
      id: 'cs5',
      discipline: 'Marine and Environmental Sciences',
  title: 'Coral Bleaching Crisis',
      old: (<><p className="mb-2">Explain how rising ocean temperatures cause coral bleaching.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Provide three short AI-generated news headlines describing recent bleaching events. Ask students to:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Compare media interpretations vs. scientific explanations.</li>
            <li>Identify missing data or oversimplifications.</li>
            <li>Develop a local action plan that integrates both science and policy.</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 Connects scientific reasoning with communication literacy.</p>
        </>
      )
    },
    {
      id: 'cs15',
      discipline: 'Marine and Environmental Sciences',
  title: 'Coral Bleaching Case',
      old: (
        <>
          <p className="mb-2">“Explain the relationship between temperature rise and coral bleaching.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI builds a regional case: ‘In 2024, reef surveys near Key Largo show a 15% drop in coral cover. Using temperature and pH data, predict long-term ecosystem outcomes and propose a monitoring strategy.’</p>
          <p className="mb-2">Students engage in quantitative forecasting.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for data storytelling prompts.</em>
        </>
      )
    },
    {
      id: 'cs16',
      discipline: 'Marine and Environmental Sciences',
  title: 'Oil Spill Impact Modeling',
      old: (
        <>
          <p className="mb-2">“Describe the environmental effects of oil spills.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI simulates an offshore spill, generating varying current speeds and wind directions.</p>
          <p className="mb-2">Scenario: ‘Predict which coastal zones will be most affected and outline containment priorities.’</p>
          <p className="mb-2">Students justify intervention sequence.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that create spatial simulation cases.</em>
        </>
      )
    },
    {
      id: 'cs6',
      discipline: 'Psychology',
  title: 'Stress and Decision-Making',
      old: (<><p className="mb-2">Describe how stress affects decision-making in adults.</p></>),
      redesigned: (
        <>
          <p className="mb-2">Present an AI-generated workplace dilemma involving a manager under stress. Ask students to:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[13px]">
            <li>Analyze the decision-making errors made under pressure.</li>
            <li>Apply at least two psychological theories (e.g., cognitive appraisal, dual-process theory).</li>
            <li>Suggest evidence-based strategies to improve judgment accuracy.</li>
          </ol>
          <p className="mt-3 text-[12px] italic text-gray-600">💡 AI can generate role-play dialogues or simulate emotional cues.</p>
        </>
      )
    }
    ,{
      id: 'cs17',
      discipline: 'Psychology',
  title: 'Cognitive Load in Learning',
      old: (
        <>
          <p className="mb-2">“Discuss intrinsic and extraneous cognitive load.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI creates a classroom case: ‘Students in two online courses show differing retention rates. Analyze whether interface design or instructional pacing contributes to extraneous load.’</p>
          <p className="mb-2">Students propose redesign strategies.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for learning scenario generation prompts.</em>
        </>
      )
    },
    {
      id: 'cs18',
      discipline: 'Psychology',
  title: 'Social Influence and Ethics',
      old: (
        <>
          <p className="mb-2">“Define conformity and obedience.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI generates an ethics simulation: ‘A research assistant notices participants under peer pressure to alter responses in a group task. Evaluate ethical duties and how the researcher should respond.’</p>
          <p className="mb-2">Discussion focuses on experimental validity and moral reasoning.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for ethics simulation prompts.</em>
        </>
      )
    },
  ];

  // Scaffold student work examples (fourth accordion panel)
  const SCAFFOLD_EXAMPLES: { id: string; discipline: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[] = [
    // MATHEMATICS
    {
      id: 'scaf-math-1',
      discipline: 'Mathematics',
      title: 'Problem Solving in Calculus',
      old: (
        <>
          <p className="mb-2">“Find the area bounded by <InlineMath math={'y = x^2'} /> and <InlineMath math={'y = 4x - x^2'} />.”</p>
        </>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI helps turn this into a guided discovery process:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Sketch both curves and identify intersection points.</li>
            <li>Ask: which curve lies above the other in the region of interest?</li>
            <li>Write the integral that represents the area and explain your setup before solving.</li>
            <li>Reflect: what does the intersection point represent in the context of area?”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that guide students through multi-step problem-solving.</em>
        </>
      )
    },
    {
      id: 'scaf-math-2',
      discipline: 'Mathematics',
      title: 'Linear Algebra Concept Building',
      old: (
        <p className="mb-2">“Determine if the following vectors are linearly independent.”</p>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI breaks the task into steps:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Define what ‘linear independence’ means in your own words.</li>
            <li>Construct the corresponding matrix and write the system of equations.</li>
            <li>Predict what you expect before solving.</li>
            <li>After solving, compare your intuition to the result.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for reasoning-scaffold templates.</em>
        </>
      )
    },
    // BIOLOGY
    {
      id: 'scaf-bio-1',
      discipline: 'Biology',
      title: 'Cell Transport Mechanisms',
      old: (<p className="mb-2">“Explain the difference between active and passive transport.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates a scaffold:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Identify 3 examples of substances transported by each mechanism.</li>
            <li>Predict energy requirements for each.</li>
            <li>Explain how membrane structure affects the process.</li>
            <li>Summarize your findings in a comparative table.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for step-by-step explanation prompts.</em>
        </>
      )
    },
    {
      id: 'scaf-bio-2',
      discipline: 'Biology',
      title: 'Genetic Mutation Analysis',
      old: (<p className="mb-2">“Describe how point mutations can affect protein function.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI prompts students through reasoning:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Recall: what are the three types of point mutations?</li>
            <li>Predict the likely consequence of each.</li>
            <li>Analyze: given a DNA sequence change, determine whether it causes a silent, missense, or nonsense mutation.</li>
            <li>Explain your reasoning before checking with AI feedback.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for scaffold templates that integrate reasoning and verification.</em>
        </>
      )
    },
    // PHYSICS
    {
      id: 'scaf-phys-1',
      discipline: 'Physics',
      title: 'Electric Field Reasoning',
      old: (<p className="mb-2">“Calculate the electric field 2 cm away from a point charge of 5 µC.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI builds a scaffold:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Recall the formula for an electric field.</li>
            <li>Write what each variable represents.</li>
            <li>Before calculating, predict whether increasing the distance doubles or halves the field.</li>
            <li>Calculate and compare your prediction to the result.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for conceptual reasoning scaffolds.</em>
        </>
      )
    },
    {
      id: 'scaf-phys-2',
      discipline: 'Physics',
      title: 'Energy Conservation',
      old: (<p className="mb-2">“A 2 kg mass is dropped from 5 m. Find its velocity when it hits the ground.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI creates a reasoning sequence:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>List all forms of energy in the system initially and finally.</li>
            <li>Write the energy conservation equation.</li>
            <li>Before solving, estimate whether the velocity will be greater or less than 10 m/s.</li>
            <li>Reflect on how potential energy converts to kinetic energy.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for structured estimation prompts.</em>
        </>
      )
    },
    // CHEMISTRY
    {
      id: 'scaf-chem-1',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Reaction Mechanisms',
      old: (<p className="mb-2">“Draw the mechanism for the nucleophilic substitution of methyl bromide by hydroxide.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI scaffolds reasoning:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Predict which atom is electrophilic and why.</li>
            <li>Identify the leaving group and justify its stability.</li>
            <li>Sketch the intermediate structure before the substitution.</li>
            <li>Compare SN1 and SN2 pathways for this reaction.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for scaffold templates using guided chemical reasoning.</em>
        </>
      )
    },
    {
      id: 'scaf-chem-2',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Thermochemistry',
      old: (<p className="mb-2">“Calculate the enthalpy change for the combustion of methane.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI helps students think sequentially:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Recall the definition of enthalpy change.</li>
            <li>Write the balanced combustion equation.</li>
            <li>Identify bonds broken and formed.</li>
            <li>Use bond enthalpies to estimate ΔH.</li>
            <li>Discuss why experimental and calculated values may differ.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for multi-step quantitative scaffolds.</em>
        </>
      )
    },
    // MARINE & ENVIRONMENTAL
    {
      id: 'scaf-marine-1',
      discipline: 'Marine and Environmental Sciences',
      title: 'Ocean Current Modeling',
      old: (<p className="mb-2">“Describe the factors affecting ocean currents.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI structures a scaffold:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>List physical (wind, salinity, temperature) and geographic (Coriolis effect) factors.</li>
            <li>Predict how each changes current direction and speed.</li>
            <li>Match real-world examples to each mechanism.</li>
            <li>Use AI to visualize a current map for discussion.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for visualization scaffold prompts.</em>
        </>
      )
    },
    {
      id: 'scaf-marine-2',
      discipline: 'Marine and Environmental Sciences',
      title: 'Environmental Policy Analysis',
      old: (<p className="mb-2">“Discuss the impact of plastic waste on marine ecosystems.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI turns it into guided inquiry:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Identify 3 main sources of plastic pollution.</li>
            <li>Classify effects (biological, chemical, socioeconomic).</li>
            <li>Research current policy responses in two countries.</li>
            <li>Propose one improvement and justify it.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for critical thinking scaffolds.</em>
        </>
      )
    },
    // PSYCHOLOGY
    {
      id: 'scaf-psych-1',
      discipline: 'Psychology',
      title: 'Memory and Recall',
      old: (<p className="mb-2">“Explain the difference between short-term and long-term memory.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates scaffolded flow:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Define both memory types.</li>
            <li>Identify one biological and one behavioral factor affecting each.</li>
            <li>Compare retrieval processes using examples.</li>
            <li>Summarize in a table or diagram.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for prompts that scaffold comparison reasoning.</em>
        </>
      )
    },
    {
      id: 'scaf-psych-2',
      discipline: 'Psychology',
      title: 'Experimental Design',
      old: (<p className="mb-2">“Design an experiment to test the effect of sleep deprivation on concentration.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI scaffolds scientific thinking:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Define your hypothesis and variables.</li>
            <li>Describe your control and experimental groups.</li>
            <li>Predict possible confounds and how to manage them.</li>
            <li>Write the step-by-step procedure and expected results.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for scaffold templates for hypothesis-driven design.</em>
        </>
      )
    }
  ];

  // In-class activities examples (fifth accordion panel)
  const INCLASS_EXAMPLES: { id: string; discipline: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[] = [
    // MATHEMATICS
    {
      id: 'act-math-1',
      discipline: 'Mathematics',
      title: 'Collaborative Proof Building',
      old: (
        <p className="mb-2">“Individually prove that the sum of the first <InlineMath math={'n'} /> odd numbers equals <InlineMath math={'n^2'} />.”</p>
      ),
      redesigned: (
        <>
          <p className="mb-2">“AI helps generate structured prompts for group exploration:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Each group receives a different value of <InlineMath math={'n'} /> and visualizes the pattern (using AI-generated diagrams).</li>
            <li>Groups predict the general formula <InlineMath math={'n^2'} />.</li>
            <li>Together, they construct a step-by-step proof and explain it visually.</li>
            <li>AI summarizes common reasoning errors for review.”</li>
          </ol>
          <div className="mt-3">
            <BlockMath math={'\\sum_{k=1}^{n} (2k-1) = n^2'} />
          </div>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for collaborative proof generation prompts.</em>
        </>
      )
    },
    {
      id: 'act-math-2',
      discipline: 'Mathematics',
      title: 'Data Modeling Discussion',
      old: (<p className="mb-2">“Fit a line to a set of data points and find the correlation coefficient.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates diverse, real-world datasets (e.g., rainfall vs. crop yield, time vs. bacteria growth).</p>
          <p className="mb-2">Students compare data patterns, identify outliers, and discuss model fit in groups.</p>
          <p className="mb-2">AI provides visual feedback and alternate model suggestions for comparison.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for data-based discussion prompts.</em>
        </>
      )
    },
    // BIOLOGY
    {
      id: 'act-bio-1',
      discipline: 'Biology',
      title: 'Simulating Natural Selection',
      old: (<p className="mb-2">“Describe how natural selection operates in a population of beetles.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates a simulation where beetle color, environment, and predator type vary.</p>
          <p className="mb-2">Each student group manipulates one variable and observes outcomes.</p>
          <p className="mb-2">The class then compares which trait combinations survive best and why.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for simulation setup prompts.</em>
        </>
      )
    },
    {
      id: 'act-bio-2',
      discipline: 'Biology',
      title: 'Exploring Enzyme Function',
      old: (<p className="mb-2">“List the factors that affect enzyme activity.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI creates virtual experiments:</p>
          <p className="mb-2">Groups receive temperature and pH conditions from AI.</p>
          <p className="mb-2">They hypothesize outcomes, then use AI-generated plots to interpret how enzyme rate changes.</p>
          <p className="mb-2">Discussion centers on kinetic reasoning and error interpretation.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for virtual lab prompts.</em>
        </>
      )
    },
    // PHYSICS
    {
      id: 'act-phys-1',
      discipline: 'Physics',
      title: 'Projectile Motion Challenge',
      old: (<p className="mb-2">“Calculate the maximum height of a projectile launched at <InlineMath math={'30^\\circ'} /> with velocity <InlineMath math={'20\\, \\text{m/s}'} />.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI transforms it into a lab-style team challenge:</p>
          <p className="mb-2">Each group chooses a different launch angle <InlineMath math={'\\theta'} /> and predicts which yields the farthest distance.</p>
          <p className="mb-2">AI simulates trajectories, visualizes the parabolic paths, and introduces random wind effects for critical discussion.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for simulation activity prompts.</em>
        </>
      )
    },
    {
      id: 'act-phys-2',
      discipline: 'Physics',
      title: 'Conceptual Debate — Newton’s Third Law',
      old: (<p className="mb-2">“State Newton’s Third Law of Motion.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI prompts small groups with everyday examples that appear to ‘violate’ the law (e.g., jumping off a skateboard, tug-of-war).</p>
          <p className="mb-2">Students argue for or against the idea that forces are always equal and opposite.</p>
          <p className="mb-2">AI moderates by generating clarifying visuals or counterexamples.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for misconception-based activity prompts.</em>
        </>
      )
    },
    // CHEMISTRY
    {
      id: 'act-chem-1',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Predicting Reaction Outcomes',
      old: (<p className="mb-2">“Write the products of the reaction between sodium and water.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI builds a reactive simulation:</p>
          <ol className="list-decimal pl-5 space-y-1 text-[13px] mt-2">
            <li>Groups predict products and relative energy release.</li>
            <li>AI generates animated molecular interactions.</li>
            <li>Students compare predictions to observed simulation results and discuss safety implications.”</li>
          </ol>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for visualization activity prompts.</em>
        </>
      )
    },
    {
      id: 'act-chem-2',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Chemical Equilibrium Exploration',
      old: (<p className="mb-2">“Explain Le Chatelier’s principle.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates interactive equilibrium diagrams showing concentration changes when temperature or pressure is altered.</p>
          <p className="mb-2">Students manipulate conditions and discuss equilibrium shifts in real time.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for interactive conceptual prompts.</em>
        </>
      )
    },
    // MARINE & ENVIRONMENTAL
    {
      id: 'act-marine-1',
      discipline: 'Marine and Environmental Sciences',
      title: 'Carbon Cycle Simulation',
      old: (<p className="mb-2">“Describe the carbon cycle in marine ecosystems.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI creates a virtual scenario where students track carbon flow across different ocean layers.</p>
          <p className="mb-2">Groups manipulate temperature, CO₂ levels, and phytoplankton density to observe cycle shifts.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for system simulation prompts.</em>
        </>
      )
    },
    {
      id: 'act-marine-2',
      discipline: 'Marine and Environmental Sciences',
      title: 'Oil Spill Response Simulation',
      old: (<p className="mb-2">“List methods for cleaning oil spills.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI simulates a coastal spill; each group represents a different stakeholder (scientist, policy maker, local community).</p>
          <p className="mb-2">They use AI-provided data (currents, wind, toxicity) to make decisions and defend trade-offs.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for role-play simulation prompts.</em>
        </>
      )
    },
    // PSYCHOLOGY
    {
      id: 'act-psych-1',
      discipline: 'Psychology',
      title: 'Group Decision Bias',
      old: (<p className="mb-2">“Define groupthink.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI sets up a class scenario:</p>
          <p className="mb-2">Groups act as research teams making a risky funding decision with AI-generated evidence.</p>
          <p className="mb-2">They reflect on how bias, conformity, or leadership style influenced their choice.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for interactive scenario prompts.</em>
        </>
      )
    },
    {
      id: 'act-psych-2',
      discipline: 'Psychology',
      title: 'Reaction Time Experiment',
      old: (<p className="mb-2">“Explain how attention affects reaction time.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI provides a digital stopwatch or visual cue simulation.</p>
          <p className="mb-2">Students record reaction times under distraction vs. focus conditions.</p>
          <p className="mb-2">They analyze group data and discuss neural mechanisms of attention.”</p>
          <em className="block text-[12px] text-gray-600">See the <a className="underline decoration-dotted" href="/explore/prompts">Prompt Library</a> for experiment generation prompts.</em>
        </>
      )
    }
  ];

  // Feedback & Rubrics examples (sixth accordion panel)
  const FEEDBACK_EXAMPLES: { id: string; discipline: string; title: string; old: React.ReactNode; redesigned: React.ReactNode }[] = [
    // MATHEMATICS
    {
      id: 'fb-math-1',
      discipline: 'Mathematics',
      title: 'Feedback on Proof Clarity',
      old: (<p className="mb-2">“Grade students’ written proofs of the Pythagorean theorem.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI generates rubric categories such as:”</p>
          <ul className="list-disc pl-5 text-[13px] space-y-1">
            <li>Logical structure</li>
            <li>Completeness of reasoning</li>
            <li>Clarity of notation</li>
            <li>Explanation of steps</li>
          </ul>
          <p className="mt-3 text-[13px] leading-relaxed">Then provides sample comments like:<br />‘The proof is logically sound but misses justification for the step from <InlineMath math={'a^2 + b^2'} /> to <InlineMath math={'c^2'} />. Try explaining this transition explicitly.’</p>
          <p className="mt-2 text-[13px] leading-relaxed">Students can use the same rubric to self-assess before submission.”</p>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for proof feedback and rubric templates.</em>
        </>
      )
    },
    {
      id: 'fb-math-2',
      discipline: 'Mathematics',
      title: 'Conceptual Feedback on Calculus Problems',
      old: (<p className="mb-2">“Collect student solutions to derivative problems and mark right/wrong.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI analyzes solution steps and highlights conceptual patterns:”</p>
          <ul className="list-disc pl-5 text-[13px] space-y-1">
            <li>Misapplied product rule</li>
            <li>Missing chain rule</li>
            <li>Sign errors</li>
          </ul>
          <p className="mt-3 text-[13px] leading-relaxed">For example:<br />‘You correctly used the power rule for <InlineMath math={'x^3'} />, but forgot to apply the chain rule to <InlineMath math={'\\sin(x^2)'} />.’</p>
          <p className="mt-2 text-[13px] leading-relaxed">AI then generates reflection prompts like,<br />‘At which step did the rule confusion occur? What might you check next time?’”</p>
          <em className="block text-[12px] text-gray-600 mt-3">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for diagnostic feedback prompts.</em>
        </>
      )
    },
    // BIOLOGY
    {
      id: 'fb-bio-1',
      discipline: 'Biology',
      title: 'Lab Report Feedback',
      old: (<p className="mb-2">“Provide general written comments on lab reports.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI creates targeted rubric categories — hypothesis clarity, experimental design, data interpretation, and discussion strength — and offers examples of high-quality feedback like:<br />‘Your hypothesis was clear, but the methods section needs more detail on controls used.’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">It can also highlight patterns across the class to help you adjust teaching focus.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for lab report rubric generation prompts.</em>
        </>
      )
    },
    {
      id: 'fb-bio-2',
      discipline: 'Biology',
      title: 'Concept Understanding',
      old: (<p className="mb-2">“Mark short answers on cell division for accuracy.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI clusters responses by misconception type (e.g., ‘confusing mitosis and meiosis’).”</p>
          <p className="mb-2 text-[13px] leading-relaxed">It then suggests feedback stems such as:<br />‘Many students describe crossing-over as part of mitosis; revisit how meiosis differs structurally and functionally.’”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for misconception pattern feedback prompts.</em>
        </>
      )
    },
    // PHYSICS
    {
      id: 'fb-phys-1',
      discipline: 'Physics',
      title: 'Problem-Solving Rubric',
      old: (<p className="mb-2">“Grade kinematics problems with a single right/wrong score.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI builds a multi-dimensional rubric:”</p>
          <ul className="list-disc pl-5 text-[13px] space-y-1">
            <li>Setup correctness</li>
            <li>Formula selection</li>
            <li>Logical reasoning</li>
            <li>Final computation</li>
          </ul>
          <p className="mt-3 text-[13px] leading-relaxed">For instance, if a student calculates projectile height using <InlineMath math={'v^2 = u^2 + 2as'} />, AI can respond: ‘Formula chosen correctly, but variable substitution used <InlineMath math={'a = -9.8'} /> instead of <InlineMath math={'a = -g'} /> — explain your choice.’”</p>
          <em className="block text-[12px] text-gray-600 mt-2">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for rubric-based feedback prompts.</em>
        </>
      )
    },
    {
      id: 'fb-phys-2',
      discipline: 'Physics',
      title: 'Conceptual Physics Essays',
      old: (<p className="mb-2">“Students submit essays explaining Newton’s laws; you manually grade clarity and accuracy.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI provides preliminary comments, such as:<br />‘Excellent connection between force and acceleration, but lacks examples showing equal and opposite interactions.’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">You then refine and personalize these comments before returning feedback.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for essay comment-generation prompts.</em>
        </>
      )
    },
    // CHEMISTRY
    {
      id: 'fb-chem-1',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Reaction Mechanism Feedback',
      old: (<p className="mb-2">“Grade organic reaction mechanisms for accuracy.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI identifies key reasoning gaps:<br />‘Arrow-pushing is correct for the first step, but carbocation rearrangement missing in second step.’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">It then builds a rubric emphasizing:</p>
          <ul className="list-disc pl-5 text-[13px] space-y-1">
            <li>Mechanistic accuracy</li>
            <li>Intermediate stability</li>
            <li>Structural reasoning</li>
          </ul>
          <em className="block text-[12px] text-gray-600 mt-2">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for organic mechanism feedback prompts.</em>
        </>
      )
    },
    {
      id: 'fb-chem-2',
      discipline: 'Chemistry and Chemical Biology',
      title: 'Lab Safety Reflection',
      old: (<p className="mb-2">“Provide verbal feedback on lab safety quiz answers.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI aggregates responses to find misconceptions (e.g., confusing corrosive vs. toxic).”</p>
          <p className="mb-2 text-[13px] leading-relaxed">It generates individualized safety notes and a rubric like:</p>
          <ul className="list-disc pl-5 text-[13px] space-y-1">
            <li>Identification accuracy</li>
            <li>Correct safety response</li>
            <li>Explanation clarity</li>
          </ul>
          <em className="block text-[12px] text-gray-600 mt-2">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for rubric reflection prompts.</em>
        </>
      )
    },
    // MARINE & ENVIRONMENTAL
    {
      id: 'fb-marine-1',
      discipline: 'Marine and Environmental Sciences',
      title: 'Field Report Feedback',
      old: (<p className="mb-2">“Provide short comments on marine sampling field reports.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI reviews sample reports for structure and clarity:<br />‘Your observations are detailed but lack quantitative salinity data.’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">It creates a rubric emphasizing data precision, environmental context, and analysis depth.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for fieldwork rubric prompts.</em>
        </>
      )
    },
    {
      id: 'fb-marine-2',
      discipline: 'Marine and Environmental Sciences',
      title: 'Climate Data Interpretation',
      old: (<p className="mb-2">“Mark plots showing CO₂ and temperature correlation.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI detects common graphing errors (axes swapped, missing labels) and provides targeted notes:<br />‘Your plot correctly shows CO₂ rise, but time scale inconsistencies make correlation misleading — recheck your x-axis intervals.’”</p>
          <em className="block text-[12px] text-gray-600 mt-1">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for visualization feedback prompts.</em>
        </>
      )
    },
    // PSYCHOLOGY
    {
      id: 'fb-psych-1',
      discipline: 'Psychology',
      title: 'Essay Feedback Rubric',
      old: (<p className="mb-2">“Grade reflection essays on cognitive biases manually.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI develops rubric categories — conceptual understanding, personal reflection, clarity, and application.</p>
          <p className="mb-2 text-[13px] leading-relaxed">It generates example comments like:<br />‘You explained confirmation bias well but didn’t relate it to your own decision-making experience.’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">Faculty can then edit and personalize before releasing.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for essay rubric templates.</em>
        </>
      )
    },
    {
      id: 'fb-psych-2',
      discipline: 'Psychology',
      title: 'Research Design Evaluation',
      old: (<p className="mb-2">“Give feedback on experimental design assignments.”</p>),
      redesigned: (
        <>
          <p className="mb-2">“AI compares student methods to good-practice examples, suggesting improvements like:<br />‘Your control condition needs clearer description — what variable remains constant?’”</p>
          <p className="mb-2 text-[13px] leading-relaxed">AI also produces a rubric outline including reliability, validity, and ethics.”</p>
          <em className="block text-[12px] text-gray-600">See the <a href="/explore/prompts" className="underline decoration-dotted">Prompt Library</a> for experimental design feedback prompts.</em>
        </>
      )
    }
  ];

  const [openExampleIds, setOpenExampleIds] = useState<Set<string>>(new Set());
  const toggleExample = (id: string) => {
    setOpenExampleIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggle = (idx: number) => setOpenIndex(prev => prev === idx ? null : idx);

  // Accent color configuration for each panel (index aligned with ACCORDION_ITEMS)
  const ACCENT_CONFIG: { text: string; textHover: string; textExpanded: string; borderExpanded: string; borderHover: string; ring: string; iconCollapsed: string; iconHover: string; iconExpanded: string }[] = [
    { // Redesign Assignments - Title text matches page subtitle (red-700), coral accents retained for borders/icons
      text: 'text-red-700/90', textHover: 'group-hover:text-red-700', textExpanded: 'text-red-700',
      borderExpanded: 'border-l-[#e85c4a]', borderHover: 'hover:border-l-[#f07a68]', ring: 'focus-visible:ring-[#e85c4a]',
      iconCollapsed: 'text-[#f3a396]', iconHover: 'group-hover:text-[#e85c4a]', iconExpanded: 'text-[#e85c4a]'
    },
    { // Generate Lecture Notes & Misconceptions - Blue
      text: 'text-blue-800/90', textHover: 'group-hover:text-blue-800', textExpanded: 'text-blue-800',
      borderExpanded: 'border-l-blue-500/80', borderHover: 'hover:border-l-blue-400/70', ring: 'focus-visible:ring-blue-600',
      iconCollapsed: 'text-blue-400', iconHover: 'group-hover:text-blue-500', iconExpanded: 'text-blue-500'
    },
    { // Create Case Studies & Scenarios - Green
      text: 'text-green-800/90', textHover: 'group-hover:text-green-800', textExpanded: 'text-green-800',
      borderExpanded: 'border-l-green-500/80', borderHover: 'hover:border-l-green-400/70', ring: 'focus-visible:ring-green-600',
      iconCollapsed: 'text-green-400', iconHover: 'group-hover:text-green-500', iconExpanded: 'text-green-500'
    },
    { // Scaffold Student Work - Orange
      text: 'text-orange-800/90', textHover: 'group-hover:text-orange-800', textExpanded: 'text-orange-800',
      borderExpanded: 'border-l-orange-500/80', borderHover: 'hover:border-l-orange-400/70', ring: 'focus-visible:ring-orange-600',
      iconCollapsed: 'text-orange-400', iconHover: 'group-hover:text-orange-500', iconExpanded: 'text-orange-500'
    },
    { // Build In-Class Activities - Purple
      text: 'text-purple-800/90', textHover: 'group-hover:text-purple-800', textExpanded: 'text-purple-800',
      borderExpanded: 'border-l-purple-500/80', borderHover: 'hover:border-l-purple-400/70', ring: 'focus-visible:ring-purple-600',
      iconCollapsed: 'text-purple-400', iconHover: 'group-hover:text-purple-500', iconExpanded: 'text-purple-500'
    },
    { // Use AI for Feedback & Rubrics - Teal
      text: 'text-teal-800/90', textHover: 'group-hover:text-teal-800', textExpanded: 'text-teal-800',
      borderExpanded: 'border-l-teal-500/80', borderHover: 'hover:border-l-teal-400/70', ring: 'focus-visible:ring-teal-600',
      iconCollapsed: 'text-teal-400', iconHover: 'group-hover:text-teal-500', iconExpanded: 'text-teal-500'
    },
    // Fallback (if more items added later)
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 md:py-16 px-5">
      <header className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Getting Started: <span className="text-red-700 italic">Practical Ways to Use AI in Your Teaching</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          AI can be a powerful teaching assistant when used thoughtfully. This toolkit offers starting points for exploring how AI might enrich your teaching—adapt these ideas to fit your course, your students, and your context.
        </p>
      </header>

      <ul className="space-y-4" role="list">
        {ACCORDION_ITEMS.map((label, idx) => {
          const expanded = openIndex === idx;
          const accent = ACCENT_CONFIG[idx] || ACCENT_CONFIG[0];
          return (
            <li key={label} className="rounded-2xl overflow-hidden transition-colors shadow-sm relative bg-white border border-gray-200">
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={expanded}
                className={[
                  'w-full flex items-center justify-between gap-4 text-left pl-4 pr-5 py-4 md:py-5 focus:outline-none focus-visible:ring-2 group border-l-4',
                  expanded ? accent.borderExpanded : `border-l-transparent ${accent.borderHover}`,
                  accent.ring
                ].join(' ')}
              >
                <span className={[
                  'font-semibold text-base md:text-lg tracking-tight transition-colors',
                  expanded ? accent.textExpanded : `${accent.text} ${accent.textHover}`
                ].join(' ')}>{label}</span>
                <span className={[
                  'shrink-0 transition-colors',
                  expanded ? accent.iconExpanded : `${accent.iconCollapsed} ${accent.iconHover}`
                ].join(' ')}>
                  <svg className={`w-5 h-5 transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </span>
              </button>
              <div
                role="region"
                aria-hidden={!expanded}
                className={`px-5 pt-0 pb-5 md:pb-6 text-sm text-gray-600 transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? 'grid' : 'grid'} ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} overflow-hidden`}
              >
                <div className="overflow-hidden">
                  {idx === 0 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#443a33]">
                        AI can help you redesign assignments so students must think critically, synthesize ideas, and apply knowledge — not just copy answers from AI. Use this space to experiment with your own assignments and see how they could be reframed.
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#4f4540] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {DISCIPLINE_EXAMPLES[selectedDiscipline] && DISCIPLINE_EXAMPLES[selectedDiscipline].length > 0 ? (
                          <ul className="space-y-4">
                            {DISCIPLINE_EXAMPLES[selectedDiscipline].map(ex => {
                              const open = openExampleIds.has(ex.id);
                              return (
                                <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                  <button
                                    type="button"
                                    onClick={() => toggleExample(ex.id)}
                                    aria-expanded={open}
                                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                  >
                                    <span className="flex items-center gap-3">
                                      <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                      <span className="font-medium text-[13px] md:text-sm text-[#5a3d37] tracking-tight">{ex.title}</span>
                                    </span>
                                    <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                  </button>
                                  <div
                                    className={`transition-all duration-500 ease-out ${open ? 'max-h-[900px]' : 'max-h-0'} overflow-hidden`}
                                    aria-hidden={!open}
                                  >
                                    {open && (
                                      <div className="px-5 pb-5 pt-0 space-y-5">
                                        <div>
                                          <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Assignment</span></p>
                                          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">
                                            {ex.old}
                                          </div>
                                        </div>
                                        <div>
                                          <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>Redesigned Assignment</span></p>
                                          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">
                                            {ex.redesigned}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                        )}
                        {/* Prompt Tip Box */}
                        {selectedDiscipline === 'Mathematics' && (
                          <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                            <div className="mt-0.5 text-amber-500" aria-hidden="true">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                            </div>
                            <p className="text-[13px] leading-relaxed text-amber-800">
                              <span className="font-semibold text-amber-700">Prompt Tip:</span> Ask AI to “rewrite this assignment so it requires higher-order thinking skills” and include specific learning outcomes. Focus on <span className="font-medium italic">evaluation</span>, <span className="font-medium italic">synthesis</span>, or <span className="font-medium italic">comparison</span> — not simple recall.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : idx === 1 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#2f3742]">
                        AI can help you generate lecture notes that highlight common student misconceptions, simplify complex ideas, and create richer discussion prompts. Use this space to explore how AI might assist in clarifying tough concepts—while keeping your own expertise and voice at the center.
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar (reusing discipline state) */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#394248] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {(() => {
                          const filtered = LECTURE_EXAMPLES.filter(ex => ex.discipline === selectedDiscipline);
                          return filtered.length > 0 ? (
                            <ul className="space-y-4">
                              {filtered.map(ex => {
                                const open = openExampleIds.has(ex.id);
                                return (
                                  <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                    <button
                                      type="button"
                                      onClick={() => toggleExample(ex.id)}
                                      aria-expanded={open}
                                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                        <span className="font-medium text-[13px] md:text-sm text-[#32414a] tracking-tight">{ex.title}</span>
                                      </span>
                                      <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </button>
                                    <div className={`transition-all duration-500 ease-out ${open ? 'max-h-[1200px]' : 'max-h-0'} overflow-hidden`} aria-hidden={!open}>
                                      {open && (
                                        <div className="px-5 pb-5 pt-0 space-y-5">
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Lecture Note</span></p>
                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">
                                              {ex.old}
                                            </div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>AI-Enhanced Lecture Note</span></p>
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">
                                              {ex.redesigned}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                          );
                        })()}
                        {/* Prompt Tip Box */}
                        <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                          <div className="mt-0.5 text-amber-500" aria-hidden="true">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <p className="text-[13px] leading-relaxed text-amber-800">
                            <span className="font-semibold text-amber-700">Prompt Tip:</span> Ask AI to “generate lecture notes that include at least one common misconception and a conceptual question to challenge it.” Encourage AI to provide examples, analogies, or prompts that promote discussion—not memorization.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : idx === 2 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#2d3830]">
                        AI can help you design realistic, discipline-aligned case studies that encourage students to apply theory to practice. Use this space to explore how AI might help generate prompts, role-play situations, or ethical dilemmas that deepen analysis and reflection — not just provide “right” answers.
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar (shared discipline state) */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#374038] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {(() => {
                          const filtered = CASE_EXAMPLES.filter(ex => ex.discipline === selectedDiscipline);
                          return filtered.length > 0 ? (
                            <ul className="space-y-4">
                              {filtered.map(ex => {
                                const open = openExampleIds.has(ex.id);
                                return (
                                  <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                    <button
                                      type="button"
                                      onClick={() => toggleExample(ex.id)}
                                      aria-expanded={open}
                                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                        <span className="font-medium text-[13px] md:text-sm text-[#36423a] tracking-tight">{ex.title}</span>
                                      </span>
                                      <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </button>
                                    <div className={`transition-all duration-500 ease-out ${open ? 'max-h-[1400px]' : 'max-h-0'} overflow-hidden`} aria-hidden={!open}>
                                      {open && (
                                        <div className="px-5 pb-5 pt-0 space-y-5">
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Case</span></p>
                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">
                                              {ex.old}
                                            </div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>AI-Enhanced Case</span></p>
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">
                                              {ex.redesigned}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                          );
                        })()}
                        {/* Prompt Tip Box */}
                        <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                          <div className="mt-0.5 text-amber-500" aria-hidden="true">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <p className="text-[13px] leading-relaxed text-amber-800">
                            <span className="font-semibold text-amber-700">Prompt Tip:</span> Ask AI to “generate a short case scenario with realistic context, competing perspectives, and an ethical or analytical twist.” Encourage outputs that require students to explain reasoning, evaluate assumptions, or connect theory to practice.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : idx === 3 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#3d372f]">
                        “Scaffolding helps students learn by guiding them step-by-step through complex reasoning, rather than giving answers directly. AI can help instructors design structured prompts, hints, or reflection steps that build understanding gradually — supporting diverse learners at their own pace.”
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar (shared discipline state) */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#4a433f] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {(() => {
                          const filtered = SCAFFOLD_EXAMPLES.filter(ex => ex.discipline === selectedDiscipline);
                          return filtered.length > 0 ? (
                            <ul className="space-y-4">
                              {filtered.map(ex => {
                                const open = openExampleIds.has(ex.id);
                                return (
                                  <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                    <button
                                      type="button"
                                      onClick={() => toggleExample(ex.id)}
                                      aria-expanded={open}
                                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                        <span className="font-medium text-[13px] md:text-sm text-[#3d413f] tracking-tight">{ex.title}</span>
                                      </span>
                                      <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </button>
                                    <div className={`transition-all duration-500 ease-out ${open ? 'max-h-[900px]' : 'max-h-0'} overflow-hidden`} aria-hidden={!open}>
                                      {open && (
                                        <div className="px-5 pb-5 pt-0 space-y-5">
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Assignment</span></p>
                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">{ex.old}</div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>AI-Enhanced Scaffolded Version</span></p>
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">{ex.redesigned}</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                          );
                        })()}
                        {/* Prompt Tip Box */}
                        <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                          <div className="mt-0.5 text-amber-500" aria-hidden="true">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <p className="text-[13px] leading-relaxed text-amber-800">
                            <span className="font-semibold text-amber-700">Prompt Tip:</span> Scaffolding with AI helps students reason through complexity rather than skip to an answer. The goal isn’t to simplify the task — it’s to make thinking visible and structured.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : idx === 4 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#353a40]">
                        “In-class activities bring concepts to life and allow students to practice applying what they’ve learned.<br />AI can help you design dynamic, interactive exercises — from data simulations to ethical debates — that invite participation and deeper understanding.<br />The goal is to make learning active, collaborative, and reflective.”
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar (shared discipline state) */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#42484d] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {(() => {
                          const filtered = INCLASS_EXAMPLES.filter(ex => ex.discipline === selectedDiscipline);
                          return filtered.length > 0 ? (
                            <ul className="space-y-4">
                              {filtered.map(ex => {
                                const open = openExampleIds.has(ex.id);
                                return (
                                  <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                    <button
                                      type="button"
                                      onClick={() => toggleExample(ex.id)}
                                      aria-expanded={open}
                                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                        <span className="font-medium text-[13px] md:text-sm text-[#364047] tracking-tight">{ex.title}</span>
                                      </span>
                                      <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </button>
                                    <div className={`transition-all duration-500 ease-out ${open ? 'max-h-[900px]' : 'max-h-0'} overflow-hidden`} aria-hidden={!open}>
                                      {open && (
                                        <div className="px-5 pb-5 pt-0 space-y-5">
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Activity</span></p>
                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">{ex.old}</div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>AI-Enhanced Activity</span></p>
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">{ex.redesigned}</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                          );
                        })()}
                        {/* Prompt Tip Box */}
                        <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                          <div className="mt-0.5 text-amber-500" aria-hidden="true">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <p className="text-[13px] leading-relaxed text-amber-800">
                            <span className="font-semibold text-amber-700">Prompt Tip:</span> AI can make in-class activities vivid and experiential — from generating data to moderating debates. Use it to simulate complexity, introduce unpredictability, or visualize invisible processes.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : idx === 5 ? (
                    <div className="space-y-8 pt-5">
                      <p className="text-sm md:text-[15px] leading-relaxed text-[#333a40]">
                        Use AI to accelerate formative feedback while keeping your professional judgment central. These patterns show how AI can surface rubric dimensions, diagnose misconceptions, and draft targeted comments you refine before release.
                      </p>
                      <div className="h-px bg-gray-200" />
                      {/* Filter bar (shared discipline state) */}
                      <div className="px-2 py-2">
                        <div className="mb-3 text-center">
                          <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#e85c4a] opacity-90">Filter by discipline</span>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {DISCIPLINES.map(d => {
                            const active = d === selectedDiscipline;
                            return (
                              <button
                                key={d}
                                type="button"
                                onClick={() => setSelectedDiscipline(d)}
                                className={[
                                  'inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-tight border border-gray-300/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a] focus-visible:ring-offset-1',
                                  active
                                    ? 'bg-[#e85c4a] text-white border-[#e85c4a] shadow-sm hover:shadow-md'
                                    : 'bg-white/70 text-[#40484f] hover:bg-gray-50 hover:shadow-sm'
                                ].join(' ')}
                                aria-pressed={active}
                              >
                                <span className="whitespace-nowrap">{d}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      {/* Examples list */}
                      <div className="space-y-5">
                        <div className="h-px bg-gray-200" />
                        <h4 className="text-sm font-semibold tracking-tight text-[#e85c4a]">Examples <span className="text-gray-400 font-normal">({selectedDiscipline})</span></h4>
                        {(() => {
                          const filtered = FEEDBACK_EXAMPLES.filter(ex => ex.discipline === selectedDiscipline);
                          return filtered.length > 0 ? (
                            <ul className="space-y-4">
                              {filtered.map(ex => {
                                const open = openExampleIds.has(ex.id);
                                return (
                                  <li key={ex.id} className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
                                    <button
                                      type="button"
                                      onClick={() => toggleExample(ex.id)}
                                      aria-expanded={open}
                                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e85c4a]/60"
                                    >
                                      <span className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#e85c4a] shadow shadow-[#e85c4a]/40" />
                                        <span className="font-medium text-[13px] md:text-sm text-[#374047] tracking-tight">{ex.title}</span>
                                      </span>
                                      <svg className={`w-5 h-5 text-[#e85c4a] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                    </button>
                                    <div className={`transition-all duration-500 ease-out ${open ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden`} aria-hidden={!open}>
                                      {open && (
                                        <div className="px-5 pb-5 pt-0 space-y-5">
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-2">🔴 <span>Old Activity</span></p>
                                            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-[13px] leading-relaxed text-red-800">{ex.old}</div>
                                          </div>
                                          <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-2">🟢 <span>AI-Enhanced Feedback Activity</span></p>
                                            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-[13px] leading-relaxed text-green-800">{ex.redesigned}</div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="rounded-lg border border-dashed border-gray-300 bg-white px-4 py-6 text-[13px] text-gray-500 italic text-center">No examples yet for {selectedDiscipline}.</div>
                          );
                        })()}
                        {/* Prompt Tip Box */}
                        <div className="rounded-xl border border-amber-200 bg-amber-50/80 shadow-sm px-5 py-4 flex gap-3 items-start" role="note" aria-label="Prompt Tip">
                          <div className="mt-0.5 text-amber-500" aria-hidden="true">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.83V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.17A7 7 0 0 0 12 2Z"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                          </div>
                          <p className="text-[13px] leading-relaxed text-amber-800">
                            <span className="font-semibold text-amber-700">Prompt Tip:</span> AI-assisted feedback helps identify learning patterns quickly — giving students timely insights while freeing faculty time for deeper guidance. Always refine and humanize AI output before sharing.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed border-gray-300/70 bg-gray-50 px-4 py-6 text-[13px] text-gray-500 italic text-center">
                      Planned content area for “{label}” – examples, prompt patterns, cautions, and adaptation tips will appear here soon.
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
