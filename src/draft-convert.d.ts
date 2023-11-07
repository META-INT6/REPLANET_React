declare module 'draft-convert' {
    import {
      ContentBlock,
      ContentState,
      DraftEntityMutability,
      DraftInlineStyleType,
      EntityInstance,
    } from 'draft-js';
  
    import { ReactElement, ReactNode } from 'react';
  
    interface ConvertToHTMLConfig {
      // Inline styles:
      styleToHTML?: <T extends DraftInlineStyleType>(style: T) => Tag | void;
  
      // Block styles:
      blockToHTML?: (block: ContentBlock) => Tag;
  
      // Entity styling:
      entityToHTML?: (
        entity: EntityInstance,
        originalText: string
      ) => Tag;
    }
  
    type ContentStateConverter = (contentState: ContentState) => string;
  
    type Tag =
      | ReactNode
      | { start: string; end: string; empty?: string }
      | { element: ReactNode; empty?: ReactNode };
  
    function convertToHTML(config: ConvertToHTMLConfig): ContentStateConverter;
  }