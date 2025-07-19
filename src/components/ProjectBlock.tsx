

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectBlockProps {
  project: Project;
}



const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [hoveringBlock, setHoveringBlock] = React.useState(false);
  const [hoveringTitleDesc, setHoveringTitleDesc] = React.useState(false);

  // Animation variants for framer-motion
  const blockVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto" },
  };
  const imageVariants = {
    collapsed: { opacity: 1, height: "12rem", transition: { duration: 0.3 } },
    expanded: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };
  const buttonsVariants = {
    collapsed: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    expanded: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };
  const descVariants = {
    collapsed: { maxHeight: 160, overflow: "hidden" }, // allow more lines
    expanded: { maxHeight: 1000, overflow: "visible" },
  };

  // Fixed size for the card
  const CARD_HEIGHT = 600;
  const CARD_WIDTH = 360;

  // Expand when hovering title/desc, collapse only when mouse leaves the whole block
  React.useEffect(() => {
    if (hoveringTitleDesc) setExpanded(true);
    if (!hoveringBlock) setExpanded(false);
  }, [hoveringTitleDesc, hoveringBlock]);

  return (
    <motion.div
      className="bg-dark-gray rounded-2xl shadow-lg flex flex-col overflow-hidden border-2 border-white/10 hover:border-accent transition-all"
      variants={blockVariants}
      animate={expanded ? "expanded" : "collapsed"}
      initial="collapsed"
      style={{
        minHeight: CARD_HEIGHT,
        maxHeight: CARD_HEIGHT,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        maxWidth: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={() => setHoveringBlock(true)}
      onMouseLeave={() => setHoveringBlock(false)}
    >
      <AnimatePresence initial={false}>
        {project.imageSrc && (
          <motion.img
            key="img"
            src={project.imageSrc}
            alt={project.imageAlt || project.title}
            className="w-full object-cover"
            style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            variants={imageVariants}
            animate={expanded ? "expanded" : "collapsed"}
            initial="collapsed"
            exit="expanded"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col flex-1 p-5 min-h-0">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setHoveringTitleDesc(true)}
          onMouseLeave={() => setHoveringTitleDesc(false)}
        >
          <h3
            className={`text-2xl font-bold text-light-purple mb-1 ${expanded ? "whitespace-normal" : "truncate whitespace-nowrap max-w-[300px]"}`}
            title={project.title}
          >
            {project.title}
          </h3>
          <span className="text-accent text-sm font-semibold mb-5">{project.type}</span>
          {Array.isArray(project.technologies) && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-light-purple/20 text-light-purple text-xs font-semibold px-2 py-0.5 rounded-full border border-light-purple/40 whitespace-nowrap"
                  style={{ letterSpacing: '0.01em' }}
                >
                  #{tech}
                </span>
              ))}
            </div>
          )}
          <motion.p
            className={`text-gray-200 mb-4 text-sm md:text-base ${expanded ? "" : "line-clamp-3"}`}
            title={project.description}
            variants={descVariants}
            animate={expanded ? "expanded" : "collapsed"}
            initial="collapsed"
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>
        <AnimatePresence initial={false}>
          {!expanded && (
            <motion.div
              className="mt-auto flex flex-col items-center gap-2 w-full"
              variants={buttonsVariants}
              animate="collapsed"
              initial="collapsed"
              exit="expanded"
            >
              {/* If both demo and github exist, show both, stretched and aligned */}
              {project.demoName && project.demoUrl && project.githubUrl ? (
                <div className="flex gap-3 w-full items-stretch">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center">
                    <button className="w-full h-full flex items-center justify-center px-4 py-2 bg-light-purple text-dark-gray font-bold rounded-lg shadow hover:bg-accent transition-colors border-2 border-white whitespace-nowrap">{project.demoName}</button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center">
                    <button className="w-full h-full flex items-center justify-center px-4 py-2 bg-dark-gray text-light-purple font-bold rounded-lg shadow hover:bg-accent hover:text-dark-gray transition-colors border-2 border-light-purple whitespace-nowrap">GitHub</button>
                  </a>
                </div>
              ) : (
                // Otherwise, show only one button: demo > github > paper
                <>
                  {project.demoName && project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center">
                      <button className="w-full h-full flex items-center justify-center px-4 py-2 bg-light-purple text-dark-gray font-bold rounded-lg shadow hover:bg-accent transition-colors border-2 border-white whitespace-nowrap">{project.demoName}</button>
                    </a>
                  ) : project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center">
                      <button className="w-full h-full flex items-center justify-center px-4 py-2 bg-dark-gray text-light-purple font-bold rounded-lg shadow hover:bg-accent hover:text-dark-gray transition-colors border-2 border-light-purple whitespace-nowrap">GitHub</button>
                    </a>
                  ) : project.documentSrc ? (
                    <a href={project.documentSrc} download className="w-full flex items-center">
                      <button className="w-full h-full flex items-center justify-center px-4 py-2 bg-dark-gray text-light-purple font-bold rounded-lg shadow hover:bg-accent hover:text-dark-gray transition-colors border-2 border-light-purple whitespace-nowrap" type="button">Paper</button>
                    </a>
                  ) : null}
                </>  )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectBlock;
