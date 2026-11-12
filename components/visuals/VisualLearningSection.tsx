'use client';

import React, { useState } from 'react';
import {
  BookVisualGuide,
  VisualDiagram,
  FlowchartStep,
  MindmapBranch,
  ComparisonSide,
  TimelineEvent,
  ConceptComponent,
  InfographicItem,
} from '@/types/visuals';
import {
  GitBranch,
  ArrowDown,
  Layers,
  Eye,
  FileText,
  Sparkles,
  GraduationCap,
  Award,
  Info,
} from 'lucide-react';

interface VisualLearningSectionProps {
  guide: BookVisualGuide;
  bookTitle: string;
}

export const VisualLearningSection: React.FC<VisualLearningSectionProps> = ({
  guide,
  bookTitle,
}) => {
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'visual' | 'text'>('visual');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  if (!guide || !guide.diagrams || guide.diagrams.length === 0) {
    return null;
  }

  const currentDiagram: VisualDiagram = guide.diagrams[activeDiagramIndex] || guide.diagrams[0];

  return (
    <section
      id="sec-visuals"
      className="bg-white border border-[#E5DFD5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 scroll-mt-24"
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE3D6] pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5 text-forest-700" /> Visualise the Ideas
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-[11px] font-semibold">
              {guide.diagrams.length} Visual Models
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-charcoal-900">
            Interactive Visual Learning: {bookTitle}
          </h2>
          <p className="text-sm text-charcoal-600 max-w-2xl">
            {guide.introDescription}
          </p>
          {guide.sourceType === 'summary-derived' && (
            <p className="text-xs font-semibold text-amber-800">
              Summary-based overview; no book-specific relationships have been inferred.
            </p>
          )}
        </div>

        {/* View Switcher: Interactive Diagram vs Structured Text Breakdown */}
        <div className="flex items-center bg-[#F4EFE6] p-1 rounded-2xl border border-[#E2DCD0] self-start sm:self-auto select-none">
          <button
            type="button"
            onClick={() => setViewMode('visual')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'visual'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Interactive Diagram
          </button>
          <button
            type="button"
            onClick={() => setViewMode('text')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'text'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Text Breakdown
          </button>
        </div>
      </div>

      {/* Multiple Diagrams Selector Tabs (if book has more than 1 diagram) */}
      {guide.diagrams.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar select-none">
          <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider flex-shrink-0 mr-1">
            Choose Model:
          </span>
          {guide.diagrams.map((diag, idx) => (
            <button
              key={diag.id}
              onClick={() => {
                setActiveDiagramIndex(idx);
                setSelectedNode(null);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeDiagramIndex === idx
                  ? 'bg-forest-800 text-white shadow-sm ring-1 ring-forest-900'
                  : 'bg-[#FAF7F2] text-charcoal-700 hover:bg-[#F2ECE1] border border-[#E5DFD5]'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                activeDiagramIndex === idx ? 'bg-forest-900 text-white' : 'bg-[#EAE2D3] text-charcoal-800'
              }`}>
                {idx + 1}
              </span>
              <span>{diag.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main Active Diagram Container */}
      <div className="space-y-6">
        {/* Diagram Title & What It Represents Banner */}
        <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E8E1D5] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 text-[11px] font-bold uppercase tracking-wider">
                {currentDiagram.badge}
              </span>
              <span className="text-xs text-charcoal-500 font-mono capitalize">
                Format: {currentDiagram.format}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-charcoal-900">
              {currentDiagram.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-3xl">
              <strong className="text-forest-900 font-semibold">What This Visual Represents: </strong>
              {currentDiagram.whatItRepresents}
            </p>
          </div>
        </div>

        {/* Dynamic Visual Content Renderer */}
        {viewMode === 'visual' ? (
          <div className="p-4 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DFD5] relative overflow-hidden shadow-inner">
            {currentDiagram.format === 'flowchart' && currentDiagram.flowchartData && (
              <FlowchartRenderer
                steps={currentDiagram.flowchartData.steps}
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(selectedNode === node ? null : node)}
              />
            )}

            {currentDiagram.format === 'mindmap' && currentDiagram.mindmapData && (
              <MindmapRenderer
                centralTheme={currentDiagram.mindmapData.centralTheme}
                branches={currentDiagram.mindmapData.branches}
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(selectedNode === node ? null : node)}
              />
            )}

            {currentDiagram.format === 'comparison' && currentDiagram.comparisonData && (
              <ComparisonRenderer
                sideA={currentDiagram.comparisonData.sideA}
                sideB={currentDiagram.comparisonData.sideB}
                verdict={currentDiagram.comparisonData.verdict}
              />
            )}

            {currentDiagram.format === 'timeline' && currentDiagram.timelineData && (
              <TimelineRenderer
                events={currentDiagram.timelineData.events}
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(selectedNode === node ? null : node)}
              />
            )}

            {currentDiagram.format === 'concept-diagram' && currentDiagram.conceptData && (
              <ConceptDiagramRenderer
                coreConcept={currentDiagram.conceptData.coreConcept}
                components={currentDiagram.conceptData.components}
                feedbackLoop={currentDiagram.conceptData.feedbackLoop}
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(selectedNode === node ? null : node)}
              />
            )}

            {currentDiagram.format === 'infographic' && currentDiagram.infographicData && (
              <InfographicRenderer items={currentDiagram.infographicData.items} />
            )}
          </div>
        ) : (
          <DiagramTextAlternative diagram={currentDiagram} />
        )}

        {/* 1. Simple Description Below Diagram */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-forest-800 uppercase tracking-wider">
            <Info className="w-4 h-4 text-forest-700" />
            <span>How to Read &amp; Understand This Model</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-serif">
            {currentDiagram.simpleDescription}
          </p>
        </div>

        {/* 2. Practical Student-Related Example Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF5EB] border border-[#E4D7C3] flex items-start gap-4 text-charcoal-800 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-forest-800 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <GraduationCap className="w-5 h-5 text-gold-400" />
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-forest-900 uppercase tracking-wider">
              Real-Life Student Example
            </span>
            <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed">
              {currentDiagram.studentExample}
            </p>
          </div>
        </div>

        {/* 3. Quick Revision Summary Box */}
        <div className="p-5 rounded-2xl bg-forest-900 text-cream-100 flex items-start gap-3.5 shadow-md">
          <Sparkles className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Quick Revision Takeaway
            </span>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              {currentDiagram.quickRevision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiagramTextAlternative: React.FC<{ diagram: VisualDiagram }> = ({ diagram }) => {
  const sectionClass = 'space-y-3';
  const cardClass = 'p-4 rounded-2xl bg-white border border-[#E5DFD5]';

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DFD5] space-y-6">
      <div className="flex items-center gap-2 text-forest-800 text-xs font-bold uppercase tracking-wider">
        <FileText className="w-4 h-4 text-forest-700" />
        <span>Complete Text Explanation</span>
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold font-serif text-charcoal-900">{diagram.title}</h4>
        <p className="text-sm text-charcoal-800 leading-relaxed">{diagram.whatItRepresents}</p>
        <p className="text-sm text-charcoal-700 leading-relaxed">{diagram.simpleDescription}</p>
      </div>

      {diagram.flowchartData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Sequence and decision paths</h5>
          <ol className="space-y-2">
            {diagram.flowchartData.steps.map((step, index) => (
              <li key={step.stepNumber} className={cardClass}>
                <p className="font-bold text-forest-900">
                  Step {step.stepNumber}: {step.label}
                  {step.tag ? <span className="font-normal text-charcoal-600"> — {step.tag}</span> : null}
                </p>
                <p className="mt-1 text-sm text-charcoal-700">{step.description}</p>
                {step.isDecision && step.decisionPath && (
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><strong>{step.decisionPath.yesLabel || 'Path A'}:</strong> {step.decisionPath.yesOutcome}</li>
                    <li><strong>{step.decisionPath.noLabel || 'Path B'}:</strong> {step.decisionPath.noOutcome}</li>
                  </ul>
                )}
                {step.outcome && <p className="mt-2 text-sm"><strong>Outcome:</strong> {step.outcome}</p>}
                {index < diagram.flowchartData!.steps.length - 1 && (
                  <p className="mt-2 text-xs font-semibold text-forest-700">Then continue to the next step.</p>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {diagram.mindmapData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Central idea and branches</h5>
          <div className={cardClass}>
            <p className="font-bold text-forest-900">{diagram.mindmapData.centralTheme.label}</p>
            <p className="mt-1 text-sm text-charcoal-700">{diagram.mindmapData.centralTheme.description}</p>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-forest-700">
            The central idea is organized into the following branches; each branch groups its related points.
          </p>
          <div className="space-y-3">
            {diagram.mindmapData.branches.map((branch) => (
              <div key={branch.category} className={cardClass}>
                <h6 className="font-bold text-charcoal-900">{branch.category}</h6>
                <ul className="mt-2 space-y-2">
                  {branch.nodes.map((node) => (
                    <li key={node.label} className="border-l-2 border-forest-300 pl-3">
                      <p className="text-sm font-semibold text-charcoal-800">{node.label}</p>
                      <p className="text-sm text-charcoal-700">{node.description}</p>
                      {node.detail && <p className="text-sm text-charcoal-600"><strong>Practical meaning:</strong> {node.detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {diagram.comparisonData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Compare both sides</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[diagram.comparisonData.sideA, diagram.comparisonData.sideB].map((side) => (
              <div key={side.name} className={cardClass}>
                <h6 className="font-bold text-charcoal-900">{side.name}</h6>
                <p className="text-xs text-charcoal-600">{side.subtitle}</p>
                <ul className="mt-2 space-y-2">
                  {side.traits.map((trait) => (
                    <li key={trait.point} className="text-sm text-charcoal-700">
                      <strong>{trait.point}:</strong> {trait.explanation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={cardClass}><strong>How to apply the comparison:</strong> {diagram.comparisonData.verdict}</p>
        </section>
      )}

      {diagram.timelineData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Timeline and progression</h5>
          <p className="text-sm text-charcoal-700">Read the events from top to bottom. Each event represents the next period or stage in the account.</p>
          <ol className="space-y-2">
            {diagram.timelineData.events.map((event, index) => (
              <li key={`${event.period}-${event.title}`} className={cardClass}>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest-700">
                  {index + 1}. {event.period}{event.subtitle ? ` — ${event.subtitle}` : ''}
                </p>
                <h6 className="mt-1 font-bold text-charcoal-900">{event.title}</h6>
                <p className="mt-1 text-sm text-charcoal-700">{event.description}</p>
                <p className="mt-2 text-sm text-charcoal-700"><strong>Key learning:</strong> {event.keyLearning}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {diagram.conceptData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Core concept and connected parts</h5>
          <div className={cardClass}>
            <p className="font-bold text-forest-900">{diagram.conceptData.coreConcept}</p>
          </div>
          <ol className="space-y-2">
            {diagram.conceptData.components.map((component, index) => (
              <li key={`${component.name}-${index}`} className={cardClass}>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest-700">
                  Connection to the core: {component.connectionToCore}
                </p>
                <h6 className="mt-1 font-bold text-charcoal-900">{component.name} <span className="font-normal">({component.role})</span></h6>
                <p className="mt-1 text-sm text-charcoal-700">{component.details}</p>
              </li>
            ))}
          </ol>
          {diagram.conceptData.feedbackLoop && (
            <p className={cardClass}><strong>Feedback loop:</strong> {diagram.conceptData.feedbackLoop}</p>
          )}
        </section>
      )}

      {diagram.infographicData && (
        <section className={sectionClass}>
          <h5 className="font-bold text-sm text-charcoal-900">Key points and practical meaning</h5>
          <p className="text-sm text-charcoal-700">
            These items are summary points, not a sequence or causal chain unless a relationship is explicitly described.
          </p>
          <ol className="space-y-2">
            {diagram.infographicData.items.map((item, index) => (
              <li key={`${item.title}-${index}`} className={cardClass}>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest-700">{item.highlight}</p>
                <h6 className="mt-1 font-bold text-charcoal-900">{item.title}</h6>
                <p className="mt-1 text-sm text-charcoal-700">{item.takeaway}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="p-5 rounded-2xl bg-[#FAF5EB] border border-[#E4D7C3] space-y-2">
        <h5 className="font-bold text-sm text-forest-900">Practical meaning</h5>
        <p className="text-sm text-charcoal-800 leading-relaxed">{diagram.studentExample}</p>
        <p className="text-sm text-charcoal-800 leading-relaxed"><strong>Quick revision:</strong> {diagram.quickRevision}</p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 1: FLOWCHART                                              */
/* -------------------------------------------------------------------------- */
const FlowchartRenderer: React.FC<{
  steps: FlowchartStep[];
  selectedNode: string | null;
  onSelectNode: (node: string) => void;
}> = ({ steps, selectedNode, onSelectNode }) => {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl mx-auto space-y-3">
        {steps.map((step, index) => {
          const isSelected = selectedNode === `step-${step.stepNumber}`;
          return (
            <div key={step.stepNumber}>
              <div
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => onSelectNode(`step-${step.stepNumber}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectNode(`step-${step.stepNumber}`);
                  }
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all select-none space-y-3 ${
                  isSelected
                    ? 'bg-white border-forest-700 shadow-md ring-2 ring-forest-600/30'
                    : 'bg-white hover:bg-cream-50 border-[#E2DCD0] shadow-sm hover:shadow'
                }`}
              >
                {/* Step Pill & Header */}
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-forest-800 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {step.stepNumber}
                  </span>
                  {step.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-forest-50 border border-forest-200 text-forest-800">
                      {step.tag}
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h4 className="font-serif font-bold text-charcoal-900 text-sm leading-snug">
                  {step.label}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decision Branch if applicable */}
                {step.isDecision && step.decisionPath && (
                  <div className="pt-2 border-t border-[#EAE3D6] space-y-2">
                    <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900">
                      <strong className="block text-[10px] uppercase tracking-wider text-emerald-800">
                        ✓ {step.decisionPath.yesLabel}
                      </strong>
                      <span className="text-charcoal-700">{step.decisionPath.yesOutcome}</span>
                    </div>

                    <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
                      <strong className="block text-[10px] uppercase tracking-wider text-amber-800">
                        ✗ {step.decisionPath.noLabel}
                      </strong>
                      <span className="text-charcoal-700">{step.decisionPath.noOutcome}</span>
                    </div>
                  </div>
                )}

                {/* Outcome Pill */}
                {step.outcome && (
                  <div className="p-2 rounded-xl bg-gold-50 border border-gold-200 text-[11px] text-amber-900 font-medium">
                    <strong className="block text-[10px] uppercase tracking-wider text-amber-800">
                      Outcome:
                    </strong>
                    {step.outcome}
                  </div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center py-2 text-forest-700" aria-label="Leads to next step">
                  <span className="text-[10px] font-semibold uppercase tracking-wide">Next</span>
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-charcoal-500 text-center italic">
        💡 Tip: Tap any card to highlight its details and follow the sequential progression.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 2: MIND MAP                                               */
/* -------------------------------------------------------------------------- */
const MindmapRenderer: React.FC<{
  centralTheme: { label: string; description: string };
  branches: MindmapBranch[];
  selectedNode: string | null;
  onSelectNode: (node: string) => void;
}> = ({ centralTheme, branches, selectedNode, onSelectNode }) => {
  return (
    <div className="space-y-4">
      {/* Central Theme Hub */}
      <div className="max-w-xl mx-auto p-6 rounded-3xl bg-forest-900 text-white text-center shadow-md border-2 border-gold-500/80 space-y-2 relative">
        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-forest-800 border border-forest-700 text-gold-400 text-[10px] font-bold uppercase tracking-wider">
          <GitBranch className="w-3 h-3" /> Central Core Theme
        </span>
        <h4 className="text-xl sm:text-2xl font-serif font-bold text-cream-100">
          {centralTheme.label}
        </h4>
        <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
          {centralTheme.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {branches.map((branch, bIdx) => {
          const colorStyles =
            branch.color === 'forest'
              ? 'border-forest-700 bg-emerald-50/60 text-forest-950'
              : branch.color === 'gold'
              ? 'border-amber-600 bg-amber-50/60 text-amber-950'
              : branch.color === 'sage'
              ? 'border-teal-600 bg-teal-50/60 text-teal-950'
              : 'border-orange-600 bg-orange-50/60 text-orange-950';

          return (
            <div key={branch.category} className="space-y-2">
              <div className="flex flex-col items-center text-forest-800" aria-label={`The core theme branches into ${branch.category}`}>
                <span className="text-[10px] font-semibold uppercase tracking-wide">Branch from core theme</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className={`p-5 rounded-2xl border-l-4 bg-white border border-[#E5DFD5] shadow-sm space-y-3 ${colorStyles}`}>
                <span className="sr-only">The core theme branches into {branch.category}</span>
                <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-2">
                  <h5 className="font-serif font-bold text-sm sm:text-base text-charcoal-900">
                    {branch.category}
                  </h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">
                    {branch.nodes.length} Nodes
                  </span>
                </div>

                <div className="space-y-2.5">
                  {branch.nodes.map((node, nIdx) => {
                    const nodeKey = `b-${bIdx}-n-${nIdx}`;
                    const isSelected = selectedNode === nodeKey;
                    return (
                      <div key={nodeKey} className="grid grid-cols-[auto_1fr] gap-x-2">
                        <div className="flex flex-col items-center text-forest-700">
                          <span className="sr-only">{branch.category} includes {node.label}</span>
                          <ArrowDown className="w-4 h-4" aria-hidden="true" />
                          <span className="text-[9px] font-semibold uppercase tracking-wide">Includes</span>
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          aria-pressed={isSelected}
                          onClick={() => onSelectNode(nodeKey)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              onSelectNode(nodeKey);
                            }
                          }}
                          className={`text-left p-3 rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-white border-forest-700 shadow-md ring-1 ring-forest-700'
                              : 'bg-[#FAF7F2] hover:bg-white border-[#E5DFD5]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-charcoal-900">
                              {node.label}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-charcoal-600 mt-1 pl-5 leading-relaxed">
                            {node.description}
                          </p>
                          {node.detail && isSelected && (
                            <div className="mt-2 p-2 rounded-lg bg-gold-50 border border-gold-200 text-[11px] text-amber-900">
                              <strong>Key Takeaway:</strong> {node.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 3: COMPARISON DIAGRAM                                      */
/* -------------------------------------------------------------------------- */
const ComparisonRenderer: React.FC<{
  sideA: ComparisonSide;
  sideB: ComparisonSide;
  verdict: string;
}> = ({ sideA, sideB, verdict }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Side A Card */}
        <div className="p-6 rounded-3xl bg-white border-2 border-forest-600 shadow-sm space-y-4">
          <div className="space-y-1 border-b border-[#EAE3D6] pb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 text-[10px] font-bold uppercase tracking-wider">
              {sideA.badge}
            </span>
            <h4 className="text-xl font-serif font-bold text-forest-950">
              {sideA.name}
            </h4>
            <p className="text-xs text-forest-800 font-medium">{sideA.subtitle}</p>
          </div>

          <div className="space-y-3">
            {sideA.traits.map((trait, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-forest-50/50 border border-forest-100 space-y-1">
                <span className="text-xs font-bold text-forest-900 block">
                  {trait.point}
                </span>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  {trait.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Side B Card */}
        <div className="p-6 rounded-3xl bg-white border-2 border-amber-600 shadow-sm space-y-4">
          <div className="space-y-1 border-b border-[#EAE3D6] pb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
              {sideB.badge}
            </span>
            <h4 className="text-xl font-serif font-bold text-amber-950">
              {sideB.name}
            </h4>
            <p className="text-xs text-amber-800 font-medium">{sideB.subtitle}</p>
          </div>

          <div className="space-y-3">
            {sideB.traits.map((trait, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 space-y-1">
                <span className="text-xs font-bold text-amber-900 block">
                  {trait.point}
                </span>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  {trait.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synthesis Verdict Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-forest-900 via-forest-950 to-charcoal-900 text-white shadow-md flex items-start gap-3">
        <Award className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
            Educational Verdict &amp; Core Synthesis
          </span>
          <p className="text-xs sm:text-sm text-cream-100 leading-relaxed">
            {verdict}
          </p>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 4: TIMELINE                                               */
/* -------------------------------------------------------------------------- */
const TimelineRenderer: React.FC<{
  events: TimelineEvent[];
  selectedNode: string | null;
  onSelectNode: (node: string) => void;
}> = ({ events, selectedNode, onSelectNode }) => {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-forest-300">
      {events.map((ev, idx) => {
        const isSelected = selectedNode === `tl-${idx}`;
        return (
          <div key={idx} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[27px] sm:-left-[31px] top-4 w-5 h-5 rounded-full bg-forest-800 border-4 border-white shadow-sm flex items-center justify-center" />

            <div
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => onSelectNode(`tl-${idx}`)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelectNode(`tl-${idx}`);
                }
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-forest-700 shadow-md ring-2 ring-forest-600/30'
                  : 'bg-white hover:bg-cream-50 border-[#E2DCD0] shadow-sm'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE3D6] pb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-forest-100 text-forest-800 text-[10px] font-bold font-mono uppercase tracking-wider">
                  {ev.period}
                </span>
                {ev.subtitle && (
                  <span className="text-xs text-charcoal-500 italic">
                    {ev.subtitle}
                  </span>
                )}
              </div>

              <h4 className="text-base sm:text-lg font-serif font-bold text-charcoal-900 mt-2">
                {ev.title}
              </h4>

              <p className="text-xs sm:text-sm text-charcoal-700 mt-1 leading-relaxed">
                {ev.description}
              </p>

              <div className="mt-3 p-3 rounded-xl bg-gold-50 border border-gold-200 text-xs text-amber-950 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Key Learning Takeaway:</strong> {ev.keyLearning}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 5: CONCEPT DIAGRAM                                        */
/* -------------------------------------------------------------------------- */
const ConceptDiagramRenderer: React.FC<{
  coreConcept: string;
  components: ConceptComponent[];
  feedbackLoop?: string;
  selectedNode: string | null;
  onSelectNode: (node: string) => void;
}> = ({ coreConcept, components, feedbackLoop, selectedNode, onSelectNode }) => {
  return (
    <div className="space-y-6">
      {/* Centerpiece Core Concept */}
      <div className="max-w-md mx-auto p-5 rounded-2xl bg-forest-900 text-white text-center shadow-md border-2 border-gold-500 space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 block">
          Core Conceptual Engine
        </span>
        <h4 className="text-lg sm:text-xl font-serif font-bold text-cream-100">
          {coreConcept}
        </h4>
      </div>

      {/* Each component is explicitly linked back to the core concept. */}
      <div className="max-w-3xl mx-auto space-y-3">
        {components.map((comp, idx) => {
          const isSelected = selectedNode === `concept-${idx}`;
          return (
            <React.Fragment key={`${comp.name}-${idx}`}>
              <div className="flex flex-col items-center text-forest-800 px-3" aria-label={`${comp.connectionToCore}: ${coreConcept} and ${comp.name}`}>
                <span className="text-[11px] font-semibold text-center">{comp.connectionToCore}</span>
                <ArrowDown className="w-5 h-5" aria-hidden="true" />
              </div>
              <div
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => onSelectNode(`concept-${idx}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectNode(`concept-${idx}`);
                  }
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-white border-forest-700 shadow-md ring-2 ring-forest-600/30'
                    : 'bg-white hover:bg-cream-50 border-[#E2DCD0] shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE3D6] pb-2">
                  <h5 className="font-serif font-bold text-sm sm:text-base text-charcoal-900">
                    {comp.name}
                  </h5>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-forest-50 text-forest-800 font-semibold border border-forest-200">
                    {comp.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 mt-2 leading-relaxed">
                  {comp.details}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Feedback Loop Callout */}
      {feedbackLoop && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Compounding Feedback Loop:</strong> {feedbackLoop}
          </div>
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* FORMAT RENDERER 6: REVISION INFOGRAPHIC                                   */
/* -------------------------------------------------------------------------- */
const InfographicRenderer: React.FC<{ items: InfographicItem[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl bg-white border border-[#E2DCD0] shadow-sm flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow"
        >
          <div className="space-y-2">
            <span className="text-xl sm:text-2xl font-serif font-extrabold text-forest-800 block leading-tight">
              {item.highlight}
            </span>
            <h5 className="font-bold text-xs uppercase tracking-wider text-charcoal-900">
              {item.title}
            </h5>
          </div>

          <p className="text-xs text-charcoal-600 leading-relaxed border-t border-[#EAE3D6] pt-3">
            {item.takeaway}
          </p>
        </div>
      ))}
    </div>
  );
};
